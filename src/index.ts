// //Revisar que es -g
// // npm i -g typescript = Instala typescript

// //Crear un archivo js a partir de un tsc
// //tsc nombreArchivo.ts

// //Crea un archivo tsconfig.json, configura las opciones de compilacion.
// // tsc --init

// //OPCIONES VISTAS
// //-version del js
// // "targe":"ES20156"
// //-raiz de nuestros archivo tsc
// //"rootDir":"./src" <- Esto si estan en src
// //Indicar donde se compilara todo el archivo js
// //"outDir":"./dist" <- por convencion es en una carpeta dist
// //Poner en false para que cree archivos js cuando hay error.
// //"notEmitOnError":false
// //No emite comentarios en el codigo js
// //"removeComments":true
// //Habilitar en configuraciones tsconfig noUnusedParameters:true como
// //configuracion inicial para detectar parametros que no usas en una funcion
// //Habilitar en tsconfig noImplicitReturns:true para que mi funcion siempr pida un tipo de retorno.
// //Este comando corre (tsc) si se configura donde estan mis archivos .ts y donde generar los archivos .js en el
// //archivo tsconfig.json
// //tsc
// //Este comando corre si no configuras nada del archivo tsconfig.json
// //tsc src/index.ts

// let mensaje: string = 'hola mundo';
// mensaje = 'hola';
// console.log(mensaje);
// mensaje = 'adios';
// console.log(typeof []);

// //Tipos nativos JS***********************************************************
// // number
// // string
// // boolean
// // null
// // undefined
// // object
// // function
// //Tipos de TS***********************************************************
// //any <- no usar nunca
// //unknow
// // never
// //arrays
// //tuplas
// //Enums//
// //Tipos inferidos***********************************************************
// //Siempre declarar el tipo o inicializarla con un valor para que ts lo infiera.
// let num = 10;
// let nam: string = 'luis';
// let extintos = true;
// let animales: string[] = ['perro', 'gato', 'raton'];
// let numbers: number[] = [1, 2, 3];
// let checks: boolean[] = [];
// //alternativa para definir el tipo de datos que contiene un array
// let numbers2: Array<number> = [];

// const myfunction = (mensaje: string) => console.log(mensaje);

// // animales.map(animal=>animal.) <- El autocompletado sugiere metodos del tipo de dato en el arrays

// //TUPLAS
// /*Arreglo con longitud 2 indicando el tipo en cada posicion puede ser del tamaño que quieras*/
// let tupla: [number, string] = [1, 'hola'];
// let tupla2: [number, string[], string] = [1, ['hola', 'adios'], 'hello'];

// //ENUMS***********************************************************
// //sin enums
// const chica = 's';
// const mediana = 'm';
// const grande = 'l';
// const extraGrande = 'xl';

// //con enums
// //Ejemplos enum
// // enum Talla {
// //   Chica = 2,
// //   Mediana,
// //   Grande,
// //   ExtraGrande,
// // }
// // enum Talla {
// //   Chica = 's',
// //   Mediana = 'm',
// //   Grande = 'l',
// //   ExtraGrande = 'xl',
// // }
// //Enum se usa con PascalCase y tienen indices desde el 0 por defecto como un array, por const antes del enum para codigo mas optimizado
// const enum Talla {
//   Chica,
//   Mediana,
//   Grande,
//   ExtraGrande,
// }

// const variable1 = Talla.Chica;
// console.log('variable1=', variable1);

// const enum LoadingState {
//   Idle,
//   Loading,
//   Success,
//   Error,
// }
// const estado = LoadingState.Success;
// console.log('loading state', estado);

// //OBJETOS***********************************************************
// type Direccion = {
//   numero: number;
//   calle: string;
//   pais: string;
// };
// type Persona = {
//   readonly id: number /*Con readonly solo puedes asignar el valor 1 vez.*/;
//   nombre: string;
//   apellido?: string /*Con el signo ? puede ser opcional*/;
//   talla: Talla /*Propiedad del tipo del enum que cree*/;
//   direccion: Direccion;
// };

// const myObjeto: Persona = {
//   id: 1,
//   nombre: 'luis',
//   talla: Talla.Chica,
//   direccion: { numero: 1, calle: 'uno', pais: 'mexico' },
// };

// console.log(myObjeto);

// const myArray: Persona[] = [myObjeto];

// //FUNCIONES***********************************************************

// const myFuncion = (edad: number): string => {
//   let result = '';
//   edad > 17 ? (result = 'mayor de edad') : (result = 'menor de edad');

//   return result;
// };

// function unaFuncion(edad: number, user = 'luis'): string {
//   let result = '';
//   if (edad > 17) result = `Eres mayor de edad ${user}`;
//   else result = `No eres mayor de edad ${user}`;

//   return result;
// }

// console.log(myFuncion(18));

// //retorno NEVER en funciones son para retornar errores por ejemplo
// //Se recomienda poner never para indicar explicitamente que despachara un error.
// const errorUsuario = (): never => {
//   throw new Error('error de usuario');
// };

// //TIPOS AVANZADOS***********************************************************
// //Union type
// //Define que una variable puede ser de mas de un tipo, pero no eres recomendable poner muchos
// //tipos.

// let puntaje: number | string | boolean = 90;
// puntaje = 'hola';

// type Animal = {
//   id: number;
//   estado: string;
// };

// type Usuario = {
//   id: number;
//   name: string;
// };

// const animal: Animal | Usuario = { id: 1, estado: '', name: '' };

// //Union type con funciones
// const sumaDos = (num: number | string): number => {
//   if (typeof num === 'number') {
//     return num + 2;
//   }
//   return parseInt(num) + 2;
// };

// console.log(sumaDos('2'));

// //Intersection type
// //Sirve para crear un nuevo tipo de variable a partir de 2 o mas diferentes
// type Audit = {
//   created_at: string;
//   updated_at: string;
// };

// type Product = {
//   name: string;
// };

// const product: Audit & Product = { name: '', created_at: '', updated_at: '' };

// //Literal types
// //En este indicas literalmente que informacion puede tener una variable de este tipo
// type Fibo = 0 | 1 | 2 | 3 | 5;

// const nDeFibo: Fibo = 5;

// //Optional chaining operator
// //ejemplo 1
// const getUser = (id: number) => {
//   if (id < 0) return null;
//   return { id, name: 'felipe', created_at: new Date() };
// };

// const user = getUser(1);

// console.log('usuario', user?.created_at);

// //ejemplo 2
// const arr1 = null;

// console.log('arreglo nulo', arr1?.[0]);

// //ejemplo 3
// const fn5: any = null;

// console.log(fn5?.());

// const fn = (fn: Function) => {
//   fn?.();
// };

// console.log('ejecutando fn', fn(fn5));

// //Nullish coalescing operator
// //Sirve para cuando sea conviente que mi valor pueda ser 0 o un string vacio ??
// const difficulty: number | null = 0;

// const user2 = {
//   userName: 'luis',
//   difficulty: difficulty ?? 1,
// };

// console.log(user2);

// //Type asertion
// //Sirve para cuando estamos 100% seguros de que tipo de dato vamos a recibir y queremos forzar el tipo.
// //Se usa as.
// /*No recomendado */
// const element: any = null;
// const elemnt1 = element as number;

// /*Recomendado */
// // const input = document.getElementById('username') as HTMLInputElement;/*Forma 1*/
// const input = <HTMLInputElement>document.getElementById('username'); /*Forma 2*/
// input.value;

// //Type Narrowing
// //Tecnica para saber que hacer, segun el tipo de dato de una variable
// const narrowingFunction = (x: string | number) => {
//   if (typeof x == 'string') {
//     return x.toUpperCase();
//   }
//   if (typeof x === 'number') {
//     return x.toFixed();
//   }

//   return x;
// };

// //Type Unknown
// //Sirve para cuando no tenemos idea de que tipo de valor se va a manejar
// //Se pone en lugar de any.
// const procesar = (miVariable: unknown) => {
//   let r = '';
//   if (typeof miVariable === 'string') r = miVariable;
//   if (typeof miVariable === 'number') r = miVariable.toString();
// };

// //Programacion orientada a //objetos***********************************************************
class CPersonaje {
  //FORMA 1
  // //_ Guion bajo es por convencion para clases privadas.
  // private readonly _id: number; //readonly para no reasignarse
  // private _name: string;
  // private _nivel: number;
  // private _hp: number;
  // private _profesion?: string; //? Para marcarla como opcional no es necesario inicializarla //en el constructor

  // constructor(id: number, name: string, nivel: number, hp: number) {
  //   this._id = id;
  //   this._name = name;
  //   this._nivel = nivel;
  //   this._hp = hp;
  // }

  //FORMA 2
  //Declaras propiedades, constructor e inicializas
  private _profesion?: string;
  private static _equipo: number = 0;

  constructor(
    private readonly _id: number,
    private _name: string,
    private _nivel: number,
    private _hp: number
  ) {}

  //Getters y setters
  get hp(): number {
    return this._hp;
  }

  static get equipo(): number {
    return CPersonaje._equipo;
  }
  //Ejemplo de setter
  // set hp(cantidad: number) {
  //   this._hp += cantidad;
  // }

  subirNivel(): number {
    this._nivel += 1;
    return this._nivel;
  }

  cambiarHp(cantidad: number): number {
    this._hp += cantidad;
    return this._hp;
  }

  //Metodos estaticos
  static agregarPersonaje(): void {
    CPersonaje._equipo++;
  }
}

const personaje1 = new CPersonaje(1, 'luis', 1, 1);
personaje1.subirNivel();
personaje1.cambiarHp(10);
CPersonaje.agregarPersonaje();
console.log('Personajes', CPersonaje.equipo);
console.dir(personaje1);
// console.log(personaje1.hp);

// comprobar de que clase es un objeto
if (personaje1 instanceof CPersonaje) {
}
