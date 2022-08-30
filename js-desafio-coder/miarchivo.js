//variables
let colgante;
let arito2;
let arito3;
let arito4;
let jarra;
let mate;
let total;

//Precios
function precioColgante() {
  do {
    colgante = parseFloat(prompt("Ingresa el precio del colgante mayor a 600"));
    if (colgante >= 600) {
      alert("El precio establecido para el producto es " + colgante);
    } else {
      alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
    }
  } while (isNaN(colgante) || colgante < 600);
  //fin funcion precioColgante
}
precioColgante();

function precioArito2() {
  do {
    arito2 = parseFloat(
      prompt("Ingresa el precio del Arito-Banda mayor a 200")
    );
    if (arito2 >= 200) {
      alert("El precio establecido para el producto es " + arito2);
    } else {
      alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
    }
  } while (isNaN(arito2) || arito2 < 200);
  //fin funcion precioArito2
}
precioArito2();

function precioArito3() {
  do {
    arito3 = parseFloat(
      prompt("Ingresa el precio del Arito-Corazon mayor a 200")
    );
    if (arito3 >= 200) {
      alert("El precio establecido para el producto es " + arito3);
    } else {
      alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
    }
  } while (isNaN(arito3) || arito3 < 200);
  //fin funcion precioArito3
}
precioArito3();

function precioArito4() {
  do {
    arito4 = parseFloat(
      prompt("Ingresa el precio del Arito-Pintura mayor a 200")
    );
    if (arito3 >= 200) {
      alert("El precio establecido para el producto es " + arito4);
    } else {
      alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
    }
  } while (isNaN(arito4) || arito4 < 200);
  //fin funcion precioArito4
}
precioArito4();

function precioJarra() {
  do {
    jarra = parseFloat(prompt("Ingresa el precio de la Jarra mayor a 1000"));
    if (jarra >= 1000) {
      alert("El precio establecido para el producto es " + jarra);
    } else {
      alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
    }
  } while (isNaN(jarra) || jarra < 1000);
  //fin funcion precioJarra
}

precioJarra();

function precioMate() {
  do {
    mate = parseFloat(prompt("Ingresa el precio del mate mayor a 400"));
    if (mate >= 400) {
      alert("El precio establecido para el producto es " + mate);
    } else {
      alert("El valor ingresado es incorrecto, ingrese un nuevo valor");
    }
  } while (isNaN(mate) || mate < 400);
  //fin funcion precioMate
}
precioMate();

/*simulador compras */

function agregarCarrito() {
  let total = 0;
  let codigo;
  //pedir codigo del producto
  do {
    codigo = parseInt(
      prompt(
        "****Tienda Artesanal Mambo Mistico****\n  Ingrese el codigo del producto que desea obtener (1-6).\n Para finalizar la compra ingrese el numero 7"
      )
    );
    //switch productos
    switch (codigo) {
      case 1:
        total += colgante;
        break;

      case 2:
        total += arito2;
        break;

      case 3:
        total += arito3;
        break;

      case 4:
        total += arito4;
        break;

      case 5:
        total += jarra;
        break;

      case 6:
        total += mate;
        break;
      case 7:
        //total de la compra
        alert("El total de la compra es: $" + total + "\nGracias por su compra");
        break;
      default:
        alert("La opción ingresada no es correcta");
    }
    //fin de switch
  } while (isNaN(codigo) || codigo != 7);
}
//fin de la funcion

agregarCarrito();
