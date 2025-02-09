// * EJERCICIO 5: REPORTE DE VENTAS
/* Cree una funcion llamada generarReporte que:
    - Reciba un array de objetos de ventas con producto y monto.
    - Retorne un objeto con:
        - totalVentas: suma de todos los montos.
        - promedio: monto promedio por transacción.
        - cantidadTransacciones: número total de ventas.
*/
const ventas = [
    { producto: "TV", monto: 1000 },
    { producto: "Radio", monto: 200 },
];

function generarReporte(ventas){
    const totalVentas = ventas.reduce((suma, vendido) => suma + vendido.monto, 0.00)
    const promedio = totalVentas/ventas.length;
    const cantidadTransacciones = ventas.length;
    return {totalVentas, promedio, cantidadTransacciones};
}

console.log(generarReporte(ventas));

