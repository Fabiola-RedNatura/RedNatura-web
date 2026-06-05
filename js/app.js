// Datos de productos
const productos = [
    // Salud Digestiva
    { id: 1, nombre: 'PROBI GO!', precio: 1098, categoria: 'digestiva', emoji: '🦠', descripcion: 'Prebióticos, probióticos y postbióticos. 30 stickpacks de 2g c/u' },
    { id: 2, nombre: 'FEMBALAZ', precio: 900, categoria: 'digestiva', emoji: '👩', descripcion: 'Salud femenina, urinaria e intestinal. 60 cápsulas de 500mg' },
    { id: 3, nombre: 'OXIALOE NF', precio: 802, categoria: 'digestiva', emoji: '🌵', descripcion: 'Sábila y plantas medicinales. 1 litro' },
    { id: 4, nombre: 'VENTRE TEA', precio: 292, categoria: 'digestiva', emoji: '☕', descripcion: 'Té verde, rojo y blanco. 30 sobres de 2g' },
    { id: 5, nombre: 'DIALEGRI NF', precio: 555, categoria: 'digestiva', emoji: '💚', descripcion: 'Bienestar digestivo y gastrointestinal. 60 cápsulas de 650mg' },
    { id: 6, nombre: 'DESMODIM', precio: 752, categoria: 'digestiva', emoji: '🫀', descripcion: 'Salud hepática y desintoxicación. 60 cápsulas de 500mg' },
    
    // Bienestar Mental
    { id: 7, nombre: 'ZENDRA', precio: 807, categoria: 'mental', emoji: '🧠', descripcion: 'Ashwagandha, Melena de León y Bacopa. 60 cápsulas de 750mg' },
    { id: 8, nombre: 'SERENTRA', precio: 619, categoria: 'mental', emoji: '😌', descripcion: 'Relajación y sueño reparador. 60 cápsulas de 500mg' },
    
    // Control de Peso
    { id: 9, nombre: 'LEVIUS', precio: 516, categoria: 'peso', emoji: '⚖️', descripcion: 'Control de peso y metabolismo. 30 cápsulas de 600mg' },
    { id: 10, nombre: 'LEVIUS NIGHT', precio: 593, categoria: 'peso', emoji: '🌙', descripcion: 'Apoyo nocturno para control de peso. 30 cápsulas de 500mg' },
    { id: 11, nombre: 'Gummys RedNatura', precio: 697, categoria: 'peso', emoji: '🍬', descripcion: 'Gomitas para control de peso. Frasco con 60 gomitas' },
    { id: 12, nombre: 'DIVANT NF', precio: 656, categoria: 'peso', emoji: '🥗', descripcion: 'Control de glucosa. 60 cápsulas de 500mg' },
    
    // Energía
    { id: 13, nombre: 'BLUNNER NF', precio: 625, categoria: 'energia', emoji: '⚡', descripcion: 'Energía y rendimiento físico. 20 sobres de 4.3g' },
    { id: 14, nombre: 'MUSH KAFFI', precio: 805.50, categoria: 'energia', emoji: '☕', descripcion: 'Café con hongos funcionales. 225g' },
    { id: 15, nombre: 'RED KAFFI', precio: 934, categoria: 'energia', emoji: '🔥', descripcion: 'Café con MCT y CLA. 15 sticks de 4.5g' },
    { id: 16, nombre: 'KAVARNA', precio: 717, categoria: 'energia', emoji: '🌾', descripcion: 'Café con Ganoderma Tsugae. 90g' },
    { id: 17, nombre: 'KAFICHAI', precio: 769, categoria: 'energia', emoji: '🍂', descripcion: 'Bebida chai funcional. 400g' },
    { id: 18, nombre: 'PRO SHAKE', precio: 983, categoria: 'energia', emoji: '💪', descripcion: 'Proteína de suero de leche. 500g' },
    { id: 19, nombre: 'CLOORI', precio: 560, categoria: 'energia', emoji: '🫒', descripcion: 'Clorofila y antioxidantes. 500ml' },
    { id: 20, nombre: 'KOLEM NF', precio: 697, categoria: 'energia', emoji: '✨', descripcion: 'Energía celular e inmunidad. 30 cápsulas de 650mg' },
    
    // Belleza
    { id: 21, nombre: 'RENAISS NF', precio: 870, categoria: 'belleza', emoji: '💎', descripcion: 'Colágeno hidrolizado y ácido hialurónico. 15 sobres' },
    { id: 22, nombre: 'RENAISS CREAM', precio: 661, categoria: 'belleza', emoji: '💄', descripcion: 'Crema facial con FPS 50+. 50ml' },
    { id: 23, nombre: 'RENAISS SERUM', precio: 717.50, categoria: 'belleza', emoji: '✨', descripcion: 'Suero facial regenerador. 30ml' },
    { id: 24, nombre: 'GELTYVIT GUMMYS', precio: 730, categoria: 'belleza', emoji: '🍓', descripcion: 'Multivitamínico familiar. 60 gomitas' },
    
    // Otros (Sistema Inmunológico)
    { id: 25, nombre: 'ANT1-VR', precio: 450, categoria: 'sistema-inmunologico', emoji: '🛡️', descripcion: 'Sistema inmunológico y defensas. 30 tabletas' },
    { id: 26, nombre: 'EUCABEE NF', precio: 581, categoria: 'sistema-inmunologico', emoji: '🌿', descripcion: 'Salud respiratoria. 500ml' },
    { id: 27, nombre: 'RESVIV NF', precio: 896.50, categoria: 'sistema-inmunologico', emoji: '🍇', descripcion: 'Antioxidantes y bienestar. 620ml' },
    { id: 28, nombre: 'RESVIV STICK PACK', precio: 893, categoria: 'sistema-inmunologico', emoji: '📦', descripcion: 'Antioxidantes en polvo. 15 sobres' },
    { id: 29, nombre: 'KRONNOS+', precio: 1459, categoria: 'sistema-inmunologico', emoji: '⭐', descripcion: 'Activador de NAD+ y longevidad. 60 cápsulas' },
    { id: 30, nombre: 'LEVENÉ NF', precio: 613, categoria: 'sistema-inmunologico', emoji: '❤️', descripcion: 'Circulación sanguínea saludable. 30 cápsulas' },
    { id: 31, nombre: 'EPAX NF', precio: 720, categoria: 'sistema-inmunologico', emoji: '🐟', descripcion: 'Omega 3, 7 y Vitamina D3. 30 cápsulas' },
    { id: 32, nombre: 'FLUBI', precio: 458, categoria: 'sistema-inmunologico', emoji: '💧', descripcion: 'Salud urinaria y renal. 30 cápsulas' },
    { id: 33, nombre: 'NORANTRIX', precio: 480, categoria: 'sistema-inmunologico', emoji: '🌾', descripcion: 'Té herbolario para glucosa. 36 sobres' },
    { id: 34, nombre: 'BLEX', precio: 565, categoria: 'sistema-inmunologico', emoji: '🦴', descripcion: 'Salud articular y ósea. 60 cápsulas' },
    { id: 35, nombre: 'UC-II NF', precio: 994.50, categoria: 'sistema-inmunologico', emoji: '🧬', descripcion: 'Colágeno tipo II y Boswellia. 60 cápsulas' },
    { id: 36, nombre: 'SENZADOL CREMA', precio: 433, categoria: 'sistema-inmunologico', emoji: '💆', descripcion: 'Crema para músculos y articulaciones. 75g' },
    { id: 37, nombre: 'FLUSSORIN NF', precio: 808, categoria: 'sistema-inmunologico', emoji: '🌱', descripcion: 'Salud prostática y urinaria. 60 cápsulas' },
    { id: 38, nombre: 'PLENNA NF', precio: 651, categoria: 'sistema-inmunologico', emoji: '🌸', descripcion: 'Equilibrio hormonal femenino. 30 cápsulas' },
    { id: 39, nombre: 'FEMICOL', precio: 313, categoria: 'sistema-inmunologico', emoji: '🌹', descripcion: 'Infusión para bienestar femenino. 30 sobres' },
    { id: 40, nombre: '4 KIDDY\'S GUMMYS', precio: 728, categoria: 'sistema-inmunologico', emoji: '👶', descripcion: 'Multivitamínico infantil. 60 gomitas' },
    { id: 41, nombre: '4 KIDDY\'S NF', precio: 494, categoria: 'sistema-inmunologico', emoji: '🍼', descripcion: 'Nutrición infantil líquida. 500ml' }
];

// Datos de sucursales
const sucursales = [
    { ciudad: 'Campeche', estado: 'Campeche' },
    { ciudad: 'Cancún', estado: 'Quintana Roo' },
    { ciudad: 'Cárdenas', estado: 'Tabasco' },
    { ciudad: 'Ciudad Juárez', estado: 'Chihuahua' },
    { ciudad: 'Ciudad Obregón', estado: 'Sonora' },
    { ciudad: 'Ciudad Nezahualcóyotl', estado: 'Estado de México' },
    { ciudad: 'Coatzacoalcos', estado: 'Veracruz' },
    { ciudad: 'Comalcalco', estado: 'Tabasco' },
    { ciudad: 'Comitán', estado: 'Chiapas' },
    { ciudad: 'Córdoba', estado: 'Veracruz' },
    { ciudad: 'Coyoacán', estado: 'CDMX' },
    { ciudad: 'Culiacán', estado: 'Sinaloa' },
    { ciudad: 'Ecatepec', estado: 'Estado de México' },
    { ciudad: 'Irapuato', estado: 'Guanajuato' },
    { ciudad: 'Los Mochis', estado: 'Sinaloa' },
    { ciudad: 'Mazatlán', estado: 'Sinaloa' },
    { ciudad: 'Mérida', estado: 'Yucatán' },
    { ciudad: 'Mexicali', estado: 'Baja California' },
    { ciudad: 'Mixquiahuala', estado: 'Hidalgo' },
    { ciudad: 'Monterrey', estado: 'Nuevo León' },
    { ciudad: 'Morelia', estado: 'Michoacán' },
    { ciudad: 'Oaxaca', estado: 'Oaxaca' },
    { ciudad: 'Pachuca', estado: 'Hidalgo' },
    { ciudad: 'Puebla', estado: 'Puebla' },
    { ciudad: 'Puerto Vallarta', estado: 'Jalisco' },
    { ciudad: 'Querétaro', estado: 'Querétaro' },
    { ciudad: 'Reynosa', estado: 'Tamaulipas' },
    { ciudad: 'San Cristóbal de las Casas', estado: 'Chiapas' },
    { ciudad: 'San Luis Potosí', estado: 'San Luis Potosí' },
    { ciudad: 'Tacámbaro', estado: 'Michoacán' },
    { ciudad: 'Tampico', estado: 'Tamaulipas' },
    { ciudad: 'Tapachula', estado: 'Chiapas' },
    { ciudad: 'Tuzitlán', estado: 'Puebla' }
];

// Renderizar productos
function renderProductos(filtro = 'todos') {
    const grid = document.getElementById('productos-grid');
    grid.innerHTML = '';
    
    const productosFiltrados = filtro === 'todos' ? productos : productos.filter(p => p.categoria === filtro);
    
    productosFiltrados.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <div class="emoji">${producto.emoji}</div>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <div class="precio">$${producto.precio.toLocaleString('es-MX')}</div>
            <button class="btn-producto" onclick="agregarAlCarrito(${producto.id})">Ver Detalles</button>
        `;
        grid.appendChild(card);
    });
}

function filtrarProductos(filtro) {
    // Actualizar botones activos
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
    });
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
            <p style="font-size: 0.85rem; margin-top: 0.5rem; color: #999;">Horario: Lunes a Domingo 9am - 9pm</p>
        `;
        grid.appendChild(card);
    });
}

function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    alert(`${producto.nombre} - $${producto.precio.toLocaleString('es-MX')}\n\nHabla con nuestro asistente IA para más información o hacer tu compra.`);
    toggleChat();
}

// Inicializar
window.addEventListener('DOMContentLoaded', () => {
    renderProductos();
    renderSucursales();
});