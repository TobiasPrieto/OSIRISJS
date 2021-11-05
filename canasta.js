
const canastaLocalStorage = [];                                   //* Arreglo de productos de la canasta                             


const contenedorCanasta = document.getElementById("canasta");     //* trae el elemento del dom "canasta"
const totalPagar = document.getElementById("total-pagar");        //*trae el elemento del dom "total a pagar"




const eliminarProducto = (producto) => {                         // *funcion para eliminar productos de la canasta*/
  $(`#producto-canasta-${producto.id}`).remove();               //* elimina el producto de la canasta*/

 
  const index = canastaLocalStorage.findIndex(productoLocal => parseInt(producto.id) === parseInt(productoLocal.id)); //* busca el producto en el array de productos de la canasta*/

 
  canastaLocalStorage.splice(index, 1);                                   //* elimina el producto del array de productos de la canasta*/
  localStorage.setItem("canasta", JSON.stringify(canastaLocalStorage));    //* guarda el array de productos de la canasta en el localStorage*/
  sumarCanasta();                                                         //* suma el total de la canasta en la funcion*/
}

const convertirPrecioANumero = (precio) => parseInt(precio.replaceAll(",", ""));        //* funcion para convertir el string a un numero*/


const numeroAComas = (total) => {                                       //* funcion para convertir el numero a un string con comas*/
  return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");        //* se usa el metodo replace para reemplazar el numero por un string con comas*/
}


const sumarCanasta = () => {                                                  //* funcion para sumar el total de la canasta*/
  let totalCanasta = 0;                                                       //* variable para guardar el total de la canasta*/
  for (const producto of canastaLocalStorage) {                               //* recorre el array de productos de la canasta del storage*/
    totalCanasta = totalCanasta + (producto.precio * producto.cantidad);      //* suma el precio del producto por la cantidad*/
  }
  $("#total-pagar").html(`$${numeroAComas(totalCanasta)}`);                   //* muestra el total de la canasta en el dom*/
  localStorage.setItem("totalAPagar", totalCanasta);                          //* guarda el total de la canasta en el localStorage*/
}


$(".boton-canasta").on("click", function () {                               //* evento click del boton canasta*/
  $("#contenedor-general-canasta").toggleClass("on");                       //* toggle del contenedor general de la canasta*/
});


const insertarProductosACanasta = (producto) => {                           //* funcion para insertar productos a la canasta*/
  if ($(`#producto-canasta-${producto.id}`).length === 0) {                 //* si el producto no existe en la canasta*/
    if (!$("#contenedor-general-canasta").hasClass("on")) {                 //* si el contenedor general de la canasta no tiene la clase "on"*/
      $(".boton-canasta").trigger("click");                                 //* dispara el evento click del boton canasta*/
    }
    
    
     //* inserta el producto en la canasta*/
    $("#canasta").append(`                                                       
        <div class="producto-canasta" id="producto-canasta-${producto.id}">       
          <img  class="imgCanasta" src="${producto.imagen}">
          <div class="descripcion-producto">
            <p>  Producto: ${producto.nombre}</p>
            <b> $ ${producto.precio}</b>                                                                        
            <b> Cantidad: <span id="producto-cantidad-${producto.id}">${producto.cantidad}</span></b>
          </div>
          <button class="boton-eliminar" id="boton-${producto.id}">Eliminar</button>
        </div>
      `)

    $(`#boton-${producto.id}`).on("click", function () {                        //* evento click del boton eliminar*/
      eliminarProducto(producto);                                               //* llama a la funcion eliminar producto*/
    });

    canastaLocalStorage.push(producto);                                 //* agrega el producto al array de productos de la canasta*/
  } else {
    const nuevaCantidad = parseInt($(`#producto-cantidad-${producto.id}`).html()) + 1;              //* variable para guardar la nueva cantidad del producto*/
    const i = canastaLocalStorage.findIndex(p => parseInt(p.id) === parseInt(producto.id))          //* busca el producto en el array de productos de la canasta*/
    canastaLocalStorage[i] = { ...canastaLocalStorage[i], cantidad: nuevaCantidad };         //* actualiza la cantidad del producto en el array de productos de la canasta*/
    $(`#producto-cantidad-${producto.id}`).html(nuevaCantidad)                                //* actualiza la cantidad del producto en el dom*/
  }
  localStorage.setItem("canasta", JSON.stringify(canastaLocalStorage));                        //* guarda el array de productos de la canasta en el localStorage*/
  sumarCanasta();                                                                               //* suma el total de la canasta en la funcion*/
}



$(".limpiarCanasta").on("click", function () {                                                 //* evento click del boton limpiar canasta*/
  $(".producto-canasta").remove()                                                             //* elimina todos los productos de la canasta*/
  localStorage.removeItem("canasta");                                        //* elimina el array de productos de la canasta del localStorage*/
  location.reload();                                                          //* recarga la pagina*/           
})                               