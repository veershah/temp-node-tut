const os = require('os')

console.log(os.version)

//info about the current user
const user = os.userInfo()
console.log(user)

//info about system uptime in sec
const upTime = os.uptime()
console.log(upTime)
//or console.log(`The system uptime is ${os.uptime()} seconds`)


//some info about os in obj
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)