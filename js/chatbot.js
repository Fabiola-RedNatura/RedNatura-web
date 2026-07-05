// Revert chatbot button generation to stable and create vertical .btn menu
function mostrarMenuPrincipal() {
  const messagesDiv = document.getElementById('chat-messages');
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

function mostrarProductoChat(productoId) {
  const prod = productos.find(p => p.id === productoId);
  if (!prod) return;
  const precioDesc = prod.precio > 350 ? Math.round(prod.precio * 0.7) : null;
  let msg = `**${prod.nombre}**\n${formatMoneda(prod.precio)}`;
  if (precioDesc) msg += `\n💚 Con 30% DESC: ${formatMoneda(precioDesc)}`;
  msg += `\n${prod.descripcionCorta || ''}`;
  addMessage(msg, 'bot');

  const messagesDiv = document.getElementById('chat-messages');
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

function mostrarFormularioEstado() {
  addMessage('¿De cuál estado me llamas?', 'bot');
  const messagesDiv = document.getElementById('chat-messages');
  const estadosEl = document.createElement('div');
  estadosEl.className = 'chat-menu';
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
  const suc = encontrarSucursalesPorEstado(estado);
  addMessage(`Tenemos ${suc.length} sucursal(es) en ${estado}:`, 'bot');

  const messagesDiv = document.getElementById('chat-messages');
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
