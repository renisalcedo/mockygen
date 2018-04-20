const fs = require('fs')

class User {
  constructor(userData) {
    // User Data initialization
    this.username = userData.username
    this.emails = userData.emails
    this.charData = userData.charData
    this.specialChar = userData.specialChar
    this.telPrefix = userData.telPrefix
  }

  generateEmails(many) {
    const user = this.username
    let userEmails = []

    for(let i = 0; i < many; i++) {
      // Creates email vendor
      let randomEmailVendor = Math.floor(Math.random() * this.emails.length)
      let randomEmailUser = Math.floor(Math.random() * user.length)
      let emailVendor = this.emails[randomEmailVendor]

      // Generates the emails
      let email = `${user[randomEmailUser]}@${emailVendor}`
      userEmails.push(email)
    }

    return userEmails
  }

  generateAge(min = 10, max = 40) {
    // Ensures min and max to be integers
    min = Math.ceil(min)
    max = Math.floor(max)+1

    // Return age between min and max
    return Math.floor(Math.random() * (max-min) + min)
  }

  generatePhoneNumber(state = 'newYork') {
    // State prefix code
    let phoneNumber = this.telPrefix[state]
    let digits = Math.floor(Math.random() * 9)
    // Generates digits for phone number
    for(let i = 0; i < 6; i++) {
      const rand = Math.floor(Math.random() * 9)
      digits += String(rand)
    }
    phoneNumber = phoneNumber+digits
    // Returns integer phone number
    return parseInt(phoneNumber)
  }

  minCharPassword() {
    let password = ''
    // Returns a default 8 length password
    while(password.length < 8) {
      let rand = Math.floor(Math.random() * this.charData.length)
      password += this.charData[rand]
    }
    return password
  }

  specialCharPassword(many) {
    let password = ''
    while(password.length < many+1) {
      let randChar = Math.floor(Math.random() * this.charData.length)
      let randSpecialChar = Math.floor(Math.random() * this.specialChar.length)

      // Generates random special characters and characters
      password += this.charData[randChar]
      password += this.specialChar[randSpecialChar]
    }
    // Returns password of chars mixed with special chars
    return password
  }
}

module.exports = User