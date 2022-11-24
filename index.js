const myFunction = (obj, key) => obj[key];

let res = myFunction({ continent: "Asia", country: "Japan" }, "continent");
console.log(myFunction({ country: "Sweden", continent: "Europe" }, "country"));
console.log(myFunction({ name: 'khriztian', 'fav-number': 33, age: 18 }, 'fav-number'));

console.log(`la respuesta del primer ejercicio es ${res}`)