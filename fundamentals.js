// Fundamentos Java Script 

// 1. Declaracion de variables

//Tipos de datos primitivos
let nombreJuego = "The Alters"   //string 
let genero = "Acción - Aventura"            //string
let numconsolasComp = 3                      // int, para el numero de consolas compatibles en ese juego
let status = true         //booleano
let precio = 58.60         //float
const desarrollador = "11 bits studios"           //string (inmutable)

//Tipos de datos compuestos

//Arrays
let personajesPrincipales = ["Megan Thompson", "Jan Dolski"]
let idiomasJuego = ["Español", "Ingles", "Portugués", "Japonés"]

//OBJETO VS JSON

//Este es un objeto
let detalleCompra = {
    id: 1,
    nombreComprador: "Andrés",
    fechaCompra: "2025-06-13", 
    precio: 101.50
}

//Este es un JSON
let reviewGame = {
    "nombreJuego": "The Alters",
    "calificacion": 7,
    "comentarios": "Excelente juego y entretenido"
}

//STRINGS - Manipulacion de datos
let infoJuego = "https://store.steampowered.com/app/1601570/The_Alters/?l=spanish"
console.log(infoJuego.length)             //Longitud de la URL (Propiedad)
console.log(infoJuego.charAt(10))             // Metodo para obtener el caracter en la posición 10
console.log(infoJuego.includes("alters"))      //Verificar si la URL incluye la palabra 'alters'

let paisOrigen = "Londres"
paisOrigen.toUpperCase()          // Metodo para convertir a mayúsculas
paisOrigen.trim()                 // Eliminar espacios en blanco

//ES6: Template String
console.log(`El juego fue creado por ${desarrollador} en: ${paisOrigen}`)
console.log(`El juego ${nombreJuego} estará disponible el 13 de junio del 2025.`); // Concatenar información

//Numbers - Manipulacion de datos
let numeroVidas = "5"
console.log(numeroVidas - 3)

//ES6: Convertir string a un numero entero
console.log(+numeroVidas - 3)       // Convierte el string a un número entero y le resta 3
console.log(typeof(numeroVidas))     // indica el tipo de operando

//Orden de precedencia de los operadores aritmeticos
let numeroNiveles = 10
console.log(numeroNiveles * 2 ** 2)        // Output: 40

// Booleanos
let numAtaquesJugador = 2
let numAtaquesEnemigo = "2"

//Comparacion solo del valor
console.log(numAtaquesJugador == numAtaquesEnemigo)

//ES6: Comparacion Estricta
//Comparacion del valor y del tipo de dato
console.log(numAtaquesJugador === numAtaquesEnemigo)


//Condicionales
const logrosDesbloqueados = ['Vidas infinitas', 'Mejora del avatar']
let vidas = 5 
if (vidas === 0) {
    console.log(`No hay logros disponibles en este momento.`)
}
else {
    console.log(`Ha desbloqueado los siguientes logros - ${logrosDesbloqueados}`)
}
// ES6: Operador ternario
const mensaje = numAtaquesJugador === 0 ? "Ha derrotado al enemigo" : "Ha recibido daño mortal"
