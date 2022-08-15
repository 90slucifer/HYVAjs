
function obtenerProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function buscarProducto(id) {
    let productos = obtenerProductosLS();
    return productos.find(x => x.id == id);
}