function createStack() {
   var items =[];
    return {
        push(item) {
            items.push(item);
            console.log(items);
        },
        pop() {
            items.pop();
            console.log(items);
        }
    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop() 

stack.items; // undefined  


