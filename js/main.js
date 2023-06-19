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




//=============== 2do INTENTO====================


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
  }
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
    alert(`${pelicula.sala}. ${pelicula.titulo} - $${pelicula.precio}`);
  });

  const salaSeleccionada = parseInt(prompt('Ingrese el número de sala de la película que desea ver:\n1. Avengers: Endgame\n2. Spider-Man: Far From Home\n3. Black Panther'));

  const peliculaSeleccionada = buscarPeliculaPorSala(salaSeleccionada);

  if (peliculaSeleccionada) {
    if (peliculaSeleccionada.disponibilidad > 0) {
      peliculaSeleccionada.disponibilidad--;
      alert(`¡Entrada comprada para "${peliculaSeleccionada.titulo}"!`);
    } else  {
      alert(`Lo sentimos, no hay disponibilidad de entradas para "${peliculaSeleccionada.titulo}".`);
    }
  } else {
    alert('La sala seleccionada no es válida');
  }
}

// Ejemplo de uso
comprarEntrada();


