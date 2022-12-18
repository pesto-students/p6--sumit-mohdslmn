//Sort array of 0's,1's and 2's
/*function sort(arr){
    let newarr = [];
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    let i =0;
    for(let i =0 ; i < arr.length ; i++){  // TC : O(n)
        
    let temp = 0;
        if(arr[i] == 0)
        {
            count0++;
        }
        else if(arr[i] == 1){
            count1++;
        }
        else{
            count2++;
        }
    }
    while (i < count0+count1+count2){  
        if(i < count0){
            newarr[i] = 0;
        }
        else if(i== count0 && i < count0 + count1){
            newarr[i] = 1;
        }
        else{
            newarr[i] = 2;
        }
        i++;
    }
    /*
    for(let i = 0 ; i < count0; i++){
        newarr[i] = 0;
    }
    //console.log(newarr);
    for(let i = count0 ; i < count0 + count1; i++){
        newarr[i] = 1;
    }
   // console.log(newarr);
    
    for(let i = count0 + count1; i < count0 + count1 + count2; i++){
        newarr[i] = 2;
    }
    */
    //console.log(newarr);
   // return newarr;
   

//const s = sort([2,0,2,2,1,0]);  //TC:O(n^2)
//console.log(s);
/*  
function swap(i1, i2){
    let temp = i1;
    i1 = i2;
    i2 = temp;
}
function sort1(arr){
    let l =0;
    let m = 0;
    let h = arr.length - 1;

    while(m <= h){
        if(arr[m] == 0){
            swap(arr[m],arr[l]);
            l++;
            m++;
          
        }
        if(arr[m] == 1){
            m++;
        }
        else{
            swap(arr[m],arr[h]);
            h--;
        }
    }
}
//const s = sort1([2,0,2,2,1,0]);  //TC:O(n^2)
console.log(sort1([2,0,2,2,1,0]));
*/
//optimised sort fn
function sort(arr)	
{	
    var newarr=[] ;	    
    var lo=0, mid=0, hi=0;	    
    for(let i in arr)	    
    {	    
        if(arr[i]==0){	        
            newarr.splice(lo++,0,0); 	             
            mid++;	            
            hi++;	            
        }	        
        if(arr[i]==1){	        
            newarr.splice(mid++,0,1); 	           
            hi++;	           
        }	        
        if(arr[i]==0){	        
            newarr.splice(hi++,0,2);	            
        }	        
    }	    
    return newarr;	  
}
console.log(sort([2,0,0,2,1,1]));
