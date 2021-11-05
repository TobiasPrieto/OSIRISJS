function darkMode() {                                                         //*se declara la funcion darkMode
  $(".botonOscuro").toggleClass("prendido");                                    //*se le agrega la clase prendido al boton
  $(".botonOscuro").toggleClass("botonEliminarOscuro");                         
  $("body").toggleClass("bodyOscuro");
  $(".producto").toggleClass("colorBlanco");
  $(".nombre").toggleClass("colorBlanco");
  $("h1").toggleClass("colorBlanco");
  $("footer").toggleClass("footerOscuro");
  $(".bg-light").toggleClass("navOscura")
  $(".nav-link").toggleClass("colorBlanco");
  $(".navbar-brand").toggleClass("colorBlanco");
  $("footer p").toggleClass("colorBlanco");
  $("footer i").toggleClass("colorBlanco");
  $(".canasta").toggleClass("canastaOscura");
  $("h4").toggleClass("colorBlanco");
  $(".descripcion-producto").toggleClass("colorBlanco");
  $(".boton-eliminar").toggleClass("botonEliminarOscuro");
  $("#total-pagar").toggleClass("botonEliminarOscuro");
  $(".totalPagar").toggleClass("botonEliminarOscuro");
  $(".botonAgregarAlCarro").toggleClass("botonEliminarOscuro");
  $(".fa-moon").toggleClass("botonEliminarOscuroRedondo")    
  $(".limpiarCanasta").toggleClass("botonEliminarOscuro");                 
}                                                         //* se declaran todos los cambios a realizar en esa funcion y luego se cierra


$(".botonOscuro").on("click", function () {                   //*se declara la funcion que se ejecuta al hacer click en el boton
    darkMode()                                              //*se llama a la funcion darkMode

  });

