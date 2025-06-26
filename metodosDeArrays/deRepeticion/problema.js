
const vocales = new Set(['a', 'e', 'i', 'o', 'u']);

function contador(frase) {
    // Convertir a minúsculas y filtrar solo las vocales, luego contar
    const cantidadVocales = [...frase.toLowerCase()].filter(
    letra => vocales.has(letra)).length;
    
    document.write(`<h2>Tu frase: (${frase}) tiene: ${cantidadVocales} vocales</h2>`);
}

contador(prompt("Ingresa el mensaje para contar sus vocales:"));


function contarLetras(fraseLetras) {
    const minusculas = fraseLetras.toLowerCase()
    const soloLetras = minusculas.replace(/[^a-z]/g, "");
    const letrasunicas = [...new Set(soloLetras)];
    return letrasunicas.length;
}


let input = prompt("Ingresa el mensaje para hacer un conteo de sus letras unicas");
function repetidas(frases) {
   let minusculas = frases.toLowerCase();
   const justLetters = minusculas.replace(/[^a-z]/g, "");
   let resultado = [...justLetters]; 
   const repetidas = resultado.reduce((acumulador, valor) => {
    acumulador[valor] = (acumulador[valor] || 0) + 1;
    return acumulador;
   }, {});
   return repetidas;
}

console.log(repetidas(input));


document.write(`<h2>Tu frase: (${input}) tiene: ${contarLetras(input)} letras unicas</h2> <br> <b>puedes verificar en consola las veces de repeticion de cada LETRA (no se validan simbolos u otros caracteres)</b>`);