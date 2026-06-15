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
  const categorias = ["Digestión","Mental","Mujeres","Control de Peso","Glucosa","Urinario","Inmunológico","Energía","Desintoxicación","Niños","Antioxidantes","Circulación","Articulaciones"];
  mostrarMensajeBot("📋 Selecciona una categoría:", categorias.map(cat => ({
    texto: cat, accion: () => mostrarProductosPorCategoria(cat)
  })));
}

function mostrarProductosPorCategoria(categoria) {
  const filtrados = productos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
  if (filtrados.length === 0) {
    mostrarMensajeBot("No encontré productos en esa categoría.");
    return;
  }

  filtrados.forEach(prod => {
    const precioNum = parseFloat(prod.precio.replace('$','').replace(',',''));
    const promoTexto = precioNum > 350 
      ? "🎉 Al registrarte obtienes un 30% de descuento en este producto." 
      : "";

    mostrarMensajeBot(`${prod.nombre}`, [
      { texto: "Ver precio", accion: () => mostrarMensajeBot(
        `💰 Precio de ${prod.nombre}: ${prod.precio}
${promoTexto}
¿Quieres registrarte para comprarlo ahora?`,
        [
          { texto: "Sí, registrarme", accion: () => abrirModalRegistro(prod) },
          { texto: "No, gracias", accion: () => mostrarMensajeBot("De acuerdo 👍, puedes seguir explorando productos.") }
        ]
      ) },
      { texto: "Ver descripción", accion: () => verDescripcion(prod.id) },
      { texto: "Registrarme", accion: () => abrirModalRegistro(prod) }
    ]);
  });
}

function mostrarRecomendaciones() {
  mostrarMensajeBot("👥 ¿Para quién necesitas recomendaciones?", [
    { texto: "Mujer", accion: () => mostrarProductosPorCategoria("Mujeres") },
    { texto: "Hombre", accion: () => mostrarProductosPorCategoria("Energía") },
    { texto: "Niños", accion: () => mostrarProductosPorCategoria("Niños") },
    { texto: "Deportistas", accion: () => mostrarProductosPorCategoria("Energía") },
    { texto: "Adultos Mayores", accion: () => mostrarProductosPorCategoria("Inmunológico") }
  ]);
}

function pedirUbicacion() {
  mostrarMensajeBot("📍 Escribe tu ciudad o estado para mostrarte la sucursal más cercana.");
  estado = 'esperando_ubicacion';
}

function procesarUbicacion(ubicacion) {
  const ciudad = ubicacion.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const sucursal = sucursales.find(s =>
    s.ciudad.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === ciudad ||
    s.estado.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === ciudad
  );

  if (sucursal) {
    mostrarMensajeBot(`✅ Sucursal encontrada en ${sucursal.ciudad}, ${sucursal.estado}.
Horario: Lunes a Viernes 9:00 AM - 7:00 PM, Sábados 9:00 AM - 2:00 PM.`);
  } else {
    mostrarMensajeBot(`❌ No tenemos registrada una sucursal en "${ubicacion}". Intenta con otra ciudad o estado donde RedNatura esté presente.`);
  }
  estado = 'esperando_opcion';
}

function analizarSintomas(texto) {
  const t = texto.toLowerCase();
  if (t.includes("cansancio") || t.includes("fatiga")) {
    mostrarMensajeBot("🔋 Te recomiendo suplementos alimenticios de la categoría Energía.");
  } else if (t.includes("digest")) {
    mostrarMensajeBot("🌿 Te recomiendo suplementos alimenticios de la categoría Digestión.");
  } else if (t.includes("estrés") || t.includes("ansiedad")) {
    mostrarMensajeBot("🧘 Te recomiendo suplementos alimenticios de la categoría Mental.");
  } else {
    mostrarMensajeBot("ℹ️ Recuerda que todos nuestros productos son suplementos alimenticios.");
  }
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
    analizarSintomas(mensaje);
  }
}

function abrirModalRegistro(producto) {
  const modal = document.getElementById('registro-modal');
  modal.classList.remove('hidden');
  modal.classList.add('show');

  const form = document.getElementById('registro-form');
  form.onsubmit = function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellidoPaterno = document.getElementById('apellido-paterno').value;
    const apellidoMaterno = document.getElementById('apellido-materno').value;
    const celular = document.getElementById('celular').value;
    const nacimiento = document.getElementById('nacimiento').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;

    enviarWhatsAppRegistro({ nombre, apellidoPaterno, apellidoMaterno, celular, nacimiento, fechaNacimiento, producto });
    cerrarRegistro();
  };
}

function cerrarRegistro() {
  const modal = document.getElementById('registro-modal');
  modal.classList.add('hidden');
  modal.classList.remove('show');
}

function enviarWhatsAppRegistro(datos) {
  const numeroCliente = "5555070734";
  const mensaje = encodeURIComponent(
    `Hola ${datos.nombre} ${datos.apellidoPaterno} ${datos.apellidoMaterno}, gracias por registrarte en RedNatura.
Tel: ${datos.celular}
Lugar de nacimiento: ${datos.nacimiento}
Fecha de nacimiento: ${datos.fechaNacimiento}
Producto: ${datos.producto?.nombre || ''}.
Nos pondremos en contacto contigo para tu compra.`
  );

  const url = `https://wa.me/52${numeroCliente}?text=${mensaje}`;
  window.open(url, '_blank');

  const mailto = `mailto:fabiola250204@gmail.com?subject=Nuevo registro RedNatura&body=${mensaje}`;
  window.open(mailto, '_blank');
}

