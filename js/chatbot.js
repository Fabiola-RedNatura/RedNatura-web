let usuarioRegistrado = false;
let datosUsuario = {};
let estado = 'inicial'; // inicial, esperando_ubicacion, esperando_registro, registro_completo

function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.toggle('hidden');
    
    if (!chatbot.classList.contains('hidden')) {
        // Mensaje inicial
        if (estado === 'inicial') {
            setTimeout(() => {
                mostrarMensajeBot('¡Hola! 👋 Bienvenido a RedNatura. Soy tu asistente IA. ¿De dónde nos llamas hoy para ubicar tu sucursal más cercana?');
                estado = 'esperando_ubicacion';
            }, 500);
        }
    }
}

function handleChatInput(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const mensaje = input.value.trim();
    
    if (!mensaje) return;
    
    mostrarMensajeUsuario(mensaje);
    input.value = '';
    
    // Procesar según el estado
    setTimeout(() => {
        if (estado === 'esperando_ubicacion') {
            procesarUbicacion(mensaje);
        } else if (estado === 'esperando_registro') {
            procesarOpcion(mensaje);
        } else {
            procesarPregunta(mensaje);
        }
    }, 500);
}

function procesarUbicacion(ubicacion) {
    const sucursalMasCercana = encontrarSucursalMasCercana(ubicacion);
    
    if (sucursalMasCercana) {
        mostrarMensajeBot(`✅ Encontré tu sucursal más cercana:\n\n📍 ${sucursalMasCercana.ciudad}, ${sucursalMasCercana.estado}\n\nHorario: Lunes a Domingo 9am - 9pm\n\n¿Necesitas hacer un registro para obtener información más precisa y hacer tu compra?`);
        estado = 'esperando_registro';
    } else {
        mostrarMensajeBot('No encontré esa ubicación. ¿Podrías escribir de otra forma? Por ejemplo: "Campeche", "CDMX", "Monterrey", etc.');
    }
}

function encontrarSucursalMasCercana(ubicacion) {
    const ubicacionBaja = ubicacion.toLowerCase();
    return sucursales.find(s => 
        s.ciudad.toLowerCase().includes(ubicacionBaja) || 
        s.estado.toLowerCase().includes(ubicacionBaja)
    );
}

function procesarOpcion(respuesta) {
    const respuestaBaja = respuesta.toLowerCase();
    
    if (respuestaBaja.includes('sí') || respuestaBaja.includes('si') || respuestaBaja.includes('claro') || respuestaBaja.includes('ok')) {
        abrirModalRegistro();
    } else if (respuestaBaja.includes('no')) {
        mostrarMensajeBot('De acuerdo. Entonces, ¿hay algo más en lo que pueda ayudarte? Puedo:\n\n1️⃣ Recomendar productos\n2️⃣ Responder preguntas sobre compras\n3️⃣ Hablar sobre nuestros suplementos');
        estado = 'registro_completo';
    } else {
        mostrarMensajeBot('Por favor, responde "Sí" para registrarte o "No" para continuar.');
    }
}

function procesarPregunta(pregunta) {
    const preguntaBaja = pregunta.toLowerCase();
    let respuesta = '';
    
    if (preguntaBaja.includes('compra') || preguntaBaja.includes('cómo compro') || preguntaBaja.includes('como compro')) {
        respuesta = `📦 Cómo hacer una compra en RedNatura:\n\n1. Elige tus productos del catálogo\n2. Completa tu registro con tus datos\n3. Nos contactaremos para confirmar tu pedido\n4. Recibe tu compra en tu domicilio o retírala en sucursal\n\n¿Necesitas recomendaciones de productos?`;
    } else if (preguntaBaja.includes('recomend')) {
        respuesta = `💚 Nuestros productos más populares:\n\n🏆 TOP VENTAS:\n- PROBI GO! - $1,098 (Probióticos)\n- ZENDRA - $807 (Estrés y memoria)\n- RENAISS NF - $870 (Belleza y colágeno)\n\n¿Qué tipo de producto te interesa?\n- Digestión\n- Mental/Estrés\n- Control de peso\n- Energía\n- Belleza`;
    } else if (preguntaBaja.includes('sucursal') || preguntaBaja.includes('ubicación')) {
        respuesta = 'Tenemos sucursales en más de 30 ciudades de México. ¿De qué estado eres?';
        estado = 'esperando_ubicacion';
    } else if (preguntaBaja.includes('producto') || preguntaBaja.includes('catálogo')) {
        respuesta = `📋 Contamos con 41 suplementos en 6 categorías:\n\n1️⃣ Salud Digestiva\n2️⃣ Bienestar Mental\n3️⃣ Control de Peso\n4️⃣ Energía y Rendimiento\n5️⃣ Belleza\n6️⃣ Sistema Inmunológico\n\n¿Cuál categoría te interesa?`;
    } else if (preguntaBaja.includes('precio') || preguntaBaja.includes('costo')) {
        respuesta = '💰 Nuestros precios van desde $292 hasta $1,459 MXN.\n\n¿Hay algún producto específico que te interese?';
    } else if (preguntaBaja.includes('registro')) {
        respuesta = '📝 Para registrarte necesitamos:\n- Nombre completo\n- Número celular\n- Fecha de nacimiento\n- Lugar de nacimiento\n\n¿Quieres registrarte ahora?';
    } else {
        respuesta = `No entendí bien tu pregunta. 🤔\n\nPuedo ayudarte con:\n✅ Recomendaciones de productos\n✅ Información de compras\n✅ Ubicación de sucursales\n✅ Registro de nuevos usuarios`;
    }
    
    mostrarMensajeBot(respuesta);
}

function mostrarMensajeUsuario(mensaje) {
    const messagesDiv = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user';
    messageDiv.textContent = mensaje;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function mostrarMensajeBot(mensaje) {
    const messagesDiv = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot';
    messageDiv.textContent = mensaje;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function abrirModalRegistro() {
    const modal = document.getElementById('registro-modal');
    modal.classList.remove('hidden');
    modal.classList.add('show');
}

function cerrarRegistro() {
    const modal = document.getElementById('registro-modal');
    modal.classList.add('hidden');
    modal.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registro-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            datosUsuario = {
                nombre: document.getElementById('nombre').value,
                celular: document.getElementById('celular').value,
                fechaNacimiento: document.getElementById('fecha_nacimiento').value,
                lugarNacimiento: document.getElementById('lugar_nacimiento').value
            };
            
            usuarioRegistrado = true;
            estado = 'registro_completo';
            
            cerrarRegistro();
            form.reset();
            
            mostrarMensajeBot(`✅ ¡Registro completado exitosamente ${datosUsuario.nombre}!\n\nTe hemos registrado en RedNatura. Un representante se contactará con tu número ${datosUsuario.celular} para confirmar tu compra.\n\n¿Hay algo más en lo que pueda ayudarte?`);
        });
    }
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    const modal = document.getElementById('registro-modal');
    if (e.target === modal) {
        cerrarRegistro();
    }
});