let carritoDeCompras = [];
//localStorage
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carritoDeCompras")) {
    carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras"));
    actualizarCarrito()
  }
});

const borrarElemento = (productoId) => {
  const item = carritoDeCompras.find((producto) => producto.id === productoId);
  const indice = carritoDeCompras.indexOf(item);
  carritoDeCompras.splice(indice, 1);
  actualizarCarrito();
};

const agregarElemento = (productoId) => {
  const existe = carritoDeCompras.some(
    (producto) => producto.id === productoId
  );
  if (existe) {
    const producto = carritoDeCompras.map((producto) => {
      if (producto.id === productoId) {
        producto.cantidad++;
      }
    });
  } else {
    const item = productos.find((producto) => producto.id === productoId);
    carritoDeCompras.push(item);
  }
  actualizarCarrito();
};

const actualizarCarrito = () => {
  const contenedorCarrito = document.getElementById("carrito-contenedor");
  let contadorCarrito = document.getElementById("contador-carrito");
  let precioTotal = document.getElementById("precioTotal");

  contenedorCarrito.innerHTML = "";
  carritoDeCompras.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button onclick ="borrarElemento(${producto.id})" id="eliminar${producto.id}" class="boton-eliminar" ><img src="./assets/img/basura.png" class="basura"/></button>`;
    contenedorCarrito.appendChild(div);
    localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
  });
  contadorCarrito.innerHTML = carritoDeCompras.length;
  precioTotal.innerText = carritoDeCompras.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );
};
