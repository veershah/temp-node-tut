const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)


//want last portion of filepath?
const base = path.basename(filePath)
console.log(base)

//want absolute path? + your own path as well
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)