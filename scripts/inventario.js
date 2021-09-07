function mostrarInventario(){
    let vHelados = JSON.parse(localStorage.getItem("vHelados"));

    let table = document.createElement("table");
    table.setAttribute("border", 1);
    table.innerHTML = `
    <tr>
        <th>NOMBRE</th>
        <th>SABOR</th>
        <th>CANTIDAD</th>
        <th>PRECIO</th>
    </tr>
    `;

    let columns = "";
    vHelados.forEach((element) => {
        console.log("element", element);
        columns += `
        <tr>
            <td>${element.nombre}</td>
            <td>${element.sabor}</td>
            <td>${element.cantidad}</td>
            <td>${element.precio}</td>
        </tr>
        `
    });

    table.innerHTML += columns;

    document.getElementById("contenedor-helados").appendChild(table);
}

mostrarInventario()