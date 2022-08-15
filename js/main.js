fetch('./js/productos.json')
.then((resp) => resp.json())
.then((data) => {
  let productos = data
  function renderProductos() {
    let contenido = "";

    for (let producto of productos) {
        contenido += `<div class="col-md-4">
        <div class="card">
        <img src="assets/img/${producto.imagen}" class="card-img-top" alt="${producto.marca}">
        <div class="card-body">
          <h5 class="card-title">${producto.marca + " " + producto.modelo + " " + producto.año}</h5>
          <p class="card-text">us$${producto.precio}</p>
          <a href="#" class="btn btn-primary" onclick="agregarCarrito(${producto.id})">Agregar</a>
        </div>
      </div>
      </div>`
    }

    document.getElementById("productos").innerHTML = contenido;
};
renderProductos();
guardarProductosLS(productos);
})

actualizarBotonCarrito();
renderProductos();
