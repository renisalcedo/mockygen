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

  schema(request) {
    let data = {}

    if (request.hasOwnProperty('user')) {
      data.user = DataGenerator.defaultUserGenerator()
      delete request.user
    }

    for (let i = 0; i < this.props.length; i++) {
      // Checks for the properties requested
      if (request.hasOwnProperty(this.props[i])) {
        let property = this.props[i]
        // Transform the generator to kamel case
        property = property.charAt(0).toUpperCase() + property.substring(1)

        // Sends the data request to generator
        data[this.props[i]] = DataGenerator.userGenerator({
          generate: `generate${property}`,
          param: this.getParam(request[this.props[i]])
        })
      }
    }

    return data
  }

  // HANDLES THE PARAMETERS DEPENDING ON TYPE
  getParam(request) {
    // NULL, STRING, NUMBER
    if (typeof request === 'string' || typeof request === 'number' || !request)
      return request

    // OBJECT
    if (typeof request == 'object') {
      let params = []
      for (let node in request) {
        if (request[node] === 'string') return request[node]

        params.push(request[node])
      }

      return params
    }
  }
}

const gen = new Mockygen()
console.log(
  gen.schema({
    user: 'default',
    username: 'default',
    email: 2
  })
)

// module.exports = new Mockygen()
