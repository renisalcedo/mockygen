// Controllers
const User = require('./controllers/userController')

class DataGenerator {
  constructor() {
    this.data = require('./models.json')
  }

  // Will generate the user data
  userGenerator(req) {
    const { userData } = this.data
    const { generate, param } = req

    const user = new User(userData)

    // If there is no param the function will get called empty
    return param ? user[generate](param) : user[generate]()
  }

  // Generates a default user
  defaultUserGenerator() {
    const { userData } = this.data
    const user = new User(userData)
    let newUser = {}

    // POPULATE DATA
    newUser.username = user.generateUsername()
    newUser.email = user.generateEmails(1)
    newUser.password = user.minCharPassword()
    newUser.age = user.generateAge()
    newUser.phoneNumber = user.generatePhoneNumber()

    return newUser
  }
}

module.exports = new DataGenerator()
