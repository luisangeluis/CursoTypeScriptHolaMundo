"use strict";
class CPersonaje {
    constructor(_id, _name, _nivel, _hp) {
        this._id = _id;
        this._name = _name;
        this._nivel = _nivel;
        this._hp = _hp;
    }
    get hp() {
        return this._hp;
    }
    set hp(cantidad) {
        this._hp += cantidad;
    }
    subirNivel() {
        this._nivel += 1;
        return this._nivel;
    }
    cambiarHp(cantidad) {
        this._hp += cantidad;
        return this._hp;
    }
}
const personaje1 = new CPersonaje(1, 'luis', 1, 1);
personaje1.subirNivel();
personaje1.cambiarHp(10);
personaje1.hp = -1;
console.dir(personaje1);
console.log(personaje1.hp);
if (personaje1 instanceof CPersonaje) {
}
//# sourceMappingURL=index.js.map