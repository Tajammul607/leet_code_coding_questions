const setMatrixZero= (matrix)=>{
    let rows=matrix.length;
    let cols=matrix[0].length;

    let zeroRows=new Array(rows).fill(false);
    let zeroCols=new Array(cols).fill(false)

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(matrix[i][j]==0){
                zeroRows[i]=true;
                zeroCols[j]=true
            }
        }
    }

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(zeroCols[j] || zeroRows[i]){
                matrix[i][j]=0
            }
        }
    }
}

const exampleMatrix = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
];

setMatrixZero(exampleMatrix);
console.log(setMatrixZero)


/**
 * 
 * using extra space
 * function setZeroes(matrix) {
  const rowsToZero = new Set();
  const colsToZero = new Set();

  // Mark rows and columns with zeros
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowsToZero.add(i);
        colsToZero.add(j);
      }
    }
  }

  // Zero out rows and columns
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rowsToZero.has(i) || colsToZero.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}

// Example usage:
const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];
setZeroes(matrix);
console.log(matrix);
 */