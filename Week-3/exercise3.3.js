function createIncrement()
 {
    let count=0;
    function increment()
     {
        count++;
    }
    let message=`Count is ${count}`;
    function log()
     {
        console.log(message);
    }
    return[increment,log];
}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?
//log Count is 0 
//because message variable is declared outside the increment() so message variable is executing only once i.e. count=0