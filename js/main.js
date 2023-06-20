// // Definición de objetos
// const peliculas = [
//   {
//     sala: "1",
//     titulo: 'Avengers: Endgame',
//     precio: 1700,
//     disponibilidad: 50
//   },
//   {
//     sala: "2",
//     titulo: 'Spider-Man: Far From Home',
//     precio: 1700,
//     disponibilidad: 35
//   },
//   {
//     sala: "3",
//     titulo: 'Black Panther',
//     precio: 1700,
//     disponibilidad: 20,
//   }
// ];

// // Función para buscar una película por sala
// function buscarPeliculaPorSala(sala) {
//   return peliculas.find(pelicula => pelicula.sala === sala);
// }

// // Función para filtrar películas disponibles
// function filtrarPeliculasDisponibles() {
//   return peliculas.filter(pelicula => pelicula.disponibilidad > 0);
// }

// // Función para comprar una entrada
// function comprarEntrada() {
//   const peliculasDisponibles = filtrarPeliculasDisponibles();

//   if (peliculasDisponibles.length === 0) {
//     alert('No hay películas disponibles en este momento.');
//     return;
//   }

//   alert('Películas disponibles:');
//   peliculasDisponibles.forEach(pelicula => {
//     alert(`${pelicula.sala}. ${pelicula.titulo} - $${pelicula.precio}`);
//   });

//   const salaSeleccionada = parseInt(prompt('Ingrese la sala de la película que desea ver: \n 1- Ver Avengers: Endgame \n 2-Ver Spider-Man: Far From Home \n 3-Ver Black Panther'));

//   const peliculaSeleccionada = buscarPeliculaPorSala(salaSeleccionada);

//   if (peliculaSeleccionada) {
//     if (peliculaSeleccionada.disponibilidad > 0) {
//       peliculaSeleccionada.disponibilidad--;
//       alert(`¡Entrada comprada para "${peliculaSeleccionada.titulo}"!`);
//     } else {
//       alert(`Lo sentimos, no hay disponibilidad de entradas para "${peliculaSeleccionada.titulo}".`);
//     }
//   } else {
//     alert('No hay mas entradas dispoinibles');
//   }
// }

// // Ejemplo de uso
// comprarEntrada();




//=============== 2do Codigo====================


// Definición de objetos
// const peliculas = [
//   {
//     sala: "1",
//     titulo: 'Avengers: Endgame',
//     precio: 1700,
//     disponibilidad: 50,
//   },
//   {
//     sala: "2",
//     titulo: 'Spider-Man: Far From Home',
//     precio: 1700,
//     disponibilidad: 35,
//   },
//   {
//     sala: "3",
//     titulo: 'Black Panther',
//     precio: 1700,
//     disponibilidad: 0,
//   },
//   {
//     sala: "4",
//     titulo: "Flash 3D",
//     precio: 2500,
//     disponibilidad: 30,

//   },
//   {
//     sala: "5",
//     titulo: "Avengers: Endgame 3D",
//     precio: 2500,
//     disponibilidad: 150,
//   },
// ];

// // Función para buscar una película por sala
// function buscarPeliculaPorSala(sala) {
//   return peliculas.find(pelicula => pelicula.sala === sala.toString());
// }

// // Función para filtrar películas disponibles
// function filtrarPeliculasDisponibles() {
//   return peliculas.filter(pelicula => pelicula.disponibilidad > 0);
// }

// // Función para comprar una entrada
// function comprarEntrada() {
//   const peliculasDisponibles = filtrarPeliculasDisponibles();

//   if (peliculasDisponibles.length === 0) {
//     alert('No hay películas disponibles en este momento.');
//     return;
//   }

//   alert('Películas disponibles:');
//   peliculasDisponibles.forEach(pelicula => {
//     alert(`${pelicula.sala}. ${pelicula.titulo} - $${pelicula.precio}`);
//   });

//   const salaSeleccionada = parseInt(prompt('Ingrese el número de sala de la película que desea ver:\n1. Avengers: Endgame\n2. Spider-Man: Far From Home\n3. Black Panther\n4. Flash 3D\n5.Avengers: Endgame 3D '));

//   const peliculaSeleccionada = buscarPeliculaPorSala(salaSeleccionada);

//   if (peliculaSeleccionada) {
//     if (peliculaSeleccionada.disponibilidad > 0) {
//       peliculaSeleccionada.disponibilidad--;
//       alert(`¡Entrada comprada para "${peliculaSeleccionada.titulo}"!`);
//     } else  {
//       alert(`Lo sentimos, no hay disponibilidad de entradas para "${peliculaSeleccionada.titulo}".`);
//     }
//   } else {
//     alert('La sala seleccionada no es válida');
//   }
// }

// // Ejemplo de uso
// comprarEntrada();


//=====3er Codigo=================

// const peliculas = [
//   {
//     sala: "1",
//     titulo: 'Avengers: Endgame',
//     precio: 1700,
//     disponibilidad: 50,
    
//   },
//   {
//     sala: "2",
//     titulo: 'Spider-Man: Far From Home',
//     precio: 1700,
//     disponibilidad: 35,
   
//   },
//   {
//     sala: "3",
//     titulo: 'Black Panther',
//     precio: 1700,
//     disponibilidad: 0,
    
//   },
//   {
//     sala: "4",
//     titulo: "Flash 3D",
//     precio: 2500,
//     disponibilidad: 30,
  
//   },
//   {
//     sala: "5",
//     titulo: "Avengers: Endgame 3D",
//     precio: 2500,
//     disponibilidad: 150,
    
//   },
// ];


// // Función para comprar una entrada
// function comprarEntrada() {
//   const peliculasDisponibles = filtrarPeliculasDisponibles();

//   if (peliculasDisponibles.length === 0) {
//     alert('No hay películas disponibles en este momento.');
//     return;
//   }

//   alert('Películas disponibles:');
//   peliculasDisponibles.forEach(pelicula => {
//     alert(`${pelicula.sala}. ${pelicula.titulo} - ${pelicula.precio}`);
//   });

//   const salaSeleccionada = parseInt(prompt('Ingrese el número de sala de la película que desea ver:\n1. Avengers: Endgame\n2. Spider-Man: Far From Home\n3. Black Panther\n4. Flash 3D\n5. Avengers: Endgame 3D'));

//   const peliculaSeleccionada = buscarPeliculaPorSala(salaSeleccionada);

//   if (peliculaSeleccionada) {
//     if (peliculaSeleccionada.disponibilidad > 0) {
//       const cantidadEntradas = parseInt(prompt(`Ingrese la cantidad de entradas que desea comprar para "${peliculaSeleccionada.titulo}":`));
//       if (cantidadEntradas <= peliculaSeleccionada.disponibilidad) {
//         peliculaSeleccionada.disponibilidad -= cantidadEntradas;
//         peliculaSeleccionada.cantidad += cantidadEntradas; // Actualizamos la cantidad de entradas compradas
//         const precioTotal = peliculaSeleccionada.precio * cantidadEntradas;
//         alert(`¡Entrada(s) comprada(s) para "${peliculaSeleccionada.titulo}"!\nCantidad: ${cantidadEntradas}\nPrecio total: $${precioTotal}`);
//       } else {
//         alert(`Lo sentimos, solo quedan ${peliculaSeleccionada.disponibilidad} entradas disponibles para "${peliculaSeleccionada.titulo}".`);
//       }
//     } else {
//       alert(`Lo sentimos, no hay disponibilidad de entradas para "${peliculaSeleccionada.titulo}".`);
//     }
//   } else {
//     alert('La sala seleccionada no es válida');
//   }
// }

// // Función para agregar snacks al carrito
// function agregarSnacksAlCarrito() {
//   const opcionSnacks = prompt("¿Desea agregar snacks a su compra? (Sí/No)").toLowerCase();

//   if (opcionSnacks === "sí" || opcionSnacks === "si") {
//     let continuarAgregandoSnacks = true;

//     while (continuarAgregandoSnacks) {
//       mostrarSnacks();

//       const opcionSnack = parseInt(prompt("Seleccione el número de snack que desea agregar (o ingrese 0 para finalizar):"));

//       if (opcionSnack >= 1 && opcionSnack <= snacks.length) {
//         const snackSeleccionado = snacks[opcionSnack - 1];
//         const cantidadSnacks = parseInt(prompt(`Ingrese la cantidad de "${snackSeleccionado.snack}" que desea comprar:`));

//         if (cantidadSnacks > 0) {
//           snackSeleccionado.cantidad += cantidadSnacks; 
//           console.log(`"${snackSeleccionado.snack}" - Cantidad: ${cantidadSnacks}`);
//         } else {
//           alert('La cantidad ingresada no es válida.');
//         }
//       } else if (opcionSnack === 0) {
//         continuarAgregandoSnacks = false;
//       } else {
//         alert('La opción ingresada no es válida.');
//       }

//       const opcionContinuar = prompt("¿Desea agregar más snacks? (Sí/No)").toLowerCase();
//       if (opcionContinuar !== "sí" && opcionContinuar !== "si") {
//         continuarAgregandoSnacks = false;
//       }
//     }
//   }
// }


// comprarEntrada();
// agregarSnacksAlCarrito();
// console.log(peliculas);
// console.log(snacks);

//=====3er Codigo=================

// Definición de objetos
const peliculas = [
  {
    sala: "1",
    titulo: 'Avengers: Endgame',
    precio: 1700,
    disponibilidad: 50,
  },
  {
    sala: "2",
    titulo: 'Spider-Man: Far From Home',
    precio: 1700,
    disponibilidad: 35,
  },
  {
    sala: "3",
    titulo: 'Black Panther',
    precio: 1700,
    disponibilidad: 0,
  },
  {
    sala: "4",
    titulo: "Flash 3D",
    precio: 2500,
    disponibilidad: 30,
  },
  {
    sala: "5",
    titulo: "Avengers: Endgame 3D",
    precio: 2500,
    disponibilidad: 150,
  },
];

// Función para buscar una película por sala
function buscarPeliculaPorSala(sala) {
  return peliculas.find(pelicula => pelicula.sala === sala.toString());
}

// Función para filtrar películas disponibles
function filtrarPeliculasDisponibles() {
  return peliculas.filter(pelicula => pelicula.disponibilidad > 0);
}

// Función para comprar una entrada
function comprarEntrada() {
  const peliculasDisponibles = filtrarPeliculasDisponibles();

  if (peliculasDisponibles.length === 0) {
    alert('No hay películas disponibles en este momento.');
    return;
  }

  alert('Películas disponibles:');
  peliculasDisponibles.forEach(pelicula => {
    alert(`${pelicula.sala}. ${pelicula.titulo} - ${pelicula.precio}`);
  });

  const salaSeleccionada = parseInt(prompt('Ingrese el número de sala de la película que desea ver:\n1. Avengers: Endgame\n2. Spider-Man: Far From Home\n3. Black Panther\n4. Flash 3D\n5.Avengers: Endgame 3D '));

  const peliculaSeleccionada = buscarPeliculaPorSala(salaSeleccionada);

  if (peliculaSeleccionada) {
    if (peliculaSeleccionada.disponibilidad > 0) {
      const cantidadEntradas = parseInt(prompt(`Ingrese la cantidad de entradas que desea comprar para "${peliculaSeleccionada.titulo}":`));
      if (cantidadEntradas <= peliculaSeleccionada.disponibilidad) {
        peliculaSeleccionada.disponibilidad -= cantidadEntradas;
        const precioTotal = peliculaSeleccionada.precio * cantidadEntradas;
        alert(`¡Entrada(s) comprada(s) para "${peliculaSeleccionada.titulo}"!\nCantidad: ${cantidadEntradas}\nPrecio total: $${precioTotal}`);
      } else {
        alert(`Lo sentimos, solo quedan ${peliculaSeleccionada.disponibilidad} entradas disponibles para "${peliculaSeleccionada.titulo}".`);
      }
    } else {
      alert(`Lo sentimos, no hay disponibilidad de entradas para "${peliculaSeleccionada.titulo}".`);
    }
  } else {
    alert('La sala seleccionada no es válida');
  }
}


comprarEntrada();
console.log(peliculas)






//======= Compra de Snacks=======================

// const snacks = [
//   {
//     snack: "Coca-Cola",
//     tipo: "Grande",
//     precio: 600,
//     cantidad: 0, 
//   },
//   {
//     snack: "Sprite",
//     tipo: "Grande",
//     precio: 600,
//     cantidad: 0,
//   },
//   {
//     snack: "Coca-Cola",
//     tipo: "Mediana",
//     precio: 450,
//     cantidad: 0,
//   },
//   {
//     snack: "Sprite",
//     tipo: "Mediana",
//     precio: 450,
//     cantidad: 0,
//   },
//   {
//     snack: "Pochoclo",
//     tipo: "Valde",
//     precio: 1200,
//     cantidad: 0,
//   },
//   {
//     snack: "Pochoclo",
//     tipo: "Mediano",
//     precio: 950,
//     cantidad: 0,
//   },
//   {
//     snack: "Nachos",
//     tipo: "XL",
//     precio: 1500,
//     cantidad: 0,
//   },
//   {
//     snack: "Nachos",
//     tipo: "Medium",
//     precio: 1100,
//     cantidad: 0,
//   },
// ];

// // Función para mostrar las opciones de snacks disponibles
// function mostrarSnacks() {
//   alert("Opciones de snacks disponibles:");
//   snacks.forEach((snack, index) => {
//     alert(`${index + 1}. ${snack.snack} - ${snack.precio}`);
//   });
// }
