// npm - node package manager
// npm --version  (to check the version of the npm )

//manual approach (create package.json in the root, create properties etc)
//npm init (step by step,press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)