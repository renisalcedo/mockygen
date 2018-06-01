# Mockygen

**Mock data generator with model pattern**
![Status of the project](https://img.shields.io/badge/Implementation-In%20Development-green.svg) ![Build status](https://img.shields.io/teamcity/http/teamcity.jetbrains.com/s/bt345.svg)

## Description

Mockygen is a mock data generator with a model pattern. It works similar to creating a database schema; instantiating a new object from the mockygen class like the following:

```javascript
const user = Mockygen.schema({
  username: {
    type: 'default'
  },
  password: {
    type: String,
    min: 8,
    specialChars: true
  },
  age: {
    type: Number
  }
})
```

"Not all user is created equal." Therefore, we are able to required the specific data components needed to create our object and populate with data.

## Getting Started

If we just need a general user with standard data such as username, email, password, age, phoneNumber. We do the following.

```javascript
const Mockygen = require('mockygen')

const user = Mockygen.schema({ user: 'default' })
```
