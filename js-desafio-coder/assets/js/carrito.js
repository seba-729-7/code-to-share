let carritoDeCompras = [];
const contenedorCarrito = document.getElementById("carrito-contenedor");
const btnVaciarCarrito = document.getElementById("vaciar-carrito");
const btnComprarCarrito = document.getElementById("comprar-carrito");
let contadorCarrito = document.getElementById("contador-carrito");
let precioTotal = document.getElementById("precioTotal");
let total = 0;

btnVaciarCarrito.addEventListener('click', vaciarCarrito);
btnComprarCarrito.addEventListener('click',comprarCarrito);

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

function vaciarCarrito(){
  carritoDeCompras = [];
  actualizarCarrito();
};

function actualizarCarrito(){
//aparece el carrito
  contenedorCarrito.innerHTML = "";
  carritoDeCompras.forEach((producto) => {
    let row = document.createElement('tr');
    row.classList.add("productoEnCarrito");
    row.innerHTML = `<td class="col-imagen">
        <img src=${producto.img} width=100>
      </td>
      <td class="col-nombre">${producto.nombre}</td>
      <td class="col-precio">${producto.precio}</td>
      <td class="col-cantidad" id="cantidad${producto.id}">${producto.cantidad}</td>
      <td class="col-quitar">
        <button onclick ="borrarElemento(${producto.id})" id="eliminar${producto.id}" class="boton-eliminar" ><img src="./assets/img/basura.png" class="basura"/></button>
      </td>`;
    contenedorCarrito.appendChild(row);
    localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
  });
  contadorCarrito.innerHTML = carritoDeCompras.length;
  total = carritoDeCompras.reduce(
    //calcula el precio total
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );
  precioTotal.innerText = total;
};

function comprarCarrito(){
  let text = "Hola! Me gustaria comprar los siguientes articulos:\n"
  carritoDeCompras.forEach((producto) => {
    text += `ID: ${producto.id} Nombre: ${producto.nombre} Precio: $${producto.precio} Cantidad: ${producto.cantidad}\n`
  });
  text += `Total: $${total}`;
  const URL = 'https://wa.me/5491154170936/?text=' + encodeURIComponent(text);
  window.open(URL,'_blank').focus();
};