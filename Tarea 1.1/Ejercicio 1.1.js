// * EJERCICIO 1: FILTRAR Y TRANSFORMAR PRODUCTOS
/*  Cree una función llamada aplicarImpuestos que:
    - Reciba un array de objetos (productos con nombre y precio).
    - Filtre los productos con precio mayor a 50.
    - Aumente el precio de los productos filtrados agregando un 10% de impuesto.
    - Retorne el nuevo array modificado.
*/
const productos = [
    { nombre: "Camisa", precio: 45},
    { nombre: "Zapatos", precio: 80},
];

function aplicarImpuestos(productos) { 
    return productos.filter(producto => producto.precio > 50)
    .map(producto => { 
        producto.precio = producto.precio + producto.precio*0.1;
        return producto; 
    })
}

console.log(aplicarImpuestos(productos));
