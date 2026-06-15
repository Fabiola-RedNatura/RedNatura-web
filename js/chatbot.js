// chatbot.js

let productoSeleccionado = null;

// Inicializar chatbot
document.getElementById("send-btn").addEventListener("click", procesarMensaje);
document.getElementById("registro-form").addEventListener("submit", enviarRegistro);

// Mostrar mensajes en el chat
function mostrarMensaje(texto, tipo = "bot") {
  const chatWindow = document.getElementById("chat-window");
  const mensaje = document.createElement("div");
  mensaje.className = tipo === "bot" ? "message bot" : "message user";
  mensaje.textContent = texto;
  chatWindow.appendChild(mensaje);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Procesar mensaje del usuario
function procesarMensaje() {
  const input = document.getElementById("chat-input");
  const texto = input.value.trim();
  if (!texto) return;

  mostrarMensaje(texto, "user");
  input.value = "";

  if (texto.toLowerCase().includes("sucursal")) {
    mostrarMensaje("Por favor dime el estado donde buscas la sucursal.");
    return;
  }

  if (texto.toLowerCase().includes("comprar")) {
    if (productoSeleccionado) {
      mostrarMensaje(`Has elegido comprar: ${productoSeleccionado.nombre}. Completa tu registro aquí mismo 👇`);
      document.getElementById("registro").style.display = "block";
    } else {
      mostrarMensaje("Primero selecciona un producto del catálogo.");
    }
    return;
  }

  mostrarMensaje("No entendí tu solicitud. Puedes preguntar por 'sucursal' o 'comprar producto'.");
}

// Procesar ubicación de sucursal
function procesarUbicacion(estado) {
  const sucursales = {
    "CDMX": ["Sucursal Centro", "Sucursal Norte"],
    "Jalisco": ["Sucursal Guadalajara"],
    "Nuevo León": ["Sucursal Monterrey"]
  };

  if (!sucursales[estado]) {
    mostrarMensaje(`❌ No tenemos registrada una sucursal en "${estado}". Intenta con otro estado.`);
    return;
  }

  if (sucursales[estado].length === 1) {
    mostrarMensaje(`✅ Sucursal encontrada: ${sucursales[estado][0]} en ${estado}. Horario: L-V 9:00-19:00, S 9:00-14:00.`);
  } else {
    mostrarMensaje(`Tenemos varias sucursales en ${estado}. Selecciona una: ${sucursales[estado].join(", ")}`);
  }
}

// Enviar registro a correo y WhatsApp
function enviarRegistro(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const telefono = document.getElementById("telefono").value;
  const lugar = document.getElementById("lugar").value;
  const fecha = document.getElementById("fecha").value;

  const datos = {
    nombre,
    apellidos,
    telefono,
    lugar,
    fecha,
    producto: productoSeleccionado ? productoSeleccionado.nombre : "No especificado"
  };

  // 1️⃣ Enviar a tu correo con FormSubmit
  const formData = new FormData();
  formData.append("email", "fabiola250204@gmail.com"); // tu correo receptor
  formData.append("subject", `Nuevo Registro - ${datos.nombre}`);
  formData.append("message", `NUEVO REGISTRO EN REDNATURA\n
Nombre: ${datos.nombre} ${datos.apellidos}
Teléfono: ${datos.telefono}
Lugar de nacimiento: ${datos.lugar}
Fecha de nacimiento: ${datos.fecha}
Producto: ${datos.producto}`);

  fetch("https://formsubmit.co/fabiola250204@gmail.com", {
    method: "POST",
    body: formData
  }).then(() => {
    console.log("Correo enviado correctamente");
  }).catch(err => {
    console.error("Error al enviar correo:", err);
  });

  // 2️⃣ Abrir WhatsApp al usuario
  const mensajeWhatsApp = `Estoy interesado en ${datos.producto}. Mi nombre es ${datos.nombre} ${datos.apellidos}, teléfono ${datos.telefono}.`;
  const url = `https://wa.me/52${telefono.replace(/\D/g, "")}?text=${encodeURIComponent(mensajeWhatsApp)}`;
  window.open(url, "_blank");

  mostrarMensaje("✅ Registro enviado a tu correo y se abrió WhatsApp para confirmar tu interés.");
  document.getElementById("registro").style.display = "none";
}

