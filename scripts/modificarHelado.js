console.log("*****modificar helado*****");


function modificarHelado(event){
    event.preventDefault();

let vHelados = JSON.parse(localStorage.getItem("vHelados"));
console.log("indice",event.target[4]);
const indice = parseInt(event.target[4].value);
const helado = vHelados[indice];

helado.nombre = event.target[0].value;
helado.sabor = event.target[1].value;
helado.cantidad= event.target[2].value;
helado.precio = event.target[3].value;

vHelados[indice] = helado;

localStorage.setItem("vHelados", JSON.stringify(vHelados));

}
//mostrar la lista de helados en #contenedor-helados
function mostrarHelados(){
    let vHelados = JSON.parse(localStorage.getItem("vHelados"));

    let html = "<ul>";
    vHelados.forEach((item, index) => {
        console.log("item", item);
        html += `<li><input type="radio" name="helado" value="${index}" onchange="llenarForm(this)"> ${item.nombre}</li>`;
    });
    html += "</ul>";

    document.getElementById("contenedor-helados").innerHTML = html;
}

function llenarForm(element){
    //capturar la posicion del helado a modificar
    const indiceHelado = parseInt(element.value);//element es el input al cual le hicieron click

    //buscar el helado a modificar en el ventor vhelados del localstorage
      let vHelados = JSON.parse(localStorage.getItem("vHelados"));

    const heladoAModificar = vHelados[indiceHelado];
    
    //seleccionar el formulario para llenar los datos
     const formulario = form[0];

     formulario[0].value = heladoAModificar.nombre;
     formulario[1].value = heladoAModificar.sabor;
     formulario[2].value = heladoAModificar.cantidad;
     formulario[3].value = heladoAModificar.precio;
     formulario[4].value = indiceHelado;

}

const form = document.getElementsByTagName("form");
console.log("form", form);
form[0].addEventListener("submit", modificarHelado);

mostrarHelados();