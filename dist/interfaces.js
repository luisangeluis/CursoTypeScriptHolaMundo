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
        console.log('Caminando...');
    }
    onomatopeya() {
        return 'guau';
    }
}
let perro1 = new CPerro('perro1');
perro1._name = 'juan';
console.log(perro1);
perro1.caminar();
class CDiccionarioUsuarios {
}
let diccionario = new CDiccionarioUsuarios();
diccionario['1a'] = 'usuario1;';
diccionario['a1'] = 'usuario2;';
console.log(diccionario);
//# sourceMappingURL=interfaces.js.map