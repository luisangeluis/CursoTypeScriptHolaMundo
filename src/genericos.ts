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

interface KeyValue<T, V> {
  key: T;
  value: V;
}

interface Product {
  id: string;
}

const fetchProduct = (): KeyValue<string, Product> => {
  return {
    key: 'id del producto',
    value: { id: 'un value' },
  };
};

const fetchStock = (): KeyValue<string, number> => {
  return {
    key: 'id del producto',
    value: 100,
  };
};

/******************** */
//Restricciones en GENERICOS
/******************** */
//Con interfaces*****
// interface Usuario {
//   id: string;
//   name: string;
// }

//Con clases*****
class Usuario {
  constructor(public id: string, public name: string) {}
}

const printUsuario = <T extends Usuario>(t: T): T => {
  console.log(t);
  return t;
};

printUsuario({ id: 'user_id', name: '' });

class Estado<T> {
  data: T[];
  constructor(data: T[]) {
    this.data = data;
  }

  agregarData(d: T): void {
    this.data.push(d);
  }

  get Data(): T[] {
    return this.data;
  }
}

type objectId = {
  id: string;
};

class EstadoEliminar<T extends objectId> extends Estado<T> {
  eliminar(id: string) {
    this.data = this.data.filter((d) => d.id !== id);
  }
}

const estadoEliminar = new EstadoEliminar<Usuario>([]);

console.log(estadoEliminar.Data);

class EstadoUsuarios extends Estado<Usuario> {
  reiniciarPassword() {}
}

const estadoUsuarios = new EstadoUsuarios([]);
