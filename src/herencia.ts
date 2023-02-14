class CDatosBasicos {
  constructor(
    private _name: string,
    private _desc: string,
    private _createdAt: Date,
    private _createdBy: number
  ) {}

  get fullYear() {
    return this._createdAt.getFullYear();
  }
}

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
}

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
}

let producto1 = new CProducto('iphone', 'smartphone', new Date(), 1, 100, 111);
let categoria = new CCategoria('celulares', '', new Date(), 1);

categoria.agregarProducto(producto1);

console.log(producto1, categoria);
