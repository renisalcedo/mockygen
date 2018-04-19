const fs = require('fs')

class User {
  constructor(userData) {
    this.username = userData.username
    this.charData = userData.charData
    this.specialChar = userData.specialChar
    this.emails = userData.email
    this.telPrefix = userData.telPrefix
  }

  generateEmails(many) {
    const user = this.username
    let userEmails = []

    for(let i = 0; i < many; i++) {
      // Creates email vendor
      let random = Math.floor(Math.random() * emails.length)
      let emailVendor = this.emails[random]

      // Generates the emails
      let email = `${user[i]}@${emailVendor}`
      userEmails.push(email)
    }

    return userEmails
  }

  generateAge() {
    return Math.floor(Math.random() * 100)
  }

  generatePhoneNumber(state = 'newYork') {
    let phoneNumber = this.telPrefix[state]
    let digits = 0
    for(let i = 0; i < 7; i++) {
      const rand = Math.floor(Math.random() * 9)
      digits += rand
    }
    phoneNumber = phoneNumber+String(digits)
    return parseInt(phoneNumber)
  }

  minCharPassword() {
    let password = ''
    while(password.length < 8) {
      let rand = Math.floor(Math.random() * this.charData.length)
      password += this.charData[rand]
    }
    return password
  }

  specialCharPassword(many) {
    const chars = this.charData.concat(this.specialChar)
    let password = ''
    while(password.length !== many) {
      let rand = Math.floor(Math.random() * chars.length)
      password += this.charData[rand]
    }
    return password
  }
}

module.exports = User