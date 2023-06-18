const http=require("http")
const server= http.createServer((req,res)=>{
    Response.end("HTTP sever")
})
server.listen(7000, (err)=>{

    if(err) throw err
    console.log("Server is running")
})