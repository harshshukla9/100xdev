const fs= require("fs")

const content= "this is new para"


function writefile(){
    return new Promise(function(resolve,rejected) {
        fs.readFile('a.txt','utf-8',function(err,data) {
            if(err)
            {
                console.log(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

function writeinfile(data){
    console.log("before " + data);

    fs.appendFile('a.txt',content,function(err) {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("succesful operation")
        }
    })

}

function print(data) {
    console.log(data)
}

writefile().then(writeinfile)