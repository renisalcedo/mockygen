const DataGenerator = require('./src/index')

class Mockygen {
  schema(param) {
    let props = ['user']
    let data = {}

    if (param.hasOwnProperty('user')) {
      data.user = DataGenerator.defaultUserGenerator()
    }

    for (let i = 0; i < props.length; i++) {
      console.log(param.hasOwnProperty('name'))
    }
    // for(let obj in param) {
    //   console.log(param[obj])
    // }
    console.log(data)
  }
}

const gen = new Mockygen()
gen.schema({
  user: 'default',
  name: {
    type: String
  },
  password: {
    type: String
  }
})

// module.exports = new Mockygen()
