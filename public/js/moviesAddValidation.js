const qs = (element) => document.querySelector(element);

window.onload = function () {
  let titulo = qs('.moviesAddTitulo');
  let formulario = qs('#formulario');
  let article = qs('article');
  titulo.innerHTML = 'AGREGAR PELÍCULA';
  titulo.classList.add('titulo');
  article.classList.add('fondoTransparente');
  formulario.classList.add('fondoCRUD');

  //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
  //-------------------DE REGISTRO DE PELÍCULAS------------------//

  let form = qs('form');
  let inputtitulo = qs('#title');
  let inputrating = qs('#rating');
  let inputawards = qs('#awards');
  let inputrelease_date = qs('#release_date');
  let inputlength = qs('#length');
  let inputgenre_id = qs('#genre_id');

  inputtitulo.focus();
  let errores = {};

  inputtitulo.addEventListener('blur', function (event) {
    if (!event.target.value) {
      inputtitulo.classList.add('is-invalid');
      qs('.error-title').classList.add('is-invalid');
      qs('.error-title').innerHTML = 'Ingresar titulo';
    } else {
      qs('.error-title').classList.remove('is-invalid');
      qs('.error-title').innerHTML = '';
      inputtitulo.classList.remove('is-invalid');
      inputtitulo.classList.add('is-valid');
    }
  });
  inputrating.addEventListener('blur', function (event) {
    if (!event.target.value) {
      inputrating.classList.add('is-invalid');
      qs('.error-rating').classList.add('is-invalid');
      qs('.error-rating').innerHTML = 'Ingresar rating';
    } else if (event.target.value > 10 || event.target.value < 0) {
      inputrating.classList.add('is-invalid');
      qs('.error-rating').classList.add('is-invalid');
      qs('.error-rating').innerHTML = 'Rating debe estar entre 1 y 10';
    } else {
      qs('.error-rating').classList.remove('is-invalid');
      qs('.error-rating').innerHTML = '';
      inputrating.classList.remove('is-invalid');
      inputrating.classList.add('is-valid');
    }
  });
  inputawards.addEventListener('blur', function (event) {
    if (!event.target.value) {
      inputawards.classList.add('is-invalid');
      qs('.error-awards').classList.add('is-invalid');
      qs('.error-awards').innerHTML = 'Ingresar awards';
    } else if (event.target.value > 10 || event.target.value < 0) {
      inputawards.classList.add('is-invalid');
      qs('.error-awards').classList.add('is-invalid');
      qs('.error-awards').innerHTML = 'Awards debe estar entre 1 y 10';
    } else {
      qs('.error-awards').classList.remove('is-invalid');
      qs('.error-awards').innerHTML = '';
      inputawards.classList.remove('is-invalid');
      inputawards.classList.add('is-valid');
    }
  });
  inputrelease_date.addEventListener('blur', function (event) {
    if (!event.target.value) {
      inputrelease_date.classList.add('is-invalid');
      qs('.error-release_date').classList.add('is-invalid');
      qs('.error-release_date').innerHTML = 'Ingresar una fecha';
    } else {
      qs('.error-release_date').classList.remove('is-invalid');
      qs('.error-release_date').innerHTML = '';
      inputrelease_date.classList.remove('is-invalid');
      inputrelease_date.classList.add('is-valid');
    }
  });
  inputlength.addEventListener('blur', function (event) {
    if (!event.target.value) {
      inputlength.classList.add('is-invalid');
      qs('.error-length').classList.add('is-invalid');
      qs('.error-length').innerHTML = 'Ingresar duracion de pelicula';
    } else if (event.target.value > 360 || event.target.value < 60) {
      inputlength.classList.add('is-invalid');
      qs('.error-length').classList.add('is-invalid');
      qs('.error-length').innerHTML = 'La duracion debe estar entre 60 y 360 minutos';
    } else {
      qs('.error-length').classList.remove('is-invalid');
      qs('.error-length').innerHTML = '';
      inputlength.classList.remove('is-invalid');
      inputlength.classList.add('is-valid');
    }
  });
  inputgenre_id.addEventListener('blur', function (event) {
    if (!event.target.value) {
      inputgenre_id.classList.add('is-invalid');
      qs('.error-genre').classList.add('is-invalid');
      qs('.error-genre').innerHTML = 'Ingresar genero';
    } else {
      qs('.error-genre').classList.remove('is-invalid');
      qs('.error-genre').innerHTML = '';
      inputgenre_id.classList.remove('is-invalid');
      inputgenre_id.classList.add('is-valid');
    }
  });

  form.addEventListener('submit', function (event) {
    let error = 0;

    event.preventDefault();

    for (let i = 0; i < form.elements.length - 1; i++) {
      if (!form.elements[i].value) {
        error = 1;
        form.elements[i].classList.add('is-invalid');
      }
    }

    for (let i = 0; i < form.elements.length; i++) {
      if (form.elements[i].classList.contains('is-invalid')) {
        error = 1;
      }
    }

    if (!error) {
      alert('La película se guardó satisfactoriamente');
      qs('.errores').innerHTML = '';
      qs('.errores').classList.remove('alert-warning');
      event.target.submit();
    } else {
      qs('.errores').innerHTML = 'Completar correctamente los datos';
      qs('.errores').classList.add('alert-warning');
    }
  });
};
