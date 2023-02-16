//Configuraciones en tscconfig.json
// Habilitar noImplicitOverride: true

abstract class CDatosBasicos {
  constructor(
    private _name: string,
    private _desc: string,
    private _createdAt: Date,
    private _createdBy: number
  ) {}

  //Getters y setters
  get fullYear() {
    return this._createdAt.getFullYear();
  }

  get fullDescripcion() {
    return `${this._name} - ${this._desc}`;
  }

  //Metodo abstract
  abstract guardar(): void;
}

//Class CProducto
class CProducto extends CDatosBasicos {
  constructor(
    _name: string,
    _desc: string,
    _createdAt: Date,
    _createdBy: number,
    private _stock: number,
    private _sku: number
  ) {
    super(_name, _desc, _createdAt, _createdBy);
  }

  //Metodo override
  override get fullDescripcion(): string {
    return `PRODUCTO: ${super.fullDescripcion}`;
  }

  //Metodo abstract
  guardar(): void {
    console.log('Guardando producto...');
  }
}

//Class CCategoria
class CCategoria extends CDatosBasicos {
  public productos: CProducto[] = [];

  constructor(
    _name: string,
    _desc: string,
    _createdAt: Date,
    _createdBy: number
  ) {
    super(_name, _desc, _createdAt, _createdBy);
  }

  agregarProducto(producto: CProducto): void {
    this.productos.push(producto);
  }

  //Metodo override
  override get fullDescripcion(): string {
    return `CATEGORIA: ${super.fullDescripcion}`;
  }

  //Metodo abstract
  guardar(): void {
    console.log('Guardando categoria...');
  }
}

let producto1 = new CProducto('iphone', 'smartphone', new Date(), 1, 100, 111);
let categoria = new CCategoria('celulares', 'Son celulares', new Date(), 1);

categoria.agregarProducto(producto1);

// console.log(producto1, categoria);
console.log(categoria.fullDescripcion);
console.log(producto1.fullDescripcion);
