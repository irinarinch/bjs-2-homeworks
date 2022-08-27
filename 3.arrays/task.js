function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}


function advancedFilter(arr) {
  return arr.filter(number => number > 0 && number % 3 === 0).map(number => number * 10);  
}