function renderProductosCarrito() {
    let productos = obtenerProductosCarrito();
    let contenido = `<p class="alert alert-warning" role="alert">No se encontraron productos en el Carrito</p>`

    if (productos.length > 0) {
        contenido = `<p class="text-end"><a href="#" class="btn btn-danger" onclick="vaciarCarrito()">Vaciar Carrito</a></p>
    <table class="table">`;
    let total = 0;

    for (let producto of productos) {
        let precio = producto.precio * producto.cantidad;
        contenido += ` <tr>
        <td>${producto.marca + " " + producto.modelo + " " + producto.año} X ${producto.cantidad}</td>
        <td>us$${precio}</td>
        <td><a href="#" class="btn" onclick="eliminarCarrito(${producto.id})" width="24">Quitar</a></td>
        </tr>`;
        total += precio;
    }

    contenido += `<tr>
    <td>Total a pagar</td>
    <td><b>us$${total}</b></td>
    <td><a href="#" class="btn" onclick="compraFinalizada()" width="24" id="boton_comprar">Comprar</a><td>
    </tr>
    `;

    contenido += `</table>`
    }

    document.getElementById("productos_carrito").innerHTML = contenido;

};

actualizarBotonCarrito();
renderProductosCarrito();