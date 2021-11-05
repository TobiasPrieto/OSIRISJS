const carrito = JSON.parse(localStorage.getItem("canasta")); //traemos el carro del local

let boton = document.getElementById("botonMP");   //seleccionamos el boton que nos va a servir para ir a mercado pago

boton.addEventListener("click", (e) => {      // cuanto se clickee el boton ejecutar la funcion
  pagarConFe()
});

async function pagarConFe() {                             //funcion mercado pago y mapeado de carrito
  const productosToMp = carrito.map((Element) => {
    let nuevoElemento = {
      title: Element.nombre,
      description: Element.descripcion,
      picture_url: Element.img,
      category_id: Element.id,
      quantity: Element.cantidad,
      currency_id: "ARS",
      unit_price: Element.precio,
    };
    return nuevoElemento;
  });

  let response = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer TEST-680675151110839-052307-64069089337ab3707ea2f547622a1b6a-60191006",
      },
      body: JSON.stringify({
        items: productosToMp,
      }),
    }
  );

  const data = await response.json();
  window.open(data.init_point, "_blank");
}
