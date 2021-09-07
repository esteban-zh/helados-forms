function mostrarHelados(){
    let vHelados = JSON.parse(localStorage.getItem("vHelados"));

    let html = "<ul>";
    vHelados.forEach((item, index) => {
        console.log("item", item);
        html += `<li><input type="radio" name="helado" value="${index}" onchange="eliminarHelado(this)"> ${item.nombre}</li>`;
    });
    html += "</ul>";

    document.getElementById("contenedor-helados").innerHTML = html;
}

function eliminarHelado(element){
    const indiceHelado = parseInt(element.value);//element es el input al cual le hicieron click

    //buscar el helado a modificar en el ventor vhelados del localstorage
      let vHelados = JSON.parse(localStorage.getItem("vHelados"));

    const heladoAEliminar = vHelados[indiceHelado];

    const confirm = window.confirm(`realmente quieres eliminar el helado de ${heladoAEliminar.nombre} seleccionado`);
    
    console.log("confirm", confirm);

    if (confirm) {
        vHelados.splice(indiceHelado, 1);
        localStorage.setItem("vHelados", JSON.stringify(vHelados));
    }
}

mostrarHelados();