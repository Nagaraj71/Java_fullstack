const http= require("http")
.createServer((req,res)=>{

    Response.end("Http GN")
})
.listen(2000,(err)=>{
if (err) throw err
console.log("Server Running on the website")
})