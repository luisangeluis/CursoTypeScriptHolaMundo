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
//Este comando corre (tsc) si se configura donde estan mis archivos .ts y donde generar los archivos .js en el
//archivo tsconfig.json
//tsc
//Este comando corre si no configuras nada del archivo tsconfig.json
//tsc src/index.ts

let mensaje: string = 'hola mundo';
mensaje = 'hola';
console.log(mensaje);
mensaje = 'adios';
console.log(typeof []);

//Tipos nativos JS******
// number
// string
// boolean
// null
// undefined
// object
// function
//Tipos de TS******
//any <- no usar nunca
//unknow
// never
//arrays
//tuplas
//Enums//
//Tipos inferidos
//Siempre declarar el tipo o inicializarla con un valor para que ts lo infiera.
let num = 10;
let nam: string = 'luis';
let extintos = true;
let animales: string[] = ['perro', 'gato', 'raton'];
let numbers: number[] = [1, 2, 3];
let checks: boolean[] = [];
let numbers2: Array<number> = [];

const myfunction = (mensaje: string) => console.log(mensaje);

// animales.map(animal=>animal.) <- El autocompletado sugiere metodos del tipo de dato en el arrays

/*Arreglo con longitud 2 indicando el tipo en cada posicion puede ser del tamaño que quieras*/
let tupla: [number, string] = [1, 'hola'];
let tupla2: [number, string[], string] = [1, ['hola', 'adios'], 'hello'];

//ENUMS***************************************************
//sin enums
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extraGrande = 'xl';

//con enums
//Ejemplos enum
// enum Talla {
//   Chica = 2,
//   Mediana,
//   Grande,
//   ExtraGrande,
// }
// enum Talla {
//   Chica = 's',
//   Mediana = 'm',
//   Grande = 'l',
//   ExtraGrande = 'xl',
// }
//Enum se usa con PascalCase y tienen indices desde el 0 por defecto como un array, por const antes del enum para codigo mas optimizado
const enum Talla {
  Chica,
  Mediana,
  Grande,
  ExtraGrande,
}

const variable1 = Talla.Chica;
console.log(variable1);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}
const estado = LoadingState.Success;
console.log(estado);

//OBJETOS***********************************************************
type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};
type Persona = {
  readonly id: number /*Con readonly solo puedes asignar el valor 1 vez.*/;
  nombre: string;
  apellido?: string /*Con el signo ? puede ser opcional*/;
  talla: Talla /*Propiedad del tipo del enum que cree*/;
  direccion: Direccion;
};

const myObjeto: Persona = {
  id: 1,
  nombre: 'luis',
  talla: Talla.Chica,
  direccion: { numero: 1, calle: 'uno', pais: 'mexico' },
};

const myArray: Persona[] = [myObjeto];
