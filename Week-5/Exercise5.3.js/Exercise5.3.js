//Write a function called hasDuplicate which accepts an array and returns true or false if that arraycontains a duplicate Guidelines:Reference
//false


//2.JS function should have Set API implemented.
//3.Bonus - if space and time complexity is taken care.

//const hasDuplicate = arr=> new Set(arr).size!==arr.length;
console.log(hasDuplicate([1,5,-1,4])) ; //false

function hasDuplicate(arr){
       let setvar = new Set(arr);
       if(setvar.size !== arr.length){
        return true;
       }
       else{
        return false;
       }
}