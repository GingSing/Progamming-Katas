let repeatNumbers = function(data) {
  // Put your solution here
  let totalResult = [];
  for(let arr of data){
    let tempResult = "";
    for(let i = 0; i < arr[1]; i++){
      tempResult += arr[0];
    }
    totalResult.push(tempResult);
  }
  return totalResult.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
