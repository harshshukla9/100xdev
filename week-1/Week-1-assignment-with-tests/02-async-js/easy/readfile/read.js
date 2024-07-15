const fs = require("fs")

function readfile() {
    return new Promise(function(resolve,rejected) {
        console.log("inside")
        fs.readFile('a.txt','utf-8',function(err,data)
        {
            if(err)
            {
                console.log(err);
            }
            

            resolve(data);
        });
    });
}

function onDone(data)
{
    console.log(data);
}


readfile().then(onDone);
let a=0;

for(let i=0;i<10000000000;i++)
{
    a=a+i;
    
}

console.log(a);

// let data= fs.readFile('a.txt','utf-8',function(err,content) {

//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log(content);
//     }
// })

