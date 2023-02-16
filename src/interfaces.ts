interface IAnimal {
  _name: string;
  caminar(): void;
  onomatopeya(): string;
}

class CCaballo implements IAnimal {
  _name: string;
  constructor(_name: string) {
    this._name = _name;
  }

  caminar(): void {
    console.log('Caminando...');
  }
  onomatopeya(): string {
    return 'hii';
  }
}

class CPerro implements IAnimal {
  _name: string;
  constructor(_name: string) {
    this._name = _name;
  }

  caminar(): void {
    console.log('Caminando...');
  }

  onomatopeya(): string {
    return 'guau';
  }
}

let perro1 = new CPerro('perro1');
perro1._name = 'juan';

console.log(perro1);
perro1.caminar();

//INDEX SIGNATURE, Sirve en que caso de que tengamos un objeto con propiedades dinamicas.
class CDiccionarioUsuarios {
  [id: string]: string;
}

let diccionario = new CDiccionarioUsuarios();
diccionario['1a'] = 'usuario1;';
diccionario['a1'] = 'usuario2;';

console.log(diccionario);
