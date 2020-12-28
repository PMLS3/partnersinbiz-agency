const Imap = require('imap'), inspect = require('util').inspect;

// Here, copy email source-mail-server to target-mail-server
let copyEmail = (srcServer1, srcServer2, emailServerName) => {
    srcServer1.search(['ALL'], (error, uids) => {
        //console.log('message', uids);
        var count = uids.length;
        var f = srcServer1.fetch(uids, { bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)', struct: true });

        f.on('message', function (msg, seqno) {
            //console.log('Got a message with seq no: ' + seqno);

            var buffer = [], bufLen = 0, bufferText = '';
            msg.on('body', function (stream, info) {
                stream.on('data', function (chunk) {
                    bufferText += chunk.toString('utf8');
                    buffer.push(chunk);
                    bufLen += chunk.length;
                });
                stream.once('end', function () {
                    console.log('Parsed header: %s', inspect(Imap.parseHeader(bufferText)));                  // email contents
                    console.log(`====${emailServerName} - Finished message no. ${seqno} =======`);            // email email seqno

                    //console.log('message-binay-buffer', buffer);
                    //console.log('message-bufLen', bufLen);
                    //console.log('message-total-email-count', count);

                    buffer = Buffer.concat(buffer, bufLen);
                    srcServer2.append(buffer, {
                        date: new Date(msg.date),
                        flags: ['Seen']
                    }, function (err) {
                        if (err) throw err;
                        if (--count === 0) {
                            console.log('Done copying!');
                            srcServer2.end()                    // close mail server1 connection
                            srcServer1.end()                    // close mail server2 connection
                        }
                    });

                });
            });
        });
        f.once('error', function (err) {
            console.log('Fetch error: ' + err);
        });
        f.once('end', function () {
            console.log('Done fetching all messages!');
        });
    });
};

let srcServer2 = new Imap({
    user: 'example-target@gmail.com',
    password: 'password',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: {
        rejectUnauthorized: false
    },
    authTimeout: 3000
}).once('error', function (err) {
    console.log('Target mail server error:- ', err);
});

srcServer2.once('ready', function () {
    srcServer2.openBox('INBOX', true, function (err, box) {
        if (err) throw err;
        console.log('message', 'Target mail server ready');
        let srcServer1 = new Imap({
            user: 'example-source@gmail.com',
            password: 'password',
            host: 'imap.gmail.com',
            port: 993,
            tls: true,
            tlsOptions: {
                rejectUnauthorized: false
            },
            authTimeout: 3000
        }).once('error', function (err) {
            console.log('Source Server Error:- ', err);
        });
        srcServer1.once('ready', function () {
            srcServer1.openBox('INBOX', true, function (err, box) {
                if (err) throw err;
                console.log('message', 'Source mail server ready');

                copyEmail(srcServer1, srcServer2, 'Server1');
            })
        });
        srcServer1.connect();
    });
})
srcServer2.connect();