function getNumber(){
    let x=5;
    return x;
}
const p = new Promise(function(resolve,reject){
    if(getNumber() % 5 !== 0)
        resolve();
    else{
        reject();
    }
});
p.then(() => console.log('promise resolved'),
  () => console.log('promise rejected'));