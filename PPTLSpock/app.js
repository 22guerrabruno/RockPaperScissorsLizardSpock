const btnPiedra = document.getElementById("piedra");
const btnPapel = document.getElementById("papel");
const btnTijera = document.getElementById("tijera");

const btnLagarto = document.getElementById("lagarto");
const btnSpock = document.getElementById("spock");
const P1 = document.getElementById("P1");
const MQ = document.getElementById("MQ");

const usuario = document.getElementById("usuario");
const maquina = document.getElementById("maquina");

const btnReset = document.getElementById("reset");
const jugadaMaquina = document.getElementById("jugador-2");
const resultado = document.getElementById("resultado");

const reglas = {
  piedra: ["lagarto", "tijera"],
  papel: ["piedra", "spock"],
  tijera: ["papel", "lagarto"],
  lagarto: ["spock", "papel"],
  spock: ["piedra", "tijera"],
};

let puntosJ1 = 0;
let puntosMQ = 0;
btnPiedra.addEventListener("click", () => {
  eleccionMaquina("piedra");
});
btnPapel.addEventListener("click", () => {
  eleccionMaquina("papel");
});
btnTijera.addEventListener("click", () => {
  eleccionMaquina("tijera");
});

btnLagarto.addEventListener("click", () => {
  eleccionMaquina("lagarto");
});
btnSpock.addEventListener("click", () => {
  eleccionMaquina("spock");
});

function eleccionMaquina(eleccionUsuario) {
  const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
  usuario.src = "./imagenes/" + eleccionUsuario + ".png";
  const indice = Math.floor(Math.random() * 5);
  const juego = opciones[indice];
  jugar(eleccionUsuario, juego);
  return juego;
}

function jugar(eleccionUsuario, eleccionMaquina) {
  maquina.src = "./imagenes/" + eleccionMaquina + ".png";
  if (eleccionMaquina !== eleccionUsuario) {
    if (reglas[eleccionUsuario].includes(eleccionMaquina)) {
      resultado.innerHTML = "Ganaste";
      puntosJ1++;
      P1.innerHTML = "Puntos J1: " + puntosJ1;
    } else {
      resultado.innerHTML = "Perdiste";
      puntosMQ++;
      MQ.innerHTML = "Puntos MQ: " + puntosMQ;
    }
  } else {
    resultado.innerHTML = "Empate";
  }
}
btnReset.addEventListener("click", () => {
  puntosJ1 = 0;
  puntosMQ = 0;
  P1.innerHTML = "Puntos J1: " + puntosJ1;
  MQ.innerHTML = "Puntos MQ: " + puntosMQ;
});
