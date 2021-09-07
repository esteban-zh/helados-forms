
function agregarHelado(event){
    event.preventDefault();
    const nombre = event.target[0].value;
    const sabor = event.target[1].value;
    const cantidad = event.target[2].value;
    const precio = event.target[3].value;

    //capturar vector de helados del localstorage
    let vHelados = JSON.parse(localStorage.getItem("vHelados"));
    
    //inicializar vector de helados en caso de no estar creado en localstorage
    if (vHelados === null) {
        vHelados = [];
    }
    const helado = {
        codigo: vHelados.length + 1,
        nombre,
        sabor,
        cantidad,
        precio
    };
    //agrego el helado
    vHelados.push(helado);
    localStorage.setItem("vHelados", JSON.stringify(vHelados));
  
}

const form = document.getElementsByTagName("form");
console.log("form", form);
form[0].addEventListener("submit", agregarHelado);