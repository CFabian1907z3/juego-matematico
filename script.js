const preguntas = [
    {
        pregunta: "¿Cuánto es 5 + 3?",
        opciones: ["6", "7", "8", "9"],
        respuesta: "8"
    },
    {
        pregunta: "¿Cuánto es 12 - 4?",
        opciones: ["6", "8", "7", "9"],
        respuesta: "8"
    },
    {
        pregunta: "¿Cuánto es 7 × 6?",
        opciones: ["36", "42", "48", "56"],
        respuesta: "42"
    },
    {
        pregunta: "¿Cuál es la raíz cuadrada de 16?",
        opciones: ["2", "3", "4", "5"],
        respuesta: "4"
    },
    {
        pregunta: "Si 3x + 5 = 14, ¿x = ?",
        opciones: ["3", "2", "4", "5"],
        respuesta: "3"
    },
    {
        pregunta: "¿Cuánto es 9 × 9?",
        opciones: ["72", "81", "99", "90"],
        respuesta: "81"
    },
    {
        pregunta: "¿Cuál es la raíz cuadrada de 64?",
        opciones: ["6", "7", "8", "9"],
        respuesta: "8"
    },
    {
        pregunta: "¿Cuánto es 25 ÷ 5?",
        opciones: ["4", "5", "6", "7"],
        respuesta: "5"
    },
    {
        pregunta: "¿Cuánto es 3^3?",
        opciones: ["6", "9", "27", "30"],
        respuesta: "27"
    },
    {
        pregunta: "Si 2x + 7 = 15, ¿x = ?",
        opciones: ["2", "3", "4", "5"],
        respuesta: "4"
    }
];

// Variables iniciales
let preguntaActual = 0;
let puntaje = 0;

// Cargar sonidos
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');

// Mostrar la primera pregunta
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    document.getElementById('question').innerText = pregunta.pregunta;
    const opciones = document.querySelectorAll('.option');
    opciones.forEach((boton, index) => {
        boton.innerText = pregunta.opciones[index];
        boton.onclick = () => verificarRespuesta(pregunta.opciones[index], pregunta.respuesta);
    });
}

// Verificar la respuesta
function verificarRespuesta(opcionSeleccionada, respuestaCorrecta) {
    if (opcionSeleccionada === respuestaCorrecta) {
        puntaje++;
        document.getElementById('score').innerText = `Puntaje: ${puntaje}`;
        correctSound.play();
    } else {
        wrongSound.play();
    }
    siguientePregunta();
}

// Pasar a la siguiente pregunta
function siguientePregunta() {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        terminarJuego();
    }
}

// Terminar el juego
function terminarJuego() {
    document.getElementById('quiz-container').innerHTML = `<h2>¡Juego Terminado! Tu puntaje final es: ${puntaje}</h2>`;
}

// Iniciar el juego
mostrarPregunta();