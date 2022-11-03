function cachingDecoratorNew(func) {
  const cache = {};
  const cacheLength = 5;

  return (...args) => {
    // Создадим хэш путём склеивания аргументов в строку с префиксом "_"
    // Префикс нужен для того, чтобы хэш нельзя было преобразовать в число (даже когда аргумент один).
    // Тогда можно с помощью Object.keys() перечислять св-ва обьекта cache в том порядке в котором они
    // добавлялись к обьекту.
    let hash = args.reduce((acc, item) => acc + item, '_');    

    if (hash in cache) {
      console.log(`Из кэша: ${cache[hash]}`);        
      return `Из кэша: ${cache[hash]}`;         
    } 

    console.log(`Вычисляем: ${cache[hash] = func(...args)}`);
    if (Object.keys(cache).length > cacheLength) {
      delete cache[Object.keys(cache)[0]];
    }  
        
    return `Вычисляем: ${cache[hash]}`; 
  }
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(... args) {
    if (!wrapper.allCount++) {
      wrapper.count++;      
      func(...args);
    }

    if (timeoutId) {      
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      wrapper.count++;
      timeoutId = null;
      func(...args);      
    }, delay);
  }
  
  return wrapper;
}