console.log("*************** INVENTARIO DE HELADOS  ****************");

let opcion = 0;
let vHelados = [];
let vVentas = [];

function mostrarMenu() {
  const mensaje = `
  Escriba el número que corresponda a la acción
  que desea realizar en el sistema:
  1. Agregar un helado
  2. Modificar un helado
  3. Eliminar un helado
  4. Mostrar inventario
  5. Realizar venta
  6. Salir del sistema
  `;
  return parseInt(prompt(mensaje));
}

function redirigir(opcion) {
  if (opcion === 1) agregarHelado();
  else if (opcion === 2) modificarHelado();
  else if (opcion === 3) eliminarHelado();
  else if (opcion === 4) mostrarInventario();
  else if (opcion === 5) realizarVenta();
  else if (opcion === 6) salir();

  /*switch(opcion) {
    case 1: agregarHelado()
    break
  }*/
}

function agregarHelado() {
  const nombre = prompt("Nombre del helado:");
  const sabor = prompt("Sabor del helado:");
  const cantidad = parseInt(prompt("Cantidad en inventario:"));
  const precio = parseInt(prompt("Valor unitario:"));

  vHelados.push({
    codigo: vHelados.length + 1,
    nombre,
    sabor,
    cantidad,
    precio
  });
  console.log(vHelados);
}

function modificarHelado() {
  let mensaje = "Escriba el numero correspondiente al helado a modificar: \n\n";
  for (let i = 0; i < vHelados.length; i++) {
    mensaje += `${i}: ${vHelados[i].nombre} \n`;
  }
  const index = prompt(mensaje);
  const helado = vHelados[index];
  const nombre = prompt(`nombre: ${helado.nombre}`, helado.nombre);
  const sabor = prompt(`sabor: ${helado.sabor}`, helado.sabor);
  const cantidad = prompt(`cantidad: ${helado.cantidad}`, helado.cantidad);
  const precio = prompt(`precio: ${helado.precio}`, helado.precio);
  vHelados[index] = {
    codigo: helado.codigo,
    nombre,
    sabor,
    cantidad,
    precio
  };
}

function eliminarHelado() {
  let mensaje = "Escriba el numero correspondiente al helado a eliminar: \n";
  for (let i = 0; i < vHelados.length; i++) {
    mensaje += `${i}: ${vHelados[i].nombre} \n`;
  }
  const index = parseInt(prompt(mensaje));
  const helado = vHelados[index];
  vHelados.splice(index, index + 1);
  console.log("Eliminó", vHelados);
  alert(`Se ha eliminado el helado: ${helado.nombre}`);
}

function mostrarInventario() {
  let mensaje = "*** INVENTARIO DE HELADOS ***\n\n";
  for (let i = 0; i < vHelados.length; i++) {
    mensaje += `
    ${i}: ${vHelados[i].nombre}, cantidad: ${
      vHelados[i].cantidad
    }, precio unitario ${vHelados[i].precio}, precio total ${
      vHelados[i].cantidad * vHelados[i].precio
    }`;
  }
  alert(mensaje);
}

function realizarVenta() {
  let mensaje = "Escriba el número correspondiente al helado a vender: \n";
  for (let i = 0; i < vHelados.length; i++) {
    mensaje += `${i}: ${vHelados[i].nombre}, precio: ${vHelados[i].precio}`;
  }
  const index = prompt(mensaje);
  const cantidad = parseInt(prompt("Escriba la cantidad a vender"));
  const helado = vHelados[index];
  const total = helado.precio * cantidad;
  const aceptar = window.confirm(
    `Desea hacer esta compra por valor de: ${total}?`
  );
  if (aceptar) {
    vVentas.push({
      codigo: index,
      nombre: helado.nombre,
      cantidad,
      total: total
    });
    alert("Compra realizada!");
  } else {
    alert("Ha cancelado la compra.");
  }
}

function salir() {
  alert("Ha cerrado la sesion!");
}

// while (opcion !== 6) {
//   opcion = mostrarMenu();
//   redirigir(opcion);
// }
