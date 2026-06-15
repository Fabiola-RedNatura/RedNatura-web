// Renderizar productos
function renderProductos(filtro = 'todos') {
  const grid = document.getElementById('productos-grid');
  grid.innerHTML = '';

  const productosFiltrados = filtro === 'todos' ? productos : productos.filter(p => p.categoria === filtro);

  productosFiltrados.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'producto-card';

    // Usar id para las imágenes
    const nombreImagen = producto.id + ".png";

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

// Redirigir a la página de detalle
function verDescripcion(productoId) {
  window.location.href = `producto.html?id=${productoId}`;
}

// Mostrar precio y activar flujo de compra
function verPrecio(productoId) {
  const producto = productos.find(p => p.id === productoId);
  productoSeleccionado = producto;
  alert(`💲 Precio de ${producto.nombre}: ${producto.precio}\n\n¿Quieres comprar este producto? Escribe "comprar" en el chat.`);
}

// Filtrar productos desde botones
function filtrarProductos(filtro, boton=null) {
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (boton) boton.classList.add('active');

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

// Inicializar
window.addEventListener('DOMContentLoaded', () => {
  renderProductos();
  renderSucursales();
});
