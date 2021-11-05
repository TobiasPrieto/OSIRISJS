const URL = "json/productos.json"                                               //*se declara la constante de la url del json
jQuery(() => {
  
  const productoLocalStorage = JSON.parse(localStorage.getItem("canasta"));   //*se obtiene el objeto de la canasta del localStorage

  
  const insertarProductos = () => {                                           //*se crea la función para insertar los productos
    $.get(URL, (respuesta, estado) => {                                       //*se obtiene la respuesta del json
      if (estado === "success") {                                             //*se valida que la respuesta sea exitosa
        for (const producto of respuesta) {                                   //*se recorre el objeto de la respuesta
          $('#listado').append(`                                  
        <li class="producto" id="${producto.id}">
          <div class="imagen-producto">
            <img src="${producto.imagen}" alt="">
          </div>
          <p class="nombre">${producto.nombre}</p>
          <p class="precio">$${producto.precioLabel}</p>
          <p class="botonAgregarAlCarro">AÑADIR AL CARRO</p>
        </li>`);                                                               //*se crea el elemento html con los datos del producto
    
          $(`#${producto.id}`).on("click", function () {                        //*se crea el evento click para el producto
            insertarProductosACanasta(producto);                                //*se llama a la función para insertar el producto en la canasta
          });
        }
      }
    });
  }
  insertarProductos();                                                        //*se llama a la función para insertar los productos


  if (productoLocalStorage !== null) {                                      //*se valida que el objeto no sea nulo
    for (const producto of productoLocalStorage) {                          //*se recorre el objeto de la canasta
      insertarProductosACanasta(producto);                                  //*se llama a la función para insertar el producto en la canasta
    }
  }


});

