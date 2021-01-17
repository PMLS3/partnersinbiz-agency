const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: 'mail.pocketfox.co.za',
  port: 465,
  secure: true,
  auth: {
    user: 'peet.stander@pocketfox.co.za',
    pass: '5a9etiplXIkSma',
  },
})

let mailOptions = {
  from: 'james.stander@pocketfox.co.za',
  to: 'thepartnersinbiz@gmail.com',
  subject: 'Test',
  text: 'Hello World!',
}

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error.message)
  }
  console.log('success')
})

// exports.sendBookingUserEmails = functions.firestore
// .document('{resellerId}/apps/{companyId}/{componentId}/bookings')
// .onCreate((snap, context) => {
//     const mailOptions = {
//         from: snap.data().Company_email,
//         to: snap.data().user_email,
//         subject: 'Booking Confirmed',
//         html: `<h1>Booking Confirmation for ${snap.data().user_displayName}</h1>
//         <p> <b>Email: </b>${snap.data().user_email}<br>
//         <b>Mobile: </b>${snap.data().user_mobile}<br></p>
//                             <p>
//                             <b>Title: </b>${snap.data().title}<br>
//                             <b>Date: </b>${snap.data().bookingdate}<br>
//                                <b>Start: </b>${snap.data().start}<br>
//                                <b>Extra info: </b>${snap.data().description}<br>
//                             </p>

//                             <p>
//                             <b>With: </b>${snap.data().Agent_name} ${snap.data().Agent_surname}<br>
//                             <b>Email: </b>${snap.data().Agent_email}<br>

//                             </p>`
//     };
//     return transporter.sendMail(mailOptions, (error, data) => {
//         if (error) {
//             console.log(error)
//             return
//         }
//         console.log("Sent!")
//     });
// });

// exports.sendBookingAgentEmails = functions.firestore
// .document('{resellerId}/apps/{companyId}/{componentId}/bookings')
// .onCreate((snap, context) => {
//     const mailOptions = {
//         from: snap.data().Company_email,
//         to: snap.data().Agent_email,
//         subject: 'Yeah! Another booking',
//         html: `<h1>Booking Confirmation for ${snap.data().user_displayName}</h1>
//         <p>
//         <b>Name: </b>${snap.data().user_name}<br>
//         <b>Surname: </b>${snap.data().user_surname}<br>
//         <b>Email: </b>${snap.data().user_email}<br>
//         <b>Mobile: </b>${snap.data().user_mobile}<br></p>
//                             <p>
//                             <b>Title: </b>${snap.data().title}<br>
//                             <b>Date: </b>${snap.data().bookingdate}<br>
//                                <b>Start: </b>${snap.data().start}<br>
//                                <b>Extra info: </b>${snap.data().description}<br>
//                             </p>

//                             <p>
//                             <b>With: </b>${snap.data().Agent_name} ${snap.data().Agent_surname}<br>
//                             <b>Email: </b>${snap.data().Agent_email}<br>

//                             </p>`
//     };
//     return transporter.sendMail(mailOptions, (error, data) => {
//         if (error) {
//             console.log(error)
//             return
//         }
//         console.log("Sent!")
//     });
// });

// exports.sendBookingLocationEmails = functions.firestore
// .document('{resellerId}/apps/{companyId}/{componentId}/bookings')
// .onCreate((snap, context) => {
//     const mailOptions = {
//         from: snap.data().Company_email,
//         to: snap.data().Location_email,
//         subject: 'Yeah! Another booking',
//         html: `<h1>Booking Confirmation for ${snap.data().user_displayName}</h1>
//         <p>
//         <b>Name: </b>${snap.data().user_name}<br>
//         <b>Surname: </b>${snap.data().user_surname}<br>
//         <b>Email: </b>${snap.data().user_email}<br>
//         <b>Mobile: </b>${snap.data().user_mobile}<br></p>
//                             <p>
//                             <b>Title: </b>${snap.data().title}<br>
//                             <b>Date: </b>${snap.data().bookingdate}<br>
//                                <b>Start: </b>${snap.data().start}<br>
//                                <b>Extra info: </b>${snap.data().description}<br>
//                             </p>

//                             <p>
//                             <b>With: </b>${snap.data().Agent_name} ${snap.data().Agent_surname}<br>
//                             <b>Email: </b>${snap.data().Agent_email}<br>

//                             </p>`
//     };
//     return transporter.sendMail(mailOptions, (error, data) => {
//         if (error) {
//             console.log(error)
//             return
//         }
//         console.log("Sent!")
//     });
// });
