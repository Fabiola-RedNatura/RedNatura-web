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
                mostrarMensajeBot('¡Hola! 👋 Bienvenido a RedNatura. Soy tu asistente IA. ¿De dónde nos llamas hoy para ubicar tu sucursal más cercana?\n\n(Ej: Campeche, Estado de México, Veracruz, CDMX, etc.)');
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
        mostrarMensajeBot(`✅ Encontré tu sucursal más cercana:\n\n📍 ${sucursalMasCercana.ciudad}, ${sucursalMasCercana.estado}\nRegión: ${sucursalMasCercana.region}\n\nHorario: Lunes a Domingo 9:00 AM - 9:00 PM\n\n¿Necesitas hacer un registro para obtener información más precisa y hacer tu compra?`);
        estado = 'esperando_registro';
    } else {
        mostrarMensajeBot('No encontré esa ubicación. ¿Podrías escribir de otra forma?\n\nEjemplos válidos:\n- Campeche\n- CDMX\n- Monterrey\n- Estado de México\n- Veracruz\n- Quintana Roo');
    }
}

function encontrarSucursalMasCercana(ubicacion) {
    const ubicacionBaja = ubicacion.toLowerCase().trim();
    
    return sucursales.find(s => 
        s.ciudad.toLowerCase().includes(ubicacionBaja) || 
        s.estado.toLowerCase().includes(ubicacionBaja) ||
        s.estado.toLowerCase() === ubicacionBaja
    );
}

function procesarOpcion(respuesta) {
    const respuestaBaja = respuesta.toLowerCase();
    
    if (respuestaBaja.includes('sí') || respuestaBaja.includes('si') || respuestaBaja.includes('claro') || respuestaBaja.includes('ok') || respuestaBaja.includes('yes')) {
        abrirModalRegistro();
    } else if (respuestaBaja.includes('no')) {
        mostrarMensajeBot('De acuerdo. Entonces, ¿hay algo más en lo que pueda ayudarte? Puedo:\n\n1️⃣ Recomendar productos personalizados\n2️⃣ Responder preguntas sobre compras\n3️⃣ Hablar sobre nuestros suplementos\n4️⃣ Dar más info de ubicaciones');
        estado = 'registro_completo';
    } else {
        mostrarMensajeBot('Por favor, responde "Sí" para registrarte o "No" para continuar.');
    }
}

function procesarPregunta(pregunta) {
    const preguntaBaja = pregunta.toLowerCase();
    let respuesta = '';
    
    if (preguntaBaja.includes('compra') || preguntaBaja.includes('cómo compro') || preguntaBaja.includes('como compro') || preguntaBaja.includes('cómo hacer una compra')) {
        respuesta = `📦 Cómo hacer una compra en RedNatura:\n\n1️⃣ Elige tus productos del catálogo\n2️⃣ Completa tu registro con tus datos\n3️⃣ Nos contactaremos para confirmar tu pedido\n4️⃣ Recibe tu compra en tu domicilio o retírala en sucursal\n\n¿Deseas registrarte ahora?`;
        estado = 'esperando_registro';
    } else if (preguntaBaja.includes('recomend') || preguntaBaja.includes('qué me recomiendas') || preguntaBaja.includes('que me recomiendas')) {
        respuesta = generarRecomendaciones(pregunta);
    } else if (preguntaBaja.includes('sucursal') || preguntaBaja.includes('ubicación') || preguntaBaja.includes('dónde') || preguntaBaja.includes('donde')) {
        respuesta = 'Tenemos sucursales en más de 30 ciudades en todas las regiones de México.\n\n¿De qué estado o ciudad eres? Te mostraré la más cercana.';
        estado = 'esperando_ubicacion';
    } else if (preguntaBaja.includes('producto') || preguntaBaja.includes('catálogo')) {
        respuesta = `📋 Contamos con 41 suplementos en 6 categorías:\n\n1️⃣ Salud Digestiva (6 productos)\n2️⃣ Bienestar Mental (2 productos)\n3️⃣ Control de Peso (4 productos)\n4️⃣ Energía y Rendimiento (8 productos)\n5️⃣ Belleza (4 productos)\n6️⃣ Sistema Inmunológico (17 productos)\n\n¿Cuál categoría te interesa?`;
    } else if (preguntaBaja.includes('precio') || preguntaBaja.includes('costo') || preguntaBaja.includes('cuánto')) {
        respuesta = '💰 Nuestros precios van desde $292 hasta $1,459 MXN.\n\n- Rango asequible: $292 - $500 MXN\n- Rango medio: $500 - $800 MXN\n- Premium: $800 - $1,459 MXN\n\n¿Hay algún producto específico que te interese?';
    } else if (preguntaBaja.includes('registro')) {
        respuesta = '📝 Para registrarte necesitamos:\n✓ Nombre completo\n✓ Número celular\n✓ Fecha de nacimiento\n✓ Lugar de nacimiento\n\n¿Quieres registrarte ahora?';
    } else if (preguntaBaja.includes('digestión') || preguntaBaja.includes('digestion') || preguntaBaja.includes('estómago')) {
        respuesta = `💚 Para Salud Digestiva recomendamos:\n\n🏆 TOP RECOMENDADOS:\n- PROBI GO! ($1,098) - Prebióticos y probióticos\n- OXIALOE NF ($802) - Sábila y plantas medicinales\n- VENTRE TEA ($292) - Té para tránsito intestinal\n\n¿Te interesa alguno?`;
    } else if (preguntaBaja.includes('estrés') || preguntaBaja.includes('estres') || preguntaBaja.includes('ansiedad') || preguntaBaja.includes('memoria') || preguntaBaja.includes('concentración')) {
        respuesta = `🧠 Para Bienestar Mental recomendamos:\n\n- ZENDRA ($807) - Ashwagandha y Melena de León\n- SERENTRA ($619) - Relajación y sueño\n\nAmbos son excelentes para reducir estrés y mejorar concentración.\n\n¿Deseas conocer más?`;
    } else if (preguntaBaja.includes('peso') || preguntaBaja.includes('adelgazar') || preguntaBaja.includes('dieta') || preguntaBaja.includes('metabolismo')) {
        respuesta = `⚖️ Para Control de Peso recomendamos:\n\n- LEVIUS ($516) - Control diurno\n- LEVIUS NIGHT ($593) - Apoyo nocturno\n- Gummys RedNatura ($697) - Gomitas prácticas\n\n¿Cuál te interesa?`;
    } else if (preguntaBaja.includes('energía') || preguntaBaja.includes('energia') || preguntaBaja.includes('cansancio')) {
        respuesta = `⚡ Para Energía y Rendimiento recomendamos:\n\n- BLUNNER NF ($625) - Energía general\n- MUSH KAFFI ($805.50) - Café con hongos\n- PRO SHAKE ($983) - Proteína muscular\n\n¿Cuál necesitas?`;
    } else if (preguntaBaja.includes('piel') || preguntaBaja.includes('belleza') || preguntaBaja.includes('cabello') || preguntaBaja.includes('arrugas')) {
        respuesta = `💎 Para Belleza recomendamos:\n\n- RENAISS NF ($870) - Colágeno hidrolizado\n- RENAISS SERUM ($717.50) - Suero facial\n- RENAISS CREAM ($661) - Crema con FPS 50+\n\n¡Perfectos para una piel radiante!`;
    } else {
        respuesta = `No entendí bien tu pregunta. 🤔\n\nPuedo ayudarte con:\n✅ Recomendaciones de productos\n✅ Información de compras\n✅ Ubicación de sucursales\n✅ Consultas sobre categorías\n✅ Precios e información\n\n¿Qué necesitas?`;
    }
    
    mostrarMensajeBot(respuesta);
}

function generarRecomendaciones(pregunta) {
    const preguntaBaja = pregunta.toLowerCase();
    
    if (preguntaBaja.includes('mujer') || preguntaBaja.includes('femenino')) {
        return `👩 Recomendaciones para mujeres:\n\n- FEMBALAZ ($900) - Salud urinaria e intestinal\n- PLENNA NF ($651) - Equilibrio hormonal\n- RENAISS NF ($870) - Belleza y colágeno\n- SERENTRA ($619) - Estrés y sueño\n\n¿Te interesa alguno?`;
    } else if (preguntaBaja.includes('hombre') || preguntaBaja.includes('masculino')) {
        return `👨 Recomendaciones para hombres:\n\n- FLUSSORIN NF ($808) - Salud prostática\n- EPAX NF ($720) - Omega 3 y circulación\n- BLUNNER NF ($625) - Energía y rendimiento\n- BLEX ($565) - Salud articular\n\n¿Te interesa alguno?`;
    } else if (preguntaBaja.includes('niño') || preguntaBaja.includes('infantil') || preguntaBaja.includes('niña')) {
        return `👶 Para los niños recomendamos:\n\n- 4 KIDDY'S GUMMYS ($728) - Multivitamínico\n- 4 KIDDY'S NF ($494) - Nutrición infantil\n\nAmbos con vitaminas y minerales esenciales para el crecimiento.\n\n¿Deseas más info?`;
    } else if (preguntaBaja.includes('deportista') || preguntaBaja.includes('músculo') || preguntaBaja.includes('deporte') || preguntaBaja.includes('fitness')) {
        return `💪 Para Deportistas recomendamos:\n\n- PRO SHAKE ($983) - Proteína para músculos\n- BLUNNER NF ($625) - Energía y rendimiento\n- BLEX ($565) - Salud articular\n- SENZADOL CREMA ($433) - Recuperación muscular\n\n¿Cuál necesitas?`;
    } else if (preguntaBaja.includes('edad') || preguntaBaja.includes('mayor') || preguntaBaja.includes('adulto')) {
        return `👴 Para Adultos Mayores recomendamos:\n\n- UC-II NF ($994.50) - Articulaciones\n- EPAX NF ($720) - Circulación y corazón\n- LEVENÉ NF ($613) - Circulación\n- BLEX ($565) - Huesos y articulaciones\n\n¿Te interesa alguno?`;
    } else {
        return `💚 TOP RECOMENDADOS GENERAL:\n\n🏆 MÁS VENDIDOS:\n- PROBI GO! ($1,098) - Sistema digestivo\n- ZENDRA ($807) - Estrés y memoria\n- RENAISS NF ($870) - Belleza\n\n¿Hay algo específico que necesites?`;
    }
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
                lugarNacimiento: document.getElementById('lugar_nacimiento').value,
                sucursal: sucursalActual ? `${sucursalActual.ciudad}, ${sucursalActual.estado}` : 'No especificada',
                fechaRegistro: new Date().toLocaleString('es-MX')
            };
            
            enviarEmailRegistro(datosUsuario);
            
            usuarioRegistrado = true;
            estado = 'registro_completo';
            
            cerrarRegistro();
            form.reset();
            
            mostrarMensajeBot(`✅ ¡Registro completado exitosamente ${datosUsuario.nombre}!\\n\\n📧 Confirmación enviada a: fabiola250204@gmail.com\\n\n📱 Nos contactaremos al ${datosUsuario.celular} para confirmar tu compra.\\n\n¿Hay algo más en lo que pueda ayudarte?`);
        });
    }
});

function enviarEmailRegistro(datos) {
    const formData = new FormData();
    formData.append('email', 'fabiola250204@gmail.com');
    formData.append('subject', `Nuevo Registro - ${datos.nombre}`);
    formData.append('message', `NUEVO REGISTRO EN REDNATURA\n    \n    Nombre Completo: ${datos.nombre}\n    Número Celular: ${datos.celular}\n    Fecha de Nacimiento: ${datos.fechaNacimiento}\n    Lugar de Nacimiento: ${datos.lugarNacimiento}\n    Sucursal Interesada: ${datos.sucursal}\n    Fecha y Hora de Registro: ${datos.fechaRegistro}`);
    
    fetch('https://formsubmit.co/fabiola250204@gmail.com', {
        method: 'POST',
        body: formData
    }).then(response => {
        console.log('Email enviado correctamente');
    }).catch(error => {
        console.log('Respaldo en localStorage:', error);
        let registros = JSON.parse(localStorage.getItem('registros_rednatura')) || [];
        registros.push(datos);
        localStorage.setItem('registros_rednatura', JSON.stringify(registros));
    });
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('registro-modal');
    if (e.target === modal) {
        cerrarRegistro();
    }
});