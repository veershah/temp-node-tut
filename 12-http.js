const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(req)

    if(req.url === '/'){
        res.end('welcome to our home page')
        return
    }
    if(req.url === '/about'){
        res.end('this is about page')
        return
    }
    res.end(`
    <h1>opps!!</h1>
    <p>we can't seem to find the page that you are looking for</p>
    <a href = "/">back to home</a>
    `)
    
    // res.write('welcome to our home page')
    // res.end()
})

server.listen(5000)


