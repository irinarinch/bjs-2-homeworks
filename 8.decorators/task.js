function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.toString(); 
    
    let objectInCache = cache.findIndex((item) => item.hash === hash); 
    if (objectInCache !== -1) { 
        console.log("Из кэша: " + cache[objectInCache].result); 
        return "Из кэша: " + cache[objectInCache].result;
    }

    let result = func(...args); 
    cache.push({hash, result}); 
    if (cache.length > 5) { 
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}
  return wrapper;
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;

  function wrapper(...args) {
    if (!timeoutId) {
      func(...args);
      wrapper.count++;            
    }
    clearTimeout(timeoutId);     
    
    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;                
    }, delay); 
    
    wrapper.allCount++;    
  }    
  
  wrapper.count = 0;  
  wrapper.allCount = 0;

  return wrapper;
} 



