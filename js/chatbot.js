let estado = 'inicial';

function toggleChat() {
  const chatbot = document.getElementById('chatbot');
  chatbot.classList.toggle('hidden');

  if (!chatbot.classList.contains('hidden') && estado === 'inicial') {
    mostrarMensajeBot("¡Hola! 👋 Bienvenido a RedNatura. Soy tu asistente IA.", [
      { texto: "Catálogo", accion: () => mostrarCategorias() },
      { texto: "Ubicar sucursal", accion: () => pedirUbicacion() },
      { texto: "Recomendaciones", accion: () => mostrarRecomendaciones() }
    ]);
    estado = 'esperando_opcion';
  }
}

function mostrarCategorias() {
  const categorias = [
    "Salud Digestiva","Control de Peso","Energía y Rendimiento","Belleza y Antienvejecimiento",
    "Sistema Inmunológico","Mujeres","Hombres","Nutrición Infantil","Deportistas","Adultos Mayores"
  ];
  mostrarMensajeBot("📋 Selecciona una categoría:", categorias.map(cat => ({
    texto: cat, accion: () => mostrarProductosPorCategoria(cat)
  })));
}

function mostrarProductosPorCategoria(categoria) {
  const filtrados = productos.filter(p => p.categoria.toLowerCase().includes(categoria.toLowerCase()));
  if (filtrados.length === 0) {
    mostrarMensajeBot("No encontré productos en esa categoría.");
    return;
  }

  mostrarMensajeBot(`📦 Productos en categoría ${categoria}:`);
  filtrados.forEach(prod => {
    mostrarMensajeBot(`${prod.nombre}`, [
      { texto: "Ver precio", accion: () => mostrarMensajeBot(`💰 Precio de ${prod.nombre}: ${prod.precio}`) },
      { texto: "Ver descripción", accion: () => mostrarMensajeBot(`ℹ️ ${prod.descripcion}`) },
      { texto: "Registrarme", accion: () => mostrarMensajeBot(`✅ Al registrarte como cliente preferente obtienes 30% de descuento en cualquier producto mayor de $350 MXN.\n\n¿Quieres abrir el formulario de registro?`, [
        { texto: "Sí, registrarme", accion: () => abrirModalRegistro() },
        { texto: "No, gracias", accion: () => mostrarMensajeBot("De acuerdo 👍. Puedes seguir explorando productos.") }
      ]) }
    ]);
  });
}

function mostrarRecomendaciones() {
  mostrarMensajeBot("👥 ¿Para quién necesitas recomendaciones?", [
    { texto: "Mujer", accion: () => mostrarProductosPorCategoria("Mujeres") },
    { texto: "Hombre", accion: () => mostrarProductosPorCategoria("Hombres") },
    { texto: "Niños", accion: () => mostrarProductosPorCategoria("Nutrición Infantil") },
    { texto: "Deportistas", accion: () => mostrarProductosPorCategoria("Energía y Rendimiento") },
    { texto: "Adultos Mayores", accion: () => mostrarProductosPorCategoria("Articulaciones y Movilidad") }
  ]);
}

function pedirUbicacion() {
  mostrarMensajeBot("📍 Escribe tu ciudad o estado para mostrarte la sucursal más cercana.");
  estado = 'esperando_ubicacion';
}

function procesarUbicacion(ubicacion) {
  mostrarMensajeBot(`✅ Sucursal encontrada en ${ubicacion}. Horario: Lunes a Domingo 9:00 AM - 9:00 PM`);
  estado = 'esperando_opcion';
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

function mostrarMensajeUsuario(mensaje) {
  const messagesDiv = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message user';
  messageDiv.textContent = mensaje;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function handleChatInput(event) {
  if (event.key === 'Enter') sendMessage();
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const mensaje = input.value.trim();
  if (!mensaje) return;
  mostrarMensajeUsuario(mensaje);
  input.value = '';

  if (estado === 'esperando_ubicacion') {
    procesarUbicacion(mensaje);
  } else {
    mostrarMensajeBot("No entendí bien tu pregunta. 🤔 Usa los botones para navegar.");
  }
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
