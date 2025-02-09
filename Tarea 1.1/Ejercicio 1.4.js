// * EJERCICIOS 4: COMBINAR DATOS DE USUARIO
/* Cree una función llamada combinarUsuarios que: 
    - Reciba dos arrays:
        - usuarios: array de objetos con id y nombre.
        - detalles: array de objetos con id y propiedades adicionales (ej: edad).
    - Combine ambos arrays en uno solo, fusionando los objetos que compartan el mismo id
*/
const usuario = [{ id: 1, nombre: "Juan" }, { id: 2, nombre: "Pedro" }];
const detalles = [{ id: 1, edad: 25 }, { id: 2, edad: 30 }];

function combinarUsuarios(usuarios, detalles){
    return usuarios.map(usuario => {
        const detalle = detalles.find(detalle => detalle.id == usuario.id);
        return {...usuario, ...detalle};
    })
}

console.log(combinarUsuarios(usuario, detalles));