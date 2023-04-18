const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// Ejercicios 

// a) Las pizzas que tengan un id impar.
  console.log("Ejercicio A")
  pizzas.forEach((pizza) => {
    if (pizza.id % 2 !== 0) {
      console.log(`${pizza.nombre} es impar`);
    }
  })

console.log("")
// b) Responder: ¿Hay alguna pizza que valga menos de $600?
console.log("Ejercicio B. Las pizzas que cuestan menores a $600 son:")
pizzas.forEach((pizza) => {
  if (pizza.precio <= 600) {
    console.log(`${pizza.nombre} cuesta $ ${pizza.precio}`);
  }
})

console.log("")
// c) El nombre de cada pizza con su respectivo precio.
console.log("Ejercicio C. Pizzas con sus respectivos precios:")
pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre} cuesta $ ${pizza.precio}`)
})

console.log("")
// d) Todos los ingredientes de cada pizza
console.log("Ejercicio D. Los ingredientes de cada pizza son:")
pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre} tiene los ingredientes: ${pizza.ingredientes}`)
})

