const fs = require('fs')

class User {
  constructor(params) {
    this.username = ["Senpai_XD", "Chan14551", "Perfect Harmony", "Anonymous – Friend",  "MrExtinct", "WisherMike", "Adamle", "twilightvanillagalaxies", "Flattering", "Law", "Lemon", "Honeypie", "Lovely", "Dove", "Live", "Pink", "Flyswat", "Naughty", "Nuclei",  "Latest", "Marble", "Vinous", "Leostereo", "Honey", "livingfree8", "sweet", "Gozmit", "Bubble", "Honey", "Buttercup", "Hey_you_quinn", "Painter-Prank", "Star Shadow", "angelic", "Witness", "lovely",  "Swag Football", "EyeCandyI", "Pokie", "Honeycake", "Snerus",  "silverboyp",  "Popoff", "Protein Punch", "Purse Stand", "Rose Rain", "Jake Justin", "Ex Comfy", "AmazingHuh", "DeepDarkSamurai", "Silver", "Tanya", "Beatrice", "Hammett", "Chaim", "Jeanette", "Byron", "Jena", "Jane", "Steven", "Sage", "Kato", "Ursula", "Hasad", "Igor", "Reese", "Raymond", "Wynne", "Caleb", "Sharon", "Harper", "Gay", "Sybil", "Elmo", "Kelly", "Tarik", "Lev", "Plato", "Samson", "Macon", "Micah", "Quentin", "Yoshio", "Maxwell", "Silas", "Camilla", "Yoshi", "Preston", "Candice", "Magee", "Delilah", "Aristotle", "Ferdinand", "Sarah", "Macey", "Elliott", "Piper", "Hyatt", "Arsenio", "Germaine", "Hedwig", "Ava", "Garrison", "Leo", "Kristen", "Lucian", "Molly", "Knox", "Zephr", "Brynn", "Vaughan", "Chandler", "Palmer", "Urielle", "Keiko", "Knox", "Darrel", "Ocean", "Rowan", "Nolan", "Maggie", "Hanna", "Troy", "Odysseus", "Dakota", "Charles", "Graiden", "Amity", "Glenna", "Christopher", "Helen", "Gail", "Sheila", "Wynne", "Jamalia", "Ori", "Hu", "Lucian", "Aaron", "Hop", "Elijah", "Adria", "Uriah", "Casey", "Kyra", "Dalton", "Cairo", "George", "Nathan", "Tanek", "Yael"]
    this.charData = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
  }

  generateEmails(many) {
    const user = this.username
    const emails = ["gmail.com", "outlook.com", "yahoo.com", "mail.com"]
    let userEmails = []

    for(let i = 0; i < many; i++) {
      // Creates email vendor
      let random = Math.floor(Math.random() * emails.length)
      let emailVendor = emails[random]

      // Generates the emails
      let email = `${user[i]}@${emailVendor}`
      userEmails.push(email)
    }

    return userEmails
  }

  minCharPassword() {
    let password = ''
    while(password.length < 8) {
      let rand = Math.floor(Math.random() * this.charData.length)
      password += this.charData[rand]
    }
    return password
  }
}

const user = new User()
console.log(user.minCharPassword())