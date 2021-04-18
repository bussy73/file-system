const https = require("https");
const fs = require("fs");

let data="";
https.get("https://jsonplaceholder.typicode.com/posts",(res)=>{
    res.on("data",(chunk)=> {
        data += chunk;
    })
res.on('close',()=>{
    if (fs.existsSync("result")) {
        fs.writeFile('./result/posts.json', data, (err)=>{
            if (err){
                return console.log(err);
            }
            console.log('your file has been created.');
        });
    } else{
        console.log("directory does not exist")
    }
    });
});