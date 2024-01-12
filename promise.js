// const fs = require("fs");
// const folder = new Promise((resolve , reject)=>{
// fs.readFile("text.txt" , "utf8" , (err,data)=>{
//     if(err){
//         reject(err)
//     }

//     else{
//         resolve(data)
//     }
// })
// })

// folder.then((item)=>console.log("Oxundu" + item)).catch((xeta)=>console.log(xeta))


// const fs = require("fs");
// function readFile(path){
//     return new Promise ((resolve , reject)=>{
// fs.readFile(path,"utf8" , (err , data)=>{
//     if(err){
//         reject(err)
//     }

//     else {
//         resolve(data)
//     }
// } )
//     })
// }

// readFile("file.txt" ).then((item)=>console.log("Oxundu" + item)).catch((xeta)=>console.log(xeta)).finally(()=>console.log("Hazirdir"))

// readFile("text.txt" ).then((item)=>console.log("Oxundu" + item)).catch((xeta)=>console.log(xeta)).finally(()=>console.log("Hazirdir"))


const fs = require("fs");
function readFile(...path) {
    return new Promise((resolve, reject) => {
        try {
            var promises = path.map(p => new Promise((res, rej) => {
                fs.readFile(p, 'utf8', (err, data) => {
                    if (err) {
                        rej(err);
                    }
                    else {
                        res(data);
                    }
                })
            }));

            Promise.all(promises)
                .then((item) => resolve(item))
                .catch((hata) => reject(hata));
        }
        catch (err) {
            reject(err)
        }
    });
};

readFile('file.txt', 'file.txt', 'file.txt', 'file.txt')
    .then(files => {
        console.log(files);
    })
    .catch((hata) => console.log(hata))
    .finally(() => console.log('Tamamlandı'));
