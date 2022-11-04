//Implement a function named getNumber which generates a random number. If randomNumber is divisible by 5 it will reject the promise else it will resolve the promise.

function getNumber(){
    return Math.ceil(Math.random() * 1024);
}
 const p = (time) => new Promise((resolve,reject) => 
 {
    const val =  getNumber();
    console.log("Value:  " + val);
    console.time();
    setTimeout(() => {
    if(val % 5 === 0)
        reject();
    else{
        resolve();
    }
    console.timeEnd();
   },time);
});


p(1000).then(() => console.log('promise resolved'),
  () => console.log('promise rejected'));