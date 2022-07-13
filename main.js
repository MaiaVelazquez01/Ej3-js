const Pizzas = [
    {
      id: 1,
      nombre: "Margarita",
      ingredientes: ["albahaca", "queso mozzarella", "tomate"],
      precio: 700,
    },
    {
      id: 2,
      nombre: "Cuatro Quesos",
      ingredientes: [
        "queso mozzarella",
        "queso gorgonzola",
        "queso parmesano",
        "queso fontina",
      ],
      precio: 989,
    },
    {
      id: 3,
      nombre: "Pepperoni",
      ingredientes: ["pepperoni", "queso mozzarella", "tomate"],
      precio: 574,
    },
    {
      id: 4,
      nombre: "Hawaiana",
      ingredientes: ["ananá", "queso mozzarella", "tomate", "jamón"],
      precio: 980,
    },
    {
      id: 5,
      nombre: "Napolitana",
      ingredientes: ["queso mozzarella", "tomate", "anchoa", "alcaparra"],
      precio: 234,
    },
    {
      id: 6,
      nombre: "Fugazzeta",
      ingredientes: ["queso mozzarella", "cebolla", "aceituna"],
      precio: 756,
    },
  ];

  let pizza_id = document.getElementById('pizza_id');
  let btn = document.getElementById('boton');
  let pizza_nombre = document.getElementById('pizza_nombre');
  let pizza_precio = document.getElementById('pizza_precio');

  btn.addEventListener("click", buscarPizza);

  function buscarPizza() {
    let num = parseInt(pizza_id.value);
    Pizzas.forEach (pizzas => {
        if (pizzas.id === num) {
            pizza_nombre.innerHTML = pizzas.nombre;
            pizza_precio.innerHTML = pizzas.precio;
        }
        
        else if (num > 6) {
            pizza_nombre.innerHTML = "No existe pizza con ese ID";
            pizza_precio.innerHTML = "";
        }
    }
    )
  }
