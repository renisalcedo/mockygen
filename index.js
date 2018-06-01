const DataGenerator = require('./src/index')

class Mockygen {
  constructor() {
    this.props = [
      'user',
      'name',
      'password',
      'email',
      'username',
      'age',
      'phoneNumber'
    ]
  }

  schema(param) {
    let data = {}

    if (param.hasOwnProperty('user')) {
      data.user = DataGenerator.defaultUserGenerator()
      delete param.user
    }

    for (let i = 0; i < this.props.length; i++) {
      if (param.hasOwnProperty(this.props[i])) {
        let property = this.props[i]
        property = property.charAt(0).toUpperCase() + property.substring(1)
        data[this.props[i]] = DataGenerator.userGenerator({
          generate: `generate${property}`,
          param: null
        })
      }
    }

    return data
  }
}

const gen = new Mockygen()
gen.schema({
  user: 'default',
  username: {
    type: String
  }
})

// module.exports = new Mockygen()
