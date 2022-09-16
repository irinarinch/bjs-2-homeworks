function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) =>  {
      console.log('Из кэша: ' + result);
      return 'Из кэша: ' + result;
    }
  }
 
 
  return (...args) => {
    const hash = args.join(',');
    const result = func(...args);
    if (hash in cache) {
      
      console.log('Из кэша: ' + result);
      return 'Из кэша: ' + result;
    }

    
    cache[hash] = result;
    console.log("Вычисляем: " + result);
    return 'Вычисляем: ' + result;
  }
}

const addThree = (a, b, c) => a + b + c;
const upgradedAddThree = cachingDecoratorNew(addThree);

function debounceDecoratorNew(func) {
  // Ваш код
}