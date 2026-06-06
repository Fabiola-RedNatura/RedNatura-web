let usuarioRegistrado = false;
let datosUsuario = {};
let estado = 'inicial';
let sucursalActual = null;

function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.toggle('hidden');
    
    if (!chatbot.classList.contains('hidden')) {
        if (estado === 'inicial') {
            setTimeout(() => {
                mostrarMensajeBot('¡Hola! 👋 Bienvenido a RedNatura. Soy tu asistente IA.\n\n¿De dónde nos llamas hoy para ubicar tu sucursal más cercana?\n(Ej: Campeche, Estado de México, Veracruz, CDMX, etc.)');
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
        sucursalActual = sucursalMasCercana;
        mostrarMensajeBot(`✅ Encontré tu sucursal más cercana:\n\n📍 ${sucursalMasCercana.ciudad}, ${sucursalMasCercana.estado}\nRegión: ${sucursalMasCercana.region}\n\nHorario: Lunes a Domingo 9:00 AM - 9:00 PM\n\n¿Quieres registrarte para obtener más información y hacer tu compra?`);
        estado = 'esperando_registro';
    } else {
        mostrarMensajeBot('No encontré esa ubicación. ¿Podrías escribir de otra forma?\nEjemplos válidos: Campeche, CDMX, Monterrey, Estado de México, Veracruz, Quintana Roo');
    }
}

function encontrarSucursalMasCercana(ubicacion) {
    const ubicacionBaja = ubicacion.toLowerCase().trim();
    return sucursales.find(s => 
        s.ciudad.toLowerCase().includes(ubicacionBaja) || 
        s.estado.toLowerCase().includes(ubicacionBaja)
    );
}

function procesarOpcion(respuesta) {
    const r = respuesta.toLowerCase();
    if (r.includes('sí') || r.includes('si') || r.includes('ok') || r.includes('yes')) {
        abrirModalRegistro();
    } else if (r.includes('no')) {
        mostrarMensajeBot('De acuerdo. Puedo ayudarte con:\n1️⃣ Recomendar productos\n2️⃣ Responder preguntas de compras\n3️⃣ Mostrar catálogo\n4️⃣ Ubicar sucursales');
        estado = 'registro_completo';
    } else {
        mostrarMensajeBot('Por favor, responde "Sí" para registrarte o "No" para continuar.');
    }
}

function procesarPregunta(pregunta) {
    const p = pregunta.toLowerCase();
    let respuesta = '';

    if (p.includes('producto') || p.includes('catálogo')) {
        respuesta = "📋 Tenemos más de 40 suplementos en categorías como Digestión, Peso, Energía, Belleza, Inmunidad.\n\n¿Quieres ver alguna categoría?";
    } else if (p.includes('precio') || p.includes('costo')) {
        respuesta = "💰 Nuestros precios van desde $292 hasta $1,459 MXN.\n¿Quieres que te muestre los productos por rango de precio?";
    } else if (p.includes('digestión') || p.includes('estómago')) {
        mostrarProductosPorCategoria("Salud Digestiva");
        return;
    } else if (p.includes('estrés') || p.includes('memoria') || p.includes('concentración')) {
        mostrarProductosPorCategoria("Bienestar Mental");
        return;
    } else if (p.includes('peso') || p.includes('adelgazar')) {
        mostrarProductosPorCategoria("Control de Peso");
        return;
    } else if (p.includes('energía') || p.includes('cansancio')) {
        mostrarProductosPorCategoria("Energía y Rendimiento");
        return;
    } else if (p.includes('piel') || p.includes('belleza')) {
        mostrarProductosPorCategoria("Belleza");
        return;
    } else if (p.includes('inmunidad') || p.includes('defensas')) {
        mostrarProductosPorCategoria("Sistema Inmunológico");
        return;
    } else {
        respuesta = `No entendí bien tu pregunta. 🤔\n\nPuedes escribirme directamente por WhatsApp aquí: https://wa.me/525555070734`;
    }

    mostrarMensajeBot(respuesta);
}

function mostrarProductosPorCategoria(categoria) {
    const filtrados = productos.filter(p => p.categoria.toLowerCase().includes(categoria.toLowerCase()));
    if (filtrados.length === 0) {
        mostrarMensajeBot("No encontré productos en esa categoría.");
        return;
    }
    mostrarMensajeBot(`📦 Productos en categoría ${categoria}:`);
    filtrados.forEach(prod => {
        mostrarMensajeBot(`${prod.nombre} (${prod.precio})`, [
            { texto: "Ver Beneficios", accion: () => mostrarMensajeBot("✨ Beneficios:\n- " + prod.beneficios.join("\n- ")) },
            { texto: "Ver Ingredientes", accion: () => mostrarMensajeBot("🧪 Ingredientes:\n- " + prod.ingredientes.join("\n- ")) },
            { texto: "Modo de uso", accion: () => mostrarMensajeBot("📖 Modo de uso:\n" + prod.modoUso) }
        ]);
    });
}

function mostrarMensajeUsuario(mensaje) {
    const messagesDiv = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user';
    messageDiv.textContent = mensaje;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function mostrarMensajeBot(mensaje, opciones=[]) {
    const messagesDiv = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot';
    messageDiv.textContent = mensaje;

    if (opciones.length > 0) {
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'options';
        opciones.forEach(opcion => {
            const btn = document.createElement('button');
            btn.textContent = opcion.texto;
            btn.onclick = opcion.accion;
            buttonsDiv.appendChild(btn);
        });
        messageDiv.appendChild(buttonsDiv);
    }

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
                lugarNacimiento: document.getElementById('lugar_nacimiento').value,
                sucursal: sucursalActual ? `${sucursalActual.ciudad}, ${sucursalActual.estado}` : 'No especificada',
                fechaRegistro: new Date().toLocaleString('es-MX')
            };
            enviarEmailRegistro(datosUsuario);
            enviarWhatsAppRegistro(datosUsuario);
            usuarioRegistrado = true;
            estado = 'registro_completo';
            cerrarRegistro();
            form.reset();
            mostrarMensajeBot(`✅ ¡Registro completado exitosamente ${datosUsuario.nombre}!\n\n📧 Confirmación enviada a tu correo.\n📱 Nos contactaremos al ${datosUsuario.celular} para confirmar tu compra.`);
        });
    }
});

function enviarEmailRegistro(datos) {
    const formData = new FormData();
    formData.append('email', 'fabiola250204@gmail.com');
    formData.append('subject', `Nuevo Registro - ${datos.nombre}`);
    formData.append('message', `NUEVO REGISTRO  EN REDNATURA\n
    Nombre Completo: ${datos.nombre}
Número Celular: ${datos.celular}
Fecha de Nacimiento: ${datos.fechaNacimiento}
Lugar de Nacimiento: ${datos.lugarNacimiento}
Sucursal Interesada: ${datos.sucursal}
Fecha y Hora de Registro: ${datos.fechaRegistro}`);

    fetch('https://formsubmit.co/fabiola250204@gmail.com', {
        method: 'POST',
        body: formData
    }).then(response => {
        console.log('Email enviado correctamente');
    }).catch(error => {
        console.log('Error al enviar email, guardando en localStorage:', error);
        let registros = JSON.parse(localStorage.getItem('registros_rednatura')) || [];
        registros.push(datos);
        localStorage.setItem('registros_rednatura', JSON.stringify(registros));
    });
}

function enviarWhatsAppRegistro(datos) {
    const numeroCliente = datos.celular.replace(/\D/g, ''); // limpia caracteres no numéricos
    const mensaje = encodeURIComponent(`Hola ${datos.nombre}, gracias por registrarte en RedNatura. Tu sucursal es: ${datos.sucursal}. Nos pondremos en contacto contigo para tu compra.`);
    const url = `https://wa.me/52${numeroCliente}?text=${mensaje}`;
    window.open(url, '_blank'); // abre WhatsApp en nueva pestaña
}
