const qs = (element) => document.querySelector(element);

window.onload = function () {
  let body = qs('body');
  let moviesListTitulo = qs('.moviesListTitulo');

  body.classList.add('fondoMoviesList');

  console.log(body);
  moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
  moviesListTitulo.style.color = 'white';
  moviesListTitulo.style.backgroundColor = 'teal';
  moviesListTitulo.style.padding = '20px';
};
