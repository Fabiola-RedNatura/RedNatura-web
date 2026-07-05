// Maneja el envío del formulario de registro dentro del modal de producto
function enviarFormulario(e){
  e.preventDefault();
  const form = e.target || document.getElementById('registro-form');

  // recolectar datos
  const nombre = form.nombre.value.trim();
  const apellidos = form.apellidos.value.trim();
  const telefono = form.telefono.value.trim();
  const email = form.email.value.trim();
  const lugar = form.lugar.value.trim();
  const fecha = form.fecha.value;
  const tipo = form.tipo.value;
  const mensaje = form.mensaje.value.trim();

  if(!nombre || !apellidos || !telefono || !email || !lugar || !fecha){
    alert('Por favor completa todos los campos obligatorios.');
    return false;
  }

  // abrir whatsapp con el mensaje preformateado
  const waNum = '52' + '5555070734';
  const waText = encodeURIComponent(`Nuevo registro:\nNombre: ${nombre} ${apellidos}\nTel: ${telefono}\nEmail: ${email}\nLugar de nacimiento: ${lugar}\nFecha de nacimiento: ${fecha}\nInterés: ${tipo}\nMensaje: ${mensaje}`);
  const waUrl = `https://wa.me/${waNum}?text=${waText}`;
  window.open(waUrl, '_blank');

  // Enviar a Formsubmit (si quieres conservar copia por email)
  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('apellidos', apellidos);
  formData.append('telefono', telefono);
  formData.append('email', email);
  formData.append('lugar', lugar);
  formData.append('fecha', fecha);
  formData.append('tipo', tipo);
  formData.append('mensaje', mensaje);
  formData.append('_captcha', 'false');
  formData.append('_subject', 'Nuevo registro RedNatura');
  formData.append('_next', window.location.origin + '/contacto.html?success=1');

  fetch('https://formsubmit.co/ajax/fabiola250204@gmail.com', {
    method: 'POST',
    body: formData
  }).then(res => res.json()).then(data => {
    // mostrar confirmación
    const cont = document.getElementById('mensaje-confirmacion');
    cont.innerHTML = '<div style="padding:12px;background:#ecfdf5;border-radius:8px;margin-top:12px;color:#064e3b;">Registro enviado. Te contactaremos pronto.</div>';
    // cerrar modal
    setTimeout(() => { cerrarRegistro(); }, 1500);
  }).catch(err => {
    alert('Ocurrió un error al enviar. Intenta de nuevo.');
  });

  return false;
}

function abrirRegistroCon(tipo){
  const modal = document.getElementById('registro-modal');
  const inputTipo = document.getElementById('tipo');
  inputTipo.value = tipo || '';
  modal.classList.remove('hidden');
  modal.classList.add('show');
}

function cerrarRegistro(){
  const modal = document.getElementById('registro-modal');
  modal.classList.add('hidden');
  modal.classList.remove('show');
}
