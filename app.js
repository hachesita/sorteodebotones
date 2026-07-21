// =============================================
//  DATOS DEL JUEGO
// =============================================

const messages = {
  win: [
    "¡La suerte está de tu lado hoy! 🍀",
    "¡Increíble! Lo lograste. 🎉",
    "¡El destino te sonríe! ✨",
    "¡Eres imparable! ⚡",
    "¡Gran elección, campeón! 🏆",
  ],
  lose: [
    "El destino no te favoreció esta vez. 😔",
    "¡Mala suerte! Inténtalo de nuevo. 🎲",
    "El universo tiene otros planes para ti. 🌌",
    "Casi... ¡vuelve a intentarlo! 💪",
    "Esta vez no fue. ¡La próxima es tuya! 🔥",
  ],
};

// =============================================
//  LÓGICA PRINCIPAL
// =============================================

/**
 * Se ejecuta al hacer clic en cualquiera de los dos botones.
 * Lanza la moneda (50 % de probabilidad) y muestra el resultado.
 */
function play() {
  const won = Math.random() < 0.5;

  const icon       = won ? "🏆" : "💔";
  const titleText  = won ? "¡Has ganado!" : "¡Has perdido!";
  const titleClass = won ? "win" : "lose";
  const pool       = won ? messages.win : messages.lose;
  const msg        = pool[Math.floor(Math.random() * pool.length)];

  // Actualizar UI del resultado
  document.getElementById("resultIcon").textContent  = icon;

  const titleEl = document.getElementById("resultTitle");
  titleEl.textContent = titleText;
  titleEl.className   = "result-title " + titleClass;

  document.getElementById("resultMsg").textContent = msg;

  // Cambiar de pantalla con micro-animación
  switchScreen("screenChoose", "screenResult");
}

/**
 * Reinicia el juego volviendo a la pantalla de elección.
 */
function reset() {
  switchScreen("screenResult", "screenChoose");
}

// =============================================
//  HELPER: cambio de pantalla
// =============================================

/**
 * Oculta `fromId` y muestra `toId`.
 * @param {string} fromId  - ID de la sección a ocultar
 * @param {string} toId    - ID de la sección a mostrar
 */
function switchScreen(fromId, toId) {
  document.getElementById(fromId).classList.add("hidden");
  document.getElementById(toId).classList.remove("hidden");
}
