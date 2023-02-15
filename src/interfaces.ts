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
    throw new Error('Method not implemented.');
  }

  onomatopeya(): string {
    throw new Error('Method not implemented.');
  }
}

let perro1 = new CPerro('perro1');
perro1._name = 'juan';

console.log(perro1);
