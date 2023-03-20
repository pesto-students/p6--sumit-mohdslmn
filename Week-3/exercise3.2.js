//.bind(): bind generates a new function rather than copying old function and it permanently changes 'this' value in the particular function
var module ={
    x: 2,
    getX: function(){
        return this.x;
    }
 }
 //const fn= module.getX; not bounded
 //console.log(fn());
 //log undefined beacuse fn() is global context
 //Using .bind()
 const fn= module.getX.bind(module);
 console.log(fn());
 //log 2 because fn is bounded to the module object 

 //.call(): Similar to the bind(also use to change 'this' value) but different in  it doesnot return new function
 function car(){
    var inform=[
        this.company,
       this.color,
       'is the most demanding color',

    ].join(' ');
    console.log(inform);
 }
 var wolksvagen={
    company: 'wolksvagen' , color: 'maroon'
 };
 var BMW={
    company: 'BMW'  , color: 'mat-black'
 };
 car.call(BMW);
 car.call(wolksvagen);
 // log: BMW mat-black is the most demanding color
       //wolksvagen maroon is the most demanding color
// we are using car function twice by .call()

//.apply(): extremely similar to bind but have some difference as .call() accepts an argument list and .apply() accepts a single array of argument
// Ex: var numbers= [20,10,40,15];
//console.log(Math.max(numbers));
//log NaN
var numbers= [20,10,40,15];
console.log(Math.max.apply(null,numbers));
