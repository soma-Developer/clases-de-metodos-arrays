document.write(`<h1>Accesores de Arrays</h1>`);
document.write(`<p>Los accesores de arrays son métodos que permiten acceder a los elementos de un array sin modificarlo.</p>`);

let nombres = ['Juan', 'María', 'Pedro', 'Ana'];

document.write(`<h2>Array: ${nombres}</h2>`);
document.write(`<h3>Accesores</h3>`);

let nombres2 = nombres.join("<br>elemento:"); // convierte el array en una cadena de texto con un separador específico que podemos elegir

document.write("elemento: " + nombres2)

let slice = nombres.slice(1, 3); // devuelve una copia superficial de una porción del array dentro de un nuevo array seleccionado desde inicio hasta fin (fin no incluido)

let toString = nombres.toString(); // devuelve una cadena de texto representando el array y sus elementos
document.write(`<h3>string: ${toString[2]}</h3> <br>`);
document.write(`<h3>slice: ${slice}</h3> <br>`);
