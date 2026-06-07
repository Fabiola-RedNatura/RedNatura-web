// Renderizar productos
function renderProductos(filtro = 'todos') {
  const grid = document.getElementById('productos-grid');
  grid.innerHTML = '';

  // Filtrar productos según categoría
  const productosFiltrados = filtro === 'todos' ? productos : productos.filter(p => p.categoria === filtro);

  productosFiltrados.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'producto-card';
    card.innerHTML = `
      <img src="img/${producto.id}.png" alt="${producto.nombre}" class="producto-img">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <div class="precio">$${producto.precio.toLocaleString('es-MX')}</div>
      <button class="btn-producto" onclick="verDescripcion(${producto.id})">Ver descripción</button>
    `;
    grid.appendChild(card);
  });
}

// Redirigir a la página de detalle
function verDescripcion(productoId) {
  window.location.href = `producto.html?id=${productoId}`;
}

// Filtrar productos desde botones
function filtrarProductos(filtro) {
  // Actualizar botones activos
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  // Marcar el botón actual
  event.target.classList.add('active');

  renderProductos(filtro);
}

// Renderizar sucursales
function renderSucursales() {
  const grid = document.getElementById('sucursales-grid');
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

// Inicializar al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  renderProductos();
  renderSucursales();
});

