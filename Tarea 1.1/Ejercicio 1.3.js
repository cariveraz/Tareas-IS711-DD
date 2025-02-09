// * EJERCICIO 3: CONTADOR DE OCURRENCIAS
/* Cree una función llamada contarOcurrencias que:
    - Reciba un array de elementos (strings, números, etc.).
    - Retorne un objeto donde las claves sean los elementos del array y los valores sean la
      cantidad de veces que aparecen.
*/ 
const elementos = ["a", "b", "a", "c", "b", "d", "f", "a", "b", "c", "d", "b", "a"]

function contarOcurrencias(elementos){
  const ocurrencias = {};
  elementos.forEach(elementos => {
    if (ocurrencias[elementos]){
      ocurrencias[elementos] = ocurrencias[elementos] + 1;
    }
    else{
      ocurrencias[elementos] = 1;
    }
  })
  return ocurrencias;
}

console.log(contarOcurrencias(elementos));