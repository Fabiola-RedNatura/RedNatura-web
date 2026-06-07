function renderProductos(filtro = 'todos') {
  const grid = document.getElementById('productos-grid');
  grid.innerHTML = '';

  const productosFiltrados = filtro === 'todos' ? productos : productos.filter(p => p.categoria === filtro);

  productosFiltrados.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'producto-card';
    card.innerHTML = `
      <img src="img/${producto.id}.png" alt="${producto.nombre}" style="width:100%; border-radius:10px; margin-bottom:10px;">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <div class="precio">$${producto.precio.toLocaleString('es-MX')}</div>
      <button class="btn-producto" onclick="verDescripcion(${producto.id})">Ver descripción</button>
    `;
    grid.appendChild(card);
  });
}

function verDescripcion(productoId) {
  window.location.href = `producto.html?id=${productoId}`;
}

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

window.addEventListener('DOMContentLoaded', () => {
  renderProductos();
  renderSucursales();
});
