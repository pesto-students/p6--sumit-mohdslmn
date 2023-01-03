function a(){
    let fn;
    {
        fn= function(){
    
            console.log(x);
        };
        return fn;
    }
}
 var x=10;
  x=20;
const b=a();
b();