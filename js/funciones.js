function obtenerProductosCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarProductosCarrito(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function actualizarBotonCarrito() {
    let productos = obtenerProductosCarrito();
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    Carrito
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0</span></button>`;
    let total = 0;

    if (productos.length > 0) {
        for (let producto of productos) {
            total += producto.cantidad;
        }

        contenido = `<button type="button" class="btn btn-primary position-relative">
        Carrito
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        ${total}</span></button>`;
    } 

    document.getElementById("boton_carrito").innerHTML = contenido;

}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    actualizarBotonCarrito();
    renderProductosCarrito();
    Toastify({
        text: "Carrito Vacio",
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

function agregarCarrito(id) {
    let producto = buscarProducto(id);
    let productos_carrito = obtenerProductosCarrito();
    let pos = productos_carrito.findIndex(x => x.id == id);

    if (pos > -1) {
        productos_carrito[pos].cantidad += 1;
    } else {
        let producto = buscarProducto(id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
    }
    
    guardarProductosCarrito(productos_carrito);
    actualizarBotonCarrito();
    Toastify({
        text: "Agregado al carrito",
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "blue",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

function eliminarCarrito(id) {
    let productos_carrito = obtenerProductosCarrito();
    let pos = productos_carrito.findIndex(x => x.id == id);
    productos_carrito[pos].cantidad -= 1;

    if (productos_carrito[pos].cantidad == 0) {
        productos_carrito.splice(pos, 1);
    }
    
    guardarProductosCarrito(productos_carrito);
    actualizarBotonCarrito();
    renderProductosCarrito();
    Toastify({
        text: "Vehiculo Eliminado",
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

function compraFinalizada() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Desea confirmar su compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Felicidades!',
            'Su compra fue realizada con exito!',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Su compra ha sido cancelada',
            'error'
          )
        }
      })
}

