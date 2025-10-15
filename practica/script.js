// celdas es el nombre de la variable, "celda" es la clase que tienen
const celdas = document.getElementsByClassName("celda")

const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1

// Aca guardamos que hay en cada celda, si un jugador la selecciono o no.
let state = []

/**
 * 	La primer parte es el iterador, la definimos en el 
 * momento en este caso con let i = 0
 * 	La segunda parte es la condición, mientras la
 * condición se cumpla vamos a volver a repetir el ciclo
 * 	La tercera y última parte es el aumentador, es la que
 * se va a encargar de actualizar el índice.
 */
for (let i = 0; i < celdas.length; i++) {
	// Para llenar nuestro estado local
	state.push(null)

	// "e" es el evento y la información que tiene, entre ellas, cual
	// fue el "target" u objetivo del evento, para saber en que celda
	// se hizo click.
	celdas[i].onclick = (e) => {
		// Esto es para que si ya hay un dato en la celda, no lo sobreescriba
		if (state[i]) return

		e.target.innerText = currentPlayer
		state[i] = currentPlayer

		// TODO: Función para determinar si alguien ganó
		// TODO: Función para determinar si hay empate

		// Esto se puede extraer en una función
		if (currentPlayer === player1) {
			currentPlayer = player2
		} else {
			currentPlayer = player1
		}
	}
}

// TODO: Implementar botón y función para resetear

// TODO: Implementar función que de informacijón del juego
