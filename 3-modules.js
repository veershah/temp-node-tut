//Commonjs, Every file is module(by default)
//Modules - Encapsulated code ( only share minimum)

const sayHi = require('./5-utils.js')
const names = require('./4-names.js')
const data = require('./6-alternative-flavors.js')

require('./7-mind-granade.js')
sayHi('Hrishikesh')
sayHi(names.veer)
sayHi(names.om)