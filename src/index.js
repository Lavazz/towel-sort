
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArray = [];
  if(matrix){  
for(let i=0; i<matrix.length; i++){
  if(i%2===0){
    matrix[i].forEach(element=> newArray.push(element));
    }
  else{
    matrix[i].reverse().forEach(element=> newArray.push(element));
    }
  }
}
 return newArray;
}
