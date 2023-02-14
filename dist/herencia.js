"use strict";
class CDatosBasicos {
    constructor(_name, _desc, _createdAt, _createdBy) {
        this._name = _name;
        this._desc = _desc;
        this._createdAt = _createdAt;
        this._createdBy = _createdBy;
    }
    get fullYear() {
        return this._createdAt.getFullYear();
    }
}
class CProducto extends CDatosBasicos {
    constructor(_name, _desc, _createdAt, _createdBy, _stock, _sku) {
        super(_name, _desc, _createdAt, _createdBy);
        this._stock = _stock;
        this._sku = _sku;
    }
}
class CCategoria extends CDatosBasicos {
    constructor(_name, _desc, _createdAt, _createdBy) {
        super(_name, _desc, _createdAt, _createdBy);
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
}
let producto1 = new CProducto('iphone', 'smartphone', new Date(), 1, 100, 111);
let categoria = new CCategoria('celulares', '', new Date(), 1);
categoria.agregarProducto(producto1);
console.log(producto1, categoria);
//# sourceMappingURL=herencia.js.map