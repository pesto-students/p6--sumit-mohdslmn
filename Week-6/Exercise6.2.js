//Spiral Order Matrix II
//Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]
function SpiralOrder(matrix){
    let result = []; 
    let count = 0;
    let row = matrix.length ;
    console.log(row);
    let col = matrix[0].length ;
    console.log(col);
    let total = row * col ;
    let startingRow = 0;
    let startingCol = 0;
    let endingRow = row - 1;
    let endingCol = col - 1 ;

    while (count < total){
        //print starting row
        for(let index = startingCol ; count < total && index <= endingCol; index++){
            result.push(matrix[startingRow][index]);
            count++;
        }
       
        startingRow++;
        //print ending colum
        for(let index = startingRow ; count < total && index <= endingRow; index++ ){
            result.push(matrix[index][endingCol]);
            count++;
        }
        endingCol--;
        //print ending row
        for(let index = endingCol ; count < total &&  index >= startingCol ; index-- ){
            result.push(matrix[endingRow][index]);
            count++;
        }
        endingRow--;

        //print starting column
        for(let index = endingRow ; count < total && index >= startingRow ; index--){
            result.push(matrix[index][startingCol]);
            count++;
        }
        startingCol++;
    }
    
    return result;

}
console.log(SpiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
/*[
    1, 2, 3, 6, 9,
    8, 7, 4, 5
  ]
  */