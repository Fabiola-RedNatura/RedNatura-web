function renderProductos(filtro = 'todos') {
  const grid = document.getElementById('productos-grid');
  grid.innerHTML = '';

  const productosFiltrados = filtro === 'todos' ? productos : productos.filter(p => p.categoria === filtro);

  productosFiltrados.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'producto-card';

    const nombreImagen = producto.id + ".png"; // asegúrate que tus imágenes estén nombradas por id

    card.innerHTML = `
      <img src="img/${nombreImagen}" alt="${producto.nombre}" class="producto-img">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcionCorta}</p>
      <div class="precio">${producto.precio}</div>
      <button class="btn-producto" onclick="verDescripcion(${producto.id})">Ver descripción</button>
      <button class="btn-precio" onclick="verPrecio(${producto.id})">Precio</button>
    `;
    grid.appendChild(card);
  });
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

