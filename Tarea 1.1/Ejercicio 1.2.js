// * EJERCICIO 2: ACTUALIZAR STOCK POR ID
/* Cree una función llamada actualizarStock que:
    - Reciba un array de productos (objetos con id, nombre, y stock), un id, y un nuevoStock.
    - Busque el producto con el id especificado.
    - Si existe, actualice su propiedad stock con el nuevoStock.
    - Retorne el array modificado. Si el producto no existe, retorna null.
*/

const productos = [
    { id: 1, nombre: "Lapiz", stock: 10},
    { id: 2, nombre: "Cuaderno", stock: 5},
];

function actualizarStock(productos, id, nuevoStock) {
    const buscar = productos.find(buscar => buscar.id == id);
    if (buscar){
        buscar.stock = nuevoStock;
        return productos;
    }
    else{
        return null;
    }
}

console.log(actualizarStock(productos, 2, 20));
