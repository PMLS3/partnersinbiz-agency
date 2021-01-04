'use strict'
const express = require('express')
const router = express.Router()
const puppeteer = require('puppeteer-extra')
const delay = require('delay')
// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// Add adblocker plugin to block all ads and trackers (saves bandwidth)
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
puppeteer.use(AdblockerPlugin({ blockTrackers: true }))

const admin = require('firebase-admin')
admin.initializeApp()

let user = {
  username: 'one_person_empire',
  password: 'MPStander@3',
}

async function login(user) {
  console.log('fire', admin.firestore())
  console.log('user', user)
  //   puppeteer.launch({ headless: true }).then(async (browser) => {
  puppeteer
    .launch({
      headless: false,
      args: [
        '--allow-external-pages',
        '--allow-third-party-modules',
        '--data-reduction-proxy-http-proxies',
        '--no-sandbox',
      ],
    })
    .then(async (browser) => {
      const page = await browser.newPage()
      await page.goto('https://www.instagram.com/accounts/login/')

      await page.waitFor('input[name=username]', { visible: true })
      await delay(300)
      await page.type('input[name=username]', user.email || user.username, {
        delay: 27,
      })

      await delay(520)
      await page.type('input[name=password]', user.password, { delay: 42 })

      await delay(700)
      // Submit log in credentials and wait for navigation

      await Promise.all([
        page.click('[type="submit"]'),
        page.waitForNavigation({
          waitUntil: 'networkidle0',
        }),
      ])
      //   const [signup] = await page.$x('//button[contains(.,"Log in")]')
      //   await Promise.all([page.waitForNavigation(), signup.click({ delay: 30 })])

      // => https://www.instagram.com/ (main feed)

      await delay(20000)
      //   await page.close()
    })
}

login(user)
module.exports = router
