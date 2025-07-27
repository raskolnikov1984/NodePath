// Tomar argumentos los cuales van a ser pasados por Consola.
// Apartir de la posicion 2
const args = process.argv.slice(2);

// Minimo por defecto
let min = 1;

// Maximo por defecto
let max = 100;

if(args.length >= 2){
  // Tomar valor de la posicion 0
  const parsedMin = parseInt(args[0], 10);

  // Tomar valode de la posicion 1
  const parsedMax = parseInt(args[1], 10);

  if(!isNaN(parsedMin) && !isNaN(parsedMax) && parsedMin < parsedMax){
    min = parsedMin;
    max = parsedMax;
  } else {
    console.log('Rango Invalido. Usando valores por defecto del (1-100).');
  };
}

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Numero aleatorio generado entre ${min} y ${max}: ${randomNumber}`);
