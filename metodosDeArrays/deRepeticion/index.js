document.write("<h1>metodos de repeticion de Arrays</h1>");
document.write("<p>Los metodos de repeticion de arrays son aquellos que nos permiten recorrer un array y realizar una accion con cada uno de sus elementos.</p>");

let numeros = [1, 2, 3, 4, 5];
document.write("<h2>Array: " + numeros + "</h2>");
document.write("<h3>Metodos de repeticion</h3>");
document.write("<h4>filter</h4>")
let resultados =  numeros.filter((numero) => {
    document.write(` numero: ${numero} <br>`)
}); // crea un nuevo array con todos los elementos que cumplan la condicion dada
numeros.splice(1, 2, 8, 9); // modifica el array original, eliminando 2 elementos a partir del indice 1 y añadiendo 8 y 9
numeros.push(10); // añade el elemento 10 al final del array

let nombres = ["Juan", "Maria", "Pedro", "Ana", "Luis", "Laura"];
alert("nombres en el array: ")

let resultado = nombres.filter(nombre => nombre.length > 4)


alert(resultado)


