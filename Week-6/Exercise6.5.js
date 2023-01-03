//Pair With Given Difference
function diff(arr,b){
    for(let i in arr){
        var n = arr[i]+b;
        var indx = arr.indexOf(n);
        if(indx>=0)
        {
            return 1;
        }
    }
function diff(arr,b){
    for(let i in arr){
        var n = arr[i]+b;
        var indx = arr.indexOf(n);
        if(indx>=0)
        {
            return 1;
        }
    }
    return 0;
}
}

console.log(diff([5,10,3,2,50,80],78)) //1