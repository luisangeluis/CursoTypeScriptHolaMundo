// run `node index.js` in the terminal
// console.log(`Hello Node.js v${process.versions.node}!`);
//Revisar que es -g
// npm i -g typescript = Instala typescript
//Crear un archivo js a partir de un tsc
//tsc nombreArchivo.ts
//Crea un archivo tsconfig.json, configura las opciones de compilacion.
// tsc --init
//OPCIONES VISTAS
//-version del js
// "targe":"ES20156"
//-raiz de nuestros archivo tsc
//"rootDir":"./src" <- Esto si estan en src
//Indicar donde se compilara todo el archivo js
//"outDir":"./dist" <- por convencion es en una carpeta dist
//Poner en false para que cree archivos js cuando hay error.
//"notEmitOnError":false
//No emite comentarios en el codigo js
//"removeComments":true
//Este comando corre (tsc) si se configura donde estan mis archivos .ts y donde generar los archivos .js
//tsc
var mensaje = 'hola mundo';
mensaje = 'hola';
