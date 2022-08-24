function compareArrays(arr1, arr2) {
  let result;

  if (arr1.length === arr2.length) {
    result = arr1.every((element, index) => index === arr2.indexOf(element));    
  } else {
    result = false;
  }
 
  return result;
}


function advancedFilter(arr) {
  let resultArr = arr.filter(number => number > 0).filter(number => number % 3 === 0).map(number => number * 10);

  return resultArr; 
}