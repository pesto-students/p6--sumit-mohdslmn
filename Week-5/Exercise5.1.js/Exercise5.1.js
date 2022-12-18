//WEEK5:JS:
//Exercise5.1:Using Async/Await and Generators, create separate functions and achieve the same functionality.(3hours)
//Execute 3 callback functions asynchronously

//first function print n natural nos
function doTask1(nos){
    for(let n = 1  ; n <= nos ; n++){
        console.log(n);
    }
}

//geneartor for doTask1()
function* gen1(){
    console.log('started generator 1');
    yield doTask1(5); //doTask1() will print naturalnos
}
const iter = gen1();
iter.next();

//Async/await for doTask1()

async function init(){
    let promise = new Promise((resolve, reject) => {
        () => resolve(), doTask1(5)
      });
      try{
        let result = await promise;
        console.log(result);
      }
      catch(error){
        console.log(error);
      }
}
console.log("same result of doTask1 by using async or await");
init(); //it will also print natural nos same functionality like gen()

/* output is started generator1
1
2
3
4
5
same result of doTask1 by using async or await
1
2
3
4
5
  */

//second function produce the sum of 2 nos
function doTask2(x,y){
    let sum = x + y;
    console.log(sum);
}
function* gen2(){
     console.log("started generator 2");
     yield doTask2(9,3); //pauses
     yield doTask2(2,15); // 2nd iter2.next() execute this and done : true
}
const iter2 = gen2();
iter2.next(); // 12 
iter2.next(); // 17

//Async/await for doTask2

async function init2(){
    let promise = new Promise((resolve,reject) => {
        () => resolve() , doTask2(9,3) , doTask2(2,15)
    });
    try{
        let result2 = await promise;
        console.log(result2);
    }
    catch(error){
        console.log(error);
    }
}
console.log("same result of doTask2 by using async or await");
init2();
/* log : 
started generator 2
12
17
same result of doTask2 by using async or await
12
17 */

// Third function this function continues iteration in another loop using iterators that are iterable
function doTask3() {  
let obj = {
        _i : 0,
        [Symbol.iterator](){
            return this;
        },
        next(){
            return {
                value : this._i++,
                done : this._i > 10
            };
        },
    };
    for(const el of obj){
        console.log(el);
        if(el > 5)
         break;
    }
   // console.log('break');
    for(const el of obj){
        console.log(el);
    }
}
//doTask3();
// generator fn for doTask3
function* gen3(){
    console.log('started genrator 3');
    yield  doTask3();
}
const iter3 = gen3();
iter3.next();

//async/await for doTask3()

async function init3(){
        let promise = new Promise((resolve,reject) => {
            () =>  resolve(),  doTask3();

        });
        try{
            let result3 = await promise ;
            console.log(result3);
        }
        catch(error){
            console.log(error);
        }

}
console.log("same result of doTask3 by using async or await");
init3();

/* output os doTask3()
started genrator 3
0
1
2
3
4
5
6
7
8
9
same result of doTask3 by using async or await
0
1
2
3
4
5
6
7
8
9 */