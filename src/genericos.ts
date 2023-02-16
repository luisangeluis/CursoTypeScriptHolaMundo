// SIN GENERICOS
const log = (a: string, b: string): void => {
  console.log(a, b);
};

const logN = (a: string, b: string): void => {
  console.log(a, b);
};

log('hola', 'mundo');

// CON GENERICOS

const logWithGen = <T>(a: T, b: string): T => {
  console.log(a, b);
  return a;
};

const otroEjemplo = <T, V>(a: T, b: V): V => {
  console.log(a, b);

  return b;
};

logWithGen<number>(2, 'hola mundo');
logWithGen<string>('que tal', 'hola mundo');

otroEjemplo<number, string>(10, 'hello');
otroEjemplo<string, number>('hello', 10);

//GENERICOS CON PROMESAS Ejemplo
type User = {
  id: number;
  name: string;
};

const fetchData = async <T>(recurso: string): Promise<T> => {
  const respuesta = await fetch(`${recurso}`);
  return respuesta.json();
};

const main = async () => {
  const user = await fetchData<User>('/user');
  return user;
};

/******************** */
// GENERICOS EN CLASES
/******************** */
type Computador = {
  encender: () => void;
  apagar: () => void;
};

class CProgramador<T> {
  computador: T;

  constructor(t: T) {
    this.computador = t;
  }
}

const programador1 = new CProgramador<Computador>({
  encender: () => {
    console.log('encendiendo');
  },
  apagar: () => {},
});
const programador2 = new CProgramador<string>('hola mundo');

programador1.computador.encender();
console.log(programador2.computador);

/******************** */
// GENERICOS EN interfaces
/******************** */
