const http = require('http');
const port = process.env.port || 3000;
const server = http.createServer((req,res)=>{
console.log('hello nodejs to Linux Ubuntu');
});
server.listen(port,(err)=>{
if(err){
console.error('error');
}
console.log(`http://localhost:${port}`);
console.log('listen to my heart');
});
