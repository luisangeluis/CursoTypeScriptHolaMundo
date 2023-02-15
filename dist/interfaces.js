"use strict";
class CCaballo {
    constructor(_name) {
        this._name = _name;
    }
    caminar() {
        console.log('Caminando...');
    }
    onomatopeya() {
        return 'hii';
    }
}
class CPerro {
    constructor(_name) {
        this._name = _name;
    }
    caminar() {
        throw new Error('Method not implemented.');
    }
    onomatopeya() {
        throw new Error('Method not implemented.');
    }
}
let perro1 = new CPerro('perro1');
perro1._name = 'juan';
console.log(perro1);
//# sourceMappingURL=interfaces.js.map