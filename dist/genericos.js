"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const log = (a, b) => {
    console.log(a, b);
};
const logN = (a, b) => {
    console.log(a, b);
};
log('hola', 'mundo');
const logWithGen = (a, b) => {
    console.log(a, b);
    return a;
};
const otroEjemplo = (a, b) => {
    console.log(a, b);
    return b;
};
logWithGen(2, 'hola mundo');
logWithGen('que tal', 'hola mundo');
otroEjemplo(10, 'hello');
otroEjemplo('hello', 10);
const fetchData = (recurso) => __awaiter(void 0, void 0, void 0, function* () {
    const respuesta = yield fetch(`${recurso}`);
    return respuesta.json();
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield fetchData('/user');
    return user;
});
class CProgramador {
    constructor(t) {
        this.computador = t;
    }
}
const programador1 = new CProgramador({
    encender: () => {
        console.log('encendiendo');
    },
    apagar: () => { },
});
const programador2 = new CProgramador('hola mundo');
programador1.computador.encender();
console.log(programador2.computador);
const fetchProduct = () => {
    return {
        key: 'id del producto',
        value: { id: 'un value' },
    };
};
const fetchStock = () => {
    return {
        key: 'id del producto',
        value: 100,
    };
};
class Usuario {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const printUsuario = (t) => {
    console.log(t);
    return t;
};
printUsuario({ id: 'user_id', name: '' });
class Estado {
    constructor(data) {
        this.data = data;
    }
    agregarData(d) {
        this.data.push(d);
    }
    get Data() {
        return this.data;
    }
}
class EstadoEliminar extends Estado {
    eliminar(id) { }
}
const estadoEliminar = new EstadoEliminar([]);
console.log(estadoEliminar.Data);
//# sourceMappingURL=genericos.js.map