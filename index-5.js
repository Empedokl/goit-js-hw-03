const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
  const getAllPropValues = function(arr, key) {
    const array = [];

    for(const value of arr){
        if (key in value)
        array.push(value[key])
    }
    return array
  };
  
 
  console.log(getAllPropValues(products, 'name')); 
  
  console.log(getAllPropValues(products, 'quantity')); 
  
  console.log(getAllPropValues(products, 'category'));



