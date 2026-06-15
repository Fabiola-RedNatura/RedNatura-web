// Filtrar y renderizar productos
function filtrarProductos(filtro, boton=null) {
  document.querySelectorAll('.filtro-btn').forEach(btn => btn.classList.remove('active'));
  if (boton) boton.classList.add('active');

  const grid = document.getElementById('productos-grid');
  grid.innerHTML = '';

  const productosFiltrados = filtro === 'todos' ? productos : productos.filter(p => p.categoria === filtro);

  productosFiltrados.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'producto-card'; // coincide con tu CSS
    card.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <div class="precio">${producto.precio}</div>
      <button class="btn-producto" onclick="verDescripcion(${producto.id})">Ver más detalles</button>
    `;
    grid.appendChild(card);
  });
}

function verDescripcion(id) {
  window.location.href = `producto.html?id=${id}`;
}

// Renderizar sucursales
function renderSucursales() {
  const grid = document.getElementById('sucursales-grid');
  grid.innerHTML = '';

  sucursales.forEach(sucursal => {
    const card = document.createElement('div');
    card.className = 'sucursal-card'; // coincide con tu CSS
    card.innerHTML = `
      <h3>📍 ${sucursal.ciudad}</h3>
      <p>${sucursal.estado}</p>
      <p class="horario">Horario: Lunes a Viernes 9am - 7pm, Sábados 9am - 2pm</p>
    `;
    grid.appendChild(card);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  filtrarProductos('todos');
  renderSucursales();
});


