let usuarioRegistrado = false;
let datosUsuario = {};
let estado = 'inicial';
let sucursalActual = null;

function toggleChat() {
  const chatbot = document.getElementById('chatbot');
  chatbot.classList.toggle('hidden');

  if (!chatbot.classList.contains('hidden')) {
    if (estado === 'inicial') {
      setTimeout(() => {
        mostrarMensajeBot("¡Hola! 👋 Bienvenido a RedNatura. Soy tu asistente IA.", [
          { texto: "Ver catálogo", accion: () => mostrarCategorias() },
          { texto: "Ubicar sucursal", accion: () => mostrarMensajeBot("📍 Dime tu ciudad o estado para mostrarte la sucursal más cercana.") },
          { texto: "Cómo comprar", accion: () => mostrarMensajeBot("📦 Para comprar: 1️⃣ Elige productos 2️⃣ Regístrate 3️⃣ Confirmamos tu pedido 4️⃣ Recibes en casa o sucursal.") }
        ]);
        estado = 'esperando_opcion';
      }, 500);
    }
  }
}

function mostrarCategorias() {
  mostrarMensajeBot("📋 Tenemos categorías de suplementos. Selecciona una:", [
    { texto: "Digestión", accion: () => mostrarProductosPorCategoria("Salud Digestiva") },
    { texto: "Peso", accion: () => mostrarProductosPorCategoria("Control de Peso") },
    { texto: "Energía", accion: () => mostrarProductosPorCategoria("Energía y Rendimiento") },
    { texto: "Belleza", accion: () => mostrarProductosPorCategoria("Belleza") },
    { texto: "Inmunidad", accion: () => mostrarProductosPorCategoria("Sistema Inmunológico") }
  ]);
}

function mostrarProductosPorCategoria(categoria) {
  const filtrados = productos.filter(p => p.categoria.toLowerCase().includes(categoria.toLowerCase()));
  if (filtrados.length === 0) {
    mostrarMensajeBot("No encontré productos en esa categoría.");
    return;
  }

  mostrarMensajeBot(`📦 Productos en categoría ${categoria}:`);
  filtrados.forEach(prod => {
    mostrarMensajeBot(`${prod.nombre} ($${prod.precio})`, [
      { texto: "Ver Beneficios", accion: () => mostrarMensajeBot("✨ Beneficios:\n- " + prod.descripcion) },
      { texto: "Registrarme", accion: () => abrirModalRegistro() }
    ]);
  });
}

function mostrarMensajeUsuario(mensaje) {
  const messagesDiv = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message user';
  messageDiv.textContent = mensaje;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function mostrarMensajeBot(mensaje, opciones=[]) {
  const messagesDiv = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message bot';
  messageDiv.textContent = mensaje;

  if (opciones.length > 0) {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'options';
    opciones.forEach(opcion => {
      const btn = document.createElement('button');
      btn.textContent = opcion.texto;
      btn.onclick = opcion.accion;
      buttonsDiv.appendChild(btn);
    });
    messageDiv.appendChild(buttonsDiv);
  }

  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function abrirModalRegistro() {
  const modal = document.getElementById('registro-modal');
  modal.classList.remove('hidden');
  modal.classList.add('show');
}

function cerrarRegistro() {
  const modal = document.getElementById('registro-modal');
  modal.classList.add('hidden');
  modal.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registro-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      datosUsuario = {
        nombre: document.getElementById('nombre').value,
        celular: document.getElementById('celular').value,
        fechaNacimiento: document.getElementById('fecha_nacimiento').value,
        lugarNacimiento: document.getElementById('lugar_nacimiento').value,
        sucursal: sucursalActual ? `${sucursalActual.ciudad}, ${sucursalActual.estado}` : 'No especificada',
        fechaRegistro: new Date().toLocaleString('es-MX')
      };
      enviarEmailRegistro(datosUsuario);
      enviarWhatsAppRegistro(datosUsuario);
      usuarioRegistrado = true;
      estado = 'registro_completo';
      cerrarRegistro();
      form.reset();
      mostrarMensajeBot(`✅ ¡Registro completado exitosamente ${datosUsuario.nombre}!\n\n📧 Confirmación enviada.\n📱 Nos contactaremos al ${datosUsuario.celular} para confirmar tu compra.`);
    });
  }
});

function enviarEmailRegistro(datos) {
  const formData = new FormData();
  formData.append('email', 'fabiola250204@gmail.com');
  formData.append('subject', `Nuevo Registro - ${datos.nombre}`);
  formData.append('message', `NUEVO REGISTRO EN REDNATURA\n
Nombre: ${datos.nombre}
Celular: ${datos.celular}
Nacimiento: ${datos.fechaNacimiento} en ${datos.lugarNacimiento}
Sucursal: ${datos.sucursal}
Fecha Registro: ${datos.fechaRegistro}`);
  formData.append('_captcha', 'false');

  fetch('https://formsubmit.co/ajax/fabiola250204@gmail.com', {
    method: 'POST',
    body: formData
  })
  .then(r => r.json())
  .then(data => console.log('Email enviado', data))
  .catch(error => console.log('Error email', error));
}

function enviarWhatsAppRegistro(datos) {
  const numeroCliente = datos.celular.replace(/\D/g, '');
  const mensaje = encodeURIComponent(`Hola ${datos.nombre}, gracias por registrarte en RedNatura. Tu sucursal es: ${datos.sucursal}. Nos pondremos en contacto contigo para tu compra.`);
  const url = `https://wa.me/52${numeroCliente}?text=${mensaje}`;
  window.open(url, '_blank');
}
