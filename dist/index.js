"use strict";
let mensaje = 'hola mundo';
mensaje = 'hola';
console.log(mensaje);
mensaje = 'adios';
console.log(typeof []);
let num = 10;
let nam = 'luis';
let extintos = true;
let animales = ['perro', 'gato', 'raton'];
let numbers = [1, 2, 3];
let checks = [];
let numbers2 = [];
const myfunction = (mensaje) => console.log(mensaje);
let tupla = [1, 'hola'];
let tupla2 = [1, ['hola', 'adios'], 'hello'];
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extraGrande = 'xl';
const variable1 = 0;
console.log('variable1=', variable1);
const estado = 2;
console.log('loading state', estado);
const myObjeto = {
    id: 1,
    nombre: 'luis',
    talla: 0,
    direccion: { numero: 1, calle: 'uno', pais: 'mexico' },
};
console.log(myObjeto);
const myArray = [myObjeto];
const myFuncion = (edad) => {
    let result = '';
    edad > 17 ? (result = 'mayor de edad') : (result = 'menor de edad');
    return result;
};
function unaFuncion(edad, user = 'luis') {
    let result = '';
    if (edad > 17)
        result = `Eres mayor de edad ${user}`;
    else
        result = `No eres mayor de edad ${user}`;
    return result;
}
console.log(myFuncion(18));
const errorUsuario = () => {
    throw new Error('error de usuario');
};
let puntaje = 90;
puntaje = 'hola';
const animal = { id: 1, estado: '', name: '' };
const sumaDos = (num) => {
    if (typeof num === 'number') {
        return num + 2;
    }
    return parseInt(num) + 2;
};
console.log(sumaDos('2'));
const product = { name: '', created_at: '', updated_at: '' };
const nDeFibo = 5;
const getUser = (id) => {
    if (id < 0)
        return null;
    return { id, name: 'felipe', created_at: new Date() };
};
const user = getUser(1);
console.log('usuario', user === null || user === void 0 ? void 0 : user.created_at);
const arr1 = null;
console.log('arreglo nulo', arr1 === null || arr1 === void 0 ? void 0 : arr1[0]);
const fn5 = null;
console.log(fn5 === null || fn5 === void 0 ? void 0 : fn5());
const fn = (fn) => {
    fn === null || fn === void 0 ? void 0 : fn();
};
console.log('ejecutando fn', fn(fn5));
//# sourceMappingURL=index.js.map