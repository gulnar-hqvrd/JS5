// function sleep(a) {

const { log } = require("async")

//     return new Promise(text => setTimeout(text, a));
//   }
//   async function printWithDelay(ms, text) {
//     await sleep(ms);
//     console.log(text);
//   }

//   printWithDelay(4000, "Salam");
  





// function sleep(ms){
//     return new Promise((resolve)=>{
//         setInterval(()=>{
//             resolve();
//         },ms)
//     })
// }

//   async function printWithDelay(ms, text) {
//     await sleep(ms);
//     console.log(text);
//   }


//   printWithDelay(4000, "Salam");
// //   console.log("en son");
// printWithDelay(4000, "Salam2");

  




const job  = (value) =>{
    return new Promise((resolve , reject)=>{
        if(value){
            resolve("resolve edilri")
        }
        else{
            reject("reject edildi")
        }
    })
}

const first = job(false)
first.then(data=>{
    console.log((err)=>{
        console.log("err" , data)
        return job(false)
    })
    .catch((err)=>{
        console.log("err", err);
    })
})