class Queue {
    constructor(){
        this.stack = [];
        this.size = 0;
    }
    push(ele){
        this.stack[this.size] = ele;
        this.size ++;
    }
    pop(){
         let ele = this.stack[0];
         for (let i = 0 ;i<this.size-1;i++){
             this.stack[i] = this.stack[i+1];
         }
         this.stack[this.size-1] = 0 ;
         this.size--;
         return ele;
    }
}

let n = 5;
let query = [1,2,1,3,2,1,4,2];
let i = 0;
var queue = new Queue();
while (n){
     if (query[i] == 1){
         queue.push(query[i+1]);
         i = i+2;
     }else {
         console.log(queue.pop());
         i++;
     }
     n--;

}
/* 2
   3
*/