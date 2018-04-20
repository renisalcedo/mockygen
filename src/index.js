// Controllers
const User = require('./controllers/userController')

class DataGenerator {
    constructor() {
        this.data = require('./models.json')
    }

    UserGenerator(params) {
        const { userData } = this.data
        const user = new User(userData)

        return user.specialCharPassword(8)
    }
}

module.exports = DataGenerator