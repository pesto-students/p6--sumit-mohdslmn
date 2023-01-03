
function memoize(fn){
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        console.log('Values to be added' +' '+  key);
        console.log(cache);
        if(cache.has(key))
            return cache.get(key);
        else{
            cache.set(key , fn(...args));
            return cache.get(key);
        }
    }
}
//function reducer
function add(...args){
        var sum=0;
        for (var i=0; i<args.length; i++){
            sum=sum+args[i];
    }
    return sum;
}
      
function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

const memoizeAdd = memoize(add);
time(()=> memoizeAdd(100,100)); //log 200
time (() => memoizeAdd(100)); // log 100
time(() => memoizeAdd(100,200));//log 300
time(()=> memoizeAdd(100,100));//log 200 without computing