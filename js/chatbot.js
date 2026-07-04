// Respuestas del chatbot
const respuestasBot = {
  bienvenida: "¡Hola! Soy el Asistente IA de RedNatura 🤖. Estoy aquí para ayudarte a encontrar el suplemento perfecto. ¿Qué necesitas?"
};

let chatMessages = [];
const WA_NUMBER = '5555070734';

// Función para enviar mensaje
function sendMessage() {
  const input = document.getElementById('chat-input');
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
  const lower = texto.toLowerCase();
  
  // Buscar producto específico (seguro con validaciones)
  const productoEncontrado = typeof productos !== 'undefined' ? productos.find(p => 
    lower.includes((p.nombre || '').toLowerCase()) ||
    lower.includes((p.descripcionCorta || '').toLowerCase())
  ) : null;
  
  if (productoEncontrado) {
    // El precio en productos.js está en formato string con símbolo, no usar toLocaleString directamente
    return `Encontré **${productoEncontrado.nombre}** - ${productoEncontrado.precio}\n${productoEncontrado.descripcionCorta}\n\n¿Quieres ver más detalles?`;
  }
  
  // Palabras clave
  if (lower.includes('ayuda') || lower.includes('soporte')) {
    return "¿En qué puedo ayudarte?\n- 🔍 Busca productos por categoría\n- 🏪 Encuentra sucursales cercanas\n- 💳 Consulta precios y promociones";
  }
  
  if (lower.includes('promoción') || lower.includes('descuento') || lower.includes('oferta')) {
    return "🎁 Tenemos DESCUENTO 30% en productos mayores a $350 al inscribirse. ¡Oferta por tiempo limitado!";
  }
  
  return "¿Quieres buscar un producto, encontrar una sucursal o conocer nuestras ofertas?";
}

// Función para agregar mensaje
function addMessage(texto, tipo) {
  const messagesDiv = document.getElementById('chat-messages');
  const messageEl = document.createElement('div');
  messageEl.className = `message ${tipo}`;
  
  let contenido = texto
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
  
  messageEl.innerHTML = contenido;
  messagesDiv.appendChild(messageEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Función para alternar chat
function toggleChat() {
  const chatbot = document.getElementById('chatbot');
  
  if (chatbot.classList.contains('hidden')) {
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

function mostrarMenuPrincipal() {
  const messagesDiv = document.getElementById('chat-messages');
  const menuEl = document.createElement('div');
  menuEl.className = 'chat-menu';
  menuEl.innerHTML = `
    <button class="menu-btn btn" onclick="mostrarCategorias()">🔍 Productos</button>
    <button class="menu-btn btn" onclick="mostrarFormularioEstado()">🏪 Sucursales</button>
    <button class="menu-btn btn" onclick="mostrarContacto()">💬 Contacto</button>
    <button class="menu-btn btn" onclick="mostrarOfertas()">🎁 Ofertas</button>
  `;
  messagesDiv.appendChild(menuEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function mostrarCategorias() {
  addMessage('¿Qué tipo de producto buscas?', 'bot');
  const messagesDiv = document.getElementById('chat-messages');
  const categoriasEl = document.createElement('div');
  categoriasEl.className = 'chat-menu';
  const categorias = ['Digestión', 'Mental', 'Mujeres', 'Hombres', 'Niños', 'Belleza', 'Inmunológico', 'Energía', 'Glucosa', 'Circulación', 'Articulaciones', 'Desintoxicación', 'Control de Peso'];
  categoriasEl.innerHTML = categorias.map(cat => `<button class="menu-btn btn" onclick="buscarCategoria('${cat}')">${cat}</button>`).join('');
  messagesDiv.appendChild(categoriasEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function buscarCategoria(categoria) {
  const productosCat = typeof productos !== 'undefined' ? productos.filter(p => p.categoria === categoria) : [];
  const total = productosCat.length;
  
  if (total > 0) {
    addMessage(`Encontré ${total} producto(s) en ${categoria}:`, 'bot');
    
    const messagesDiv = document.getElementById('chat-messages');
    const productosEl = document.createElement('div');
    productosEl.className = 'chat-menu';
    productosEl.innerHTML = productosCat.map(p => `<button class="menu-btn btn" onclick="mostrarProductoChat(${p.id})">${p.nombre}</button>`).join('');
    messagesDiv.appendChild(productosEl);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  } else {
    addMessage(`No encontré productos en ${categoria}.`, 'bot');
  }
}

function mostrarProductoChat(productoId) {
  const prod = typeof productos !== 'undefined' ? productos.find(p => p.id === productoId) : null;
  if (prod) {
    const precioNum = parseFloat(String(prod.precio).replace(/[^\d.]/g,'')) || 0;
    const precioDesc = precioNum > 350 ? Math.round(precioNum * 0.7) : null;
    let msg = `**${prod.nombre}**\n${prod.precio}`;
    if (precioDesc) {
      msg += `\n💚 Con 30% DESC: $${precioDesc}`;
    }
    msg += `\n${prod.descripcionCorta}`;
    addMessage(msg, 'bot');
    
    const messagesDiv = document.getElementById('chat-messages');
    const botonesEl = document.createElement('div');
    botonesEl.className = 'chat-menu';
    botonesEl.innerHTML = `
      <button class="menu-btn btn" onclick="irAlDetalle(${prod.id})">📄 Ver Detalles</button>
      <button class="menu-btn btn" onclick='window.location.href="contacto.html?producto=${encodeURIComponent(prod.nombre)}&precio=${encodeURIComponent(prod.precio)}"'>💬 Estoy interesado</button>
    `;
    messagesDiv.appendChild(botonesEl);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}

function mostrarFormularioEstado() {
  addMessage('¿De cuál estado me llamas?', 'bot');
  const messagesDiv = document.getElementById('chat-messages');
  const estadosEl = document.createElement('div');
  estadosEl.className = 'chat-menu';
  const estados = (typeof sucursales !== 'undefined') ? Array.from(new Set(sucursales.map(s => s.estado))).slice(0,12) : [];
  estadosEl.innerHTML = estados.map(est => `<button class="menu-btn btn" onclick="seleccionarEstado('${est}')">${est}</button>`).join('');
  messagesDiv.appendChild(estadosEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function seleccionarEstado(estado) {
  const suc = typeof sucursales !== 'undefined' ? sucursales.filter(s => s.estado === estado) : [];
  addMessage(`Tenemos ${suc.length} sucursal(es) en ${estado}:`, 'bot');
  
  const messagesDiv = document.getElementById('chat-messages');
  const sucEl = document.createElement('div');
  sucEl.className = 'chat-menu';
  sucEl.innerHTML = suc.map(s => `<button class="menu-btn btn" onclick="seleccionarSucursal('${s.ciudad}')">${s.ciudad}</button>`).join('');
  messagesDiv.appendChild(sucEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function seleccionarSucursal(nombre) {
  addMessage(`📍 **${nombre}**\n\n¿Qué te gustaría hacer?`, 'bot');
  
  const messagesDiv = document.getElementById('chat-messages');
  const botonesEl = document.createElement('div');
  botonesEl.className = 'chat-menu';
  botonesEl.innerHTML = `
    <button class="menu-btn btn" onclick='window.location.href="contacto.html?producto=${encodeURIComponent('Sucursal ' + nombre)}"'>💬 Consultar sucursal</button>
  `;
  messagesDiv.appendChild(botonesEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function mostrarContacto() {
  addMessage(`📞 **Contáctanos:**\n💬 WhatsApp: ${WA_NUMBER}\n📧 Email: fabiola250204@gmail.com`, 'bot');
  const messagesDiv = document.getElementById('chat-messages');
  const contactoEl = document.createElement('div');
  contactoEl.className = 'chat-menu';
  contactoEl.innerHTML = `
    <button class="menu-btn btn" onclick='window.open("https://wa.me/${WA_NUMBER}?text=Estoy%20interesado%20en%20RedNatura","_blank")'>💬 WhatsApp</button>
    <button class="menu-btn btn" onclick='window.location.href="mailto:fabiola250204@gmail.com?subject=Consulta%20RedNatura"'>📧 Email</button>
  `;
  messagesDiv.appendChild(contactoEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function mostrarOfertas() {
  addMessage('🎁 **DESCUENTO 30% en productos mayores a $350**\n\n✨ OFERTA POR TIEMPO LIMITADO ✨\n\n¡Al inscribirse hoy obtendrás este increíble descuento!\n\nVe a la sección de Productos para ver los artículos aplicables.', 'bot');
  const messagesDiv = document.getElementById('chat-messages');
  const ofertasEl = document.createElement('div');
  ofertasEl.className = 'chat-menu';
  ofertasEl.innerHTML = `<button class="menu-btn btn" onclick="document.getElementById('productos').scrollIntoView({behavior:'smooth'}); toggleChat();">🛍️ Ver Productos</button>`;
  messagesDiv.appendChild(ofertasEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function handleChatInput(event) {
  if (event.key === 'Enter') sendMessage();
}

// export global helpers if needed
window.irAlDetalle = function(id){ window.location.href = `producto.html?id=${id}` };

// No auto-init required
