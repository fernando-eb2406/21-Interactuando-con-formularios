const qs = (element) => document.querySelector(element);

window.onload = function () {
  //JavaScript del Index
  let container = qs('.container');
  let subtitulo = qs('.subtitulo');
  let destacado = qsAll('p');
  let fondo = qs('body');
  let enlace = qs('a');

  subtitulo.innerHTML += 'INVITADO';

  subtitulo.style.textTransform = 'uppercase';

  fondo.classList.add('fondo');
  enlace.style.color = '#E51B3E';

  for (let i = 0; i < destacado.length; i++) {
    if (i % 2 == 0) {
      destacado[i].classList.add('destacadoPar');
    } else {
      destacado[i].classList.add('destacadoImpar');
    }
  }

  container.style.display = 'block';
};
