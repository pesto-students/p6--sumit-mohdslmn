// Max sum contiguous  sub array using kadane's algorithm
function maxSubArray(arr){
    let sum = 0;
    let max = arr[0];
    for(let i = 0; i < arr.length ; i++){
        sum = sum + arr[i];
        max = Math.max(max , sum);

        if(sum < 0){
            sum = 0;
        }
    }
    return max;
}
console.log(maxSubArray([1,2,3,4,-10])); //10
//TC :O(N)
//SC : O(1)
