//Implementar typeScript a algo con js, esta es una alternativa.
//La primera opcion es con jsDocs que es poniendo los comentarios.

/**
 * @param {string} mensaje
 * @param {string} mensaje2
 * @returns {string}
 */
const holaMundo = (mensaje, mensaje2) => {
  console.log(`${mensaje} ${mensaje2}`);
  return `Hola mundo ${mensaje} ${mensaje2}`;
};

export { holaMundo };
