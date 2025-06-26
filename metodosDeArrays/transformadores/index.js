let nombres = ["pedro", "maria", "juan", "luis", "ana"];
let numeros = [1, 2, 3, 4, 5];


document.write("<h1>Pruebas de métodos de cadenas y arrays</h1>");

let saludo = nombres.forEach((nombre) => {
    document.write(`hola ${nombre} <br>`);
}); // recorre el array y ejecuta la función para cada elemento


document.write(`nombre original: <b>${nombres}
    </b> <br>`); // muestra el array de nombres


let resultado = nombres.shift(); // elimina el primer elemento del array


document.write(`elemento removido al principio: <b>${resultado}</b>  <br>`); // muestra el elemento eliminado


let resultado1 = nombres.pop(); // elimina el último elemento del array


document.write(`elemento removido al final: <b>${resultado1}</b>  <br>`); // muestra el elemento eliminado


document.write(`array modificado: <b>${nombres}</b>`); // muestra el array de nombres después de eliminar el último elemento


let nombres2 = ["pedro", "maria", "juan", "luis", "ana"];
document.write("<h2>Pruebas de métodos de cadenas y arrays</h2>");


document.write(`nombre original: <b>${nombres2}</b> <br>`); // muestra el array de nombres


let pushResult = nombres2.push("jose"); // agrega un elemento al final del array


document.write(`array con el elemento agregado : <b>${nombres2}</b> <br>`); // muestra el array de nombres después de agregar un elemento


let reverse = nombres2.reverse(); // invierte el orden del array


document.write(`array invertido: <b>${nombres2}</b> <br>`); // muestra el array de nombres después de invertir el orden



nombres2.unshift("carlos", "stuart", 123 ); // agrega un elemento al principio del array


document.write(`array con el elemento agregado al principio: <b>${nombres2}</b> <br>`); // muestra el array de nombres después de agregar un elemento al principio


nombres2.sort(); // ordena el array alfabéticamente


document.write(`array ordenado alfabéticamente: <b>${nombres2}</b> <br>`); // muestra el array de nombres después de ordenar alfabéticamente


nombres3 = ["pedro", "maria", "juan", "luis", "ana"];
document.write("<h2>Pruebas de métodos de cadenas y arrays</h2>");
document.write(`nombre original: <b>${nombres3}</b> <br>`); // muestra el array de nombres


let spliceResult = nombres3.splice(2, 1, "jose", "carlos"); // elimina un elemento del array y agrega dos nuevos


document.write(`array con el elemento eliminado y los nuevos agregados: <b>${nombres3}</b> <br>`); // muestra el array de nombres después de eliminar un elemento y agregar dos nuevos