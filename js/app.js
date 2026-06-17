// --- Renderizado de productos ---
function filtrarProductos(filtro, boton = null) {
  // Quitar la clase activa de todos los botones
  document.querySelectorAll('.filtro-btn').forEach(btn => btn.classList.remove('active'));
  if (boton) boton.classList.add('active');

  const grid = document.getElementById('productos-grid');
  grid.innerHTML = '';

  // Filtrar productos por categoría
  const productosFiltrados = filtro === 'todos'
    ? productos
    : productos.filter(p => p.categoria.toLowerCase() === filtro.toLowerCase());

  // Crear tarjetas de producto
  productosFiltrados.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'producto-card';

    // Si no tiene imagen definida, generar nombre de archivo automático
    const imagenSrc = producto.imagen || generarImagen(producto.nombre);

    card.innerHTML = `
      <img src="${imagenSrc}" alt="${producto.nombre}" class="producto-imagen">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcionCorta || producto.descripcion}</p>
      <div class="precio">${producto.precio}</div>
      <button class="btn-producto" onclick="verDescripcion(${producto.id})">Ver más detalles</button>
    `;

    grid.appendChild(card);
  });
}

// --- Función para abrir detalle de producto ---
function verDescripcion(id) {
  window.location.href = `producto.html?id=${id}`;
}

// --- Renderizado de sucursales ---
function renderSucursales() {
  const grid = document.getElementById('sucursales-grid');
  if (!grid) return;

  grid.innerHTML = '';

  sucursales.forEach(sucursal => {
    const card = document.createElement('div');
    card.className = 'sucursal-card';

    card.innerHTML = `
      <h3>📍 ${sucursal.ciudad}</h3>
      <p>${sucursal.estado}</p>
      <p class="horario">Horario: Lunes a Viernes 9am - 7pm, Sábados 9am - 2pm</p>
    `;

    grid.appendChild(card);
  });
}

// --- Generador automático de nombres de imagen ---
function generarImagen(nombre) {
  return "img/" + nombre.toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-") // reemplaza espacios y caracteres raros por guiones
    .replace(/-+$/,"")            // quita guiones al final
    + ".jpg";
}

// --- Inicialización al cargar la página ---
window.addEventListener('DOMContentLoaded', () => {
  filtrarProductos('todos');
  renderSucursales();
});

