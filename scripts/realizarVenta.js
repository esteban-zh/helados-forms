function realizarVenta(event){
    event.preventDefault();
    const cantidad = parseInt(event.target[0].value);
    let vHelados = JSON.parse(localStorage.getItem("vHelados"));
    const indice = parseInt(event.target[1].value);
    const heladoAVender = vHelados[indice];

    const confirm = window.confirm(`realmente desea hacer una venta de ${cantidad} helados de ${heladoAVender.nombre} con precio de ${heladoAVender.precio*cantidad}`);
    
    if (confirm) {
    if (cantidad > heladoAVender.cantidad) {
        alert("no hay cantidad suficiente en inventario para la venta")
    }
    else if (cantidad <= heladoAVender.cantidad) {
        heladoAVender.cantidad = heladoAVender.cantidad - cantidad;
        localStorage.setItem("vHelados", JSON.stringify(vHelados));
        console.log(heladoAVender.cantidad)
    }
    } 
}

//mostrar la lista de helados en #contenedor-helados
function mostrarHelados(){
    let vHelados = JSON.parse(localStorage.getItem("vHelados"));

    let html = "<ul>";
    vHelados.forEach((item, index) => {
        console.log("item", item);
        html += `<li><input type="radio" name="helado" value="${index}" onchange="seleccionado(this)"> ${item.nombre}</li>`;
    });
    html += "</ul>";

    document.getElementById("contenedor-helados").innerHTML = html;
}

function seleccionado(element){
    const indiceHelado = parseInt(element.value);
    let vHelados = JSON.parse(localStorage.getItem("vHelados"));
    const heladoAVender = vHelados[indiceHelado];
     const formulario = form[0];

     formulario[1].value = indiceHelado;

    let html = `Helado de ${heladoAVender.nombre}, disponibles ${heladoAVender.cantidad} en inventario, precio de ${heladoAVender.precio} pesos`; 
    document.getElementById("seleccionado").innerHTML = html;
}

const form = document.getElementsByTagName("form");
console.log("form", form);
form[0].addEventListener("submit", realizarVenta);

mostrarHelados()