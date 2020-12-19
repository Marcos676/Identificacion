//IDENTIFICACION
/*Crear una funcion que reciba dos parametros: 'user' y 'password'. Usando SWITCH mostrar en consola los siguientes mensajes, según corresponda:
1.- "Bienvenido a nuestro sitio!", (si el usuario es "admin" y la contraseña es 1234)
2.- Contraseña incorrecta
3.- Usuario incorrecto
4.- Usuario y Contraseña incorrectos
5.- Debe ingresar los datos requeridos
*/

function identificacion(user, password){
    switch (true && true){
        case user === undefined || password === undefined :
            return 'Debe ingresar los datos requeridos';
            break;
        case user === 'admin' && password === 1234:
            return 'Bienvenido a nuestro sitio';
            break;
        case user === 'admin' && password !== 1234:
            return 'Contraseña incorrecta';
            break;
        case user !== 'admin' && password === 1234:
            return 'Usuario incorrecto';
            break;
        case user !== 'admin' && password !== 1234:
            return 'Usuario y Contraseña incorrectos';
            break;
    }
}
console.log(identificacion( 'admin' , 1234 ));
