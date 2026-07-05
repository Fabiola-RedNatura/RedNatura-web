// Chatbot full implementation: messages, UI helpers, and menu actions
const respuestasBot = {
  bienvenida: "¡Hola! Soy el Asistente IA de RedNatura 🤖. Estoy aquí para ayudarte a encontrar el suplemento perfecto. ¿Qué necesitas?"
};

let chatMessages = [];
const WA_NUMBER = '5555070734';

function sendMessage() {
  const input = document.getElementById('chat-input');
  if (!input) return;
  const mensaje = input.value.trim();
  if (!mensaje) return;

  addMessage(mensaje, 'user');
  input.value = '';

  setTimeout(() => {
    const respuesta = obtenerRespuesta(mensaje);
    addMessage(respuesta, 'bot');
  }, 300);
}

function obtenerRespuesta(texto) {
  const lower = String(texto || '').toLowerCase();

  // Buscar producto específico
  const productoEncontrado = (typeof productos !== 'undefined') ? productos.find(p =>
    lower.includes((p.nombre || '').toLowerCase()) ||
    lower.includes((p.descripcionCorta || '').toLowerCase())
  ) : null;

  if (productoEncontrado) {
    const precioNum = parseFloat(String(productoEncontrado.precio).replace(/[^0-9.-]+/g, '')) || 0;
    const precioDesc = precioNum > 350 ? Math.round(precioNum * 0.7) : null;
    let res = `Encontré **${productoEncontrado.nombre}** - ${formatMoneda(precioNum)}\n${productoEncontrado.descripcionCorta || ''}`;
    if (precioDesc) res += `\n💚 Con 30% DESC: ${formatMoneda(precioDesc)}`;
    res += `\n\n¿Quieres ver más detalles?`;
    return res;
  }

  if (lower.includes('ayuda') || lower.includes('soporte')) {
    return "¿En qué puedo ayudarte?\n- 🔍 Busca productos por categoría\n- 🏪 Encuentra sucursales cercanas\n- 💳 Consulta precios y promociones";
  }

  if (lower.includes('promoción') || lower.includes('descuento') || lower.includes('oferta')) {
    return "🎁 Tenemos DESCUENTO 30% en productos mayores a $350 al inscribirse. ¡Oferta por tiempo limitado!";
  }

  return "¿Quieres buscar un producto, encontrar una sucursal o conocer nuestras ofertas?";
}

function addMessage(texto, tipo) {
  const messagesDiv = document.getElementById('chat-messages');
  if (!messagesDiv) return;

  const messageEl = document.createElement('div');
  messageEl.className = `message ${tipo}`;

  let contenido = String(texto || '')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');

  messageEl.innerHTML = contenido;
  messagesDiv.appendChild(messageEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function toggleChat() {
  const chatbot = document.getElementById('chatbot');
  if (!chatbot) return;

  const isHidden = chatbot.classList.contains('hidden');
  if (isHidden) {
    chatbot.classList.remove('hidden');
    chatbot.classList.add('show');

    if (chatMessages.length === 0) {
      setTimeout(() => {
        addMessage(respuestasBot.bienvenida, 'bot');
        mostrarMenuPrincipal();
        chatMessages.push('bienvenida');
      }, 200);
    }
  } else {
    chatbot.classList.add('hidden');
    chatbot.classList.remove('show');
  }
}

function handleChatInput(event) {
  if (event.key === 'Enter') sendMessage();
}

// Utilities used by chatbot (depend on app.js helpers)
function formatMoneda(n) {
  const num = Number(n) || 0;
  return '$' + num.toLocaleString('es-MX', { maximumFractionDigits: 0 });
}

window.irAlDetalle = function(id){ window.location.href = `producto.html?id=${id}` };

// Export basic functions to window in case other scripts need them
window.sendMessage = sendMessage;
window.toggleChat = toggleChat;
window.handleChatInput = handleChatInput;

// The following functions implement menus and were already improved earlier
function mostrarMenuPrincipal() {
  const messagesDiv = document.getElementById('chat-messages');
  if (!messagesDiv) return;
  const menuEl = document.createElement('div');
  menuEl.className = 'chat-menu';
  const acciones = [
    { text: '🔍 Productos', fn: mostrarCategorias },
    { text: '🏪 Sucursales', fn: mostrarFormularioEstado },
    { text: '💬 Contacto', fn: mostrarContacto },
    { text: '🎁 Ofertas', fn: mostrarOfertas }
  ];
  acciones.forEach(a => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn menu-btn';
    b.textContent = a.text;
    b.onclick = a.fn;
    menuEl.appendChild(b);
  });
  messagesDiv.appendChild(menuEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function mostrarCategorias() {
  addMessage('¿Qué tipo de producto buscas?', 'bot');
  const messagesDiv = document.getElementById('chat-messages');
  if (!messagesDiv) return;
  const categoriasEl = document.createElement('div');
  categoriasEl.className = 'chat-menu';
  const categorias = ['Digestión','Mental','Mujeres','Hombres','Niños','Belleza','Inmunológico','Energía','Glucosa','Circulación','Articulaciones','Desintoxicación','Control de Peso','Urinario','Antioxidantes'];
  categorias.forEach(cat => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn menu-btn';
    b.textContent = cat;
    b.onclick = () => buscarCategoria(cat);
    categoriasEl.appendChild(b);
  });
  messagesDiv.appendChild(categoriasEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function buscarCategoria(categoria) {
  const productosCat = (typeof productos !== 'undefined') ? productos.filter(p => p.categoria === categoria) : [];
  const total = productosCat.length;

  if (total > 0) {
    addMessage(`Encontré ${total} producto(s) en ${categoria}:`, 'bot');

    const messagesDiv = document.getElementById('chat-messages');
    if (!messagesDiv) return;
    const productosEl = document.createElement('div');
    productosEl.className = 'chat-menu';
    productosCat.forEach(p => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'btn menu-btn';
      b.textContent = p.nombre;
      b.onclick = () => mostrarProductoChat(p.id);
      productosEl.appendChild(b);
    });
    messagesDiv.appendChild(productosEl);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  } else {
    addMessage(`No encontré productos en ${categoria}.`, 'bot');
  }
}

function mostrarProductoChat(productoId) {
  const prod = (typeof productos !== 'undefined') ? productos.find(p => p.id === productoId) : null;
  if (prod) {
    const precioNum = parseFloat(String(prod.precio).replace(/[^\d.]/g,'')) || 0;
    const precioDesc = precioNum > 350 ? Math.round(precioNum * 0.7) : null;
    let msg = `**${prod.nombre}**\n${formatMoneda(precioNum)}`;
    if (precioDesc) msg += `\n💚 Con 30% DESC: ${formatMoneda(precioDesc)}`;
    msg += `\n${prod.descripcionCorta || ''}`;
    addMessage(msg, 'bot');

    const messagesDiv = document.getElementById('chat-messages');
    if (!messagesDiv) return;
    const botonesEl = document.createElement('div');
    botonesEl.className = 'chat-menu';

    const btnDetalles = document.createElement('button');
    btnDetalles.type = 'button';
    btnDetalles.className = 'btn menu-btn';
    btnDetalles.textContent = '📄 Ver Detalles';
    btnDetalles.onclick = () => irAlDetalle(prod.id);
    botonesEl.appendChild(btnDetalles);

    const btnWhats = document.createElement('a');
    btnWhats.className = 'btn menu-btn';
    btnWhats.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Estoy interesado en ' + prod.nombre)}`;
    btnWhats.target = '_blank';
    btnWhats.rel = 'noopener';
    btnWhats.textContent = '💬 WhatsApp';
    botonesEl.appendChild(btnWhats);

    messagesDiv.appendChild(botonesEl);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}

function mostrarFormularioEstado() {
  addMessage('¿De cuál estado me llamas?', 'bot');
  const messagesDiv = document.getElementById('chat-messages');
  if (!messagesDiv) return;
  const estadosEl = document.createElement('div');
  estadosEl.className = 'chat-menu';
  const estados = (typeof sucursales !== 'undefined') ? Array.from(new Set(sucursales.map(s => s.estado))) : [];
  estados.forEach(est => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn menu-btn';
    b.textContent = est;
    b.onclick = () => seleccionarEstado(est);
    estadosEl.appendChild(b);
  });
  messagesDiv.appendChild(estadosEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function seleccionarEstado(estado) {
  const suc = (typeof sucursales !== 'undefined') ? sucursales.filter(s => s.estado === estado) : [];
  addMessage(`Tenemos ${suc.length} sucursal(es) en ${estado}:`, 'bot');

  const messagesDiv = document.getElementById('chat-messages');
  if (!messagesDiv) return;
  const sucEl = document.createElement('div');
  sucEl.className = 'chat-menu';
  suc.forEach(s => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn menu-btn';
    b.textContent = s.nombre || 'Sucursal';
    b.onclick = () => seleccionarSucursal(s.nombre || 'Sucursal');
    sucEl.appendChild(b);
  });
  messagesDiv.appendChild(sucEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function seleccionarSucursal(nombre) {
  addMessage(`📍 **${nombre}**\n\n¿Qué te gustaría hacer?`, 'bot');

  const messagesDiv = document.getElementById('chat-messages');
  if (!messagesDiv) return;
  const botonesEl = document.createElement('div');
  botonesEl.className = 'chat-menu';

  const btnWhats = document.createElement('a');
  btnWhats.className = 'btn menu-btn';
  btnWhats.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Estoy interesado en la sucursal de ' + nombre)}`;
  btnWhats.target = '_blank';
  btnWhats.rel = 'noopener';
  btnWhats.textContent = '💬 WhatsApp';
  botonesEl.appendChild(btnWhats);

  const btnInfo = document.createElement('button');
  btnInfo.type = 'button';
  btnInfo.className = 'btn menu-btn';
  btnInfo.textContent = '📩 Pedir información';
  btnInfo.onclick = () => { window.location.href = `contacto.html?producto=${encodeURIComponent('Sucursal ' + nombre)}`; };
  botonesEl.appendChild(btnInfo);

  messagesDiv.appendChild(botonesEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function mostrarContacto() {
  addMessage(`📞 **Contáctanos:**\n💬 WhatsApp: ${WA_NUMBER}\n📧 Email: fabiola250204@gmail.com`, 'bot');
  const messagesDiv = document.getElementById('chat-messages');
  if (!messagesDiv) return;
  const contactoEl = document.createElement('div');
  contactoEl.className = 'chat-menu';

  const btnWhats = document.createElement('a');
  btnWhats.className = 'btn menu-btn';
  btnWhats.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Estoy interesado en RedNatura')}`;
  btnWhats.target = '_blank';
  btnWhats.rel = 'noopener';
  btnWhats.textContent = '💬 WhatsApp';
  contactoEl.appendChild(btnWhats);

  const btnMail = document.createElement('a');
  btnMail.className = 'btn menu-btn';
  btnMail.href = 'mailto:fabiola250204@gmail.com?subject=Consulta RedNatura';
  btnMail.textContent = '📧 Email';
  contactoEl.appendChild(btnMail);

  messagesDiv.appendChild(contactoEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function mostrarOfertas() {
  addMessage('🎁 **DESCUENTO 30% en productos mayores a $350**\n\n✨ OFERTA POR TIEMPO LIMITADO ✨', 'bot');
  const messagesDiv = document.getElementById('chat-messages');
  if (!messagesDiv) return;
  const ofertasEl = document.createElement('div');
  ofertasEl.className = 'chat-menu';
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'btn menu-btn';
  b.textContent = '🛍️ Ver Productos';
  b.onclick = () => { document.getElementById('productos')?.scrollIntoView({behavior:'smooth'}); toggleChat(); };
  ofertasEl.appendChild(b);
  messagesDiv.appendChild(ofertasEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
