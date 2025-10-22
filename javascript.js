// Filtrado simple por turno para la tabla TSU
document.addEventListener('DOMContentLoaded', function(){
  const btnMat = document.getElementById('btn-mat');
  const btnVes = document.getElementById('btn-ves');
  const btnAll = document.getElementById('btn-all');
  const filas = Array.from(document.querySelectorAll('#tabla-tsu tbody tr'));
  const downloadBtn = document.getElementById('download-horario');

  function mostrarTurno(turno){
    filas.forEach(row => {
      if (turno === 'all') {
        row.style.display = '';
      } else {
        row.dataset.turno === turno ? row.style.display = '' : row.style.display = 'none';
      }
    });
  }

  btnMat.addEventListener('click', ()=> mostrarTurno('mat'));
  btnVes.addEventListener('click', ()=> mostrarTurno('ves'));
  btnAll.addEventListener('click', ()=> mostrarTurno('all'));

  // Descargar imagen del horario
  downloadBtn.addEventListener('click', function(e){
    const img = document.getElementById('img-horario');
    const src = img.getAttribute('src');
    if(!src){
      e.preventDefault();
      alert('No se encontró la imagen del horario. Asegúrate de subir "horario.jpg" junto a estos archivos o cambia el src.');
      return;
    }
    downloadBtn.setAttribute('href', src);
  });

  // Desplazamiento suave entre secciones
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(ev){
      ev.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  });
});