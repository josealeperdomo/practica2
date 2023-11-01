console.log('hola');
/*------ EJERCICIOS A REALIZAR EN GRUPO (EN CLASE)

1) Imagina que estas desarrollando un sistema de gestión de empleados para una empresa,
   debes crear una jerarquía de clases que incluye las siguientes:

    a) Una clase llamada "Empleado" que tenga propiedades comunes como (nombre,edad y salario).

    b) Una clase llamada "Gerente" que herede de "Empleado" y tenga las propiedades adicionales como (departamento y empleados a cargo).

    c) Una clase llamada "Desarrollador" que herede de "Empleado" y tenga propiedades adicionales como (lenguaje y proyectos asignados).

    d) Implementa un constructor en cada clase para inicializar sus propiedades.

    e) Agrega métodos a las clases para obtener informacion detallada sobre cada tipo de empleado.
    
    f) Crea instancias (new) de varios empleados, incluyendo gerentes y desarrolladores, y muestra informacion sobre ellos.

2) Crea un programa que calcule e imprima la tabla de multiplicar del 1 al 10 para un
   numero especifico ingresado por el usuario. (Usar funcion y bucle for).

3) Crea un juego en el que el programa genera un numero aleatorio del 1 al 100, y luego
   le pide al usuario ese numero. El bucle "WHILE" debe continuar ejecutandose
   hasta que el usuario adivine correctamente el numero. (Investigar Math.random)

*/

/*
1) Imagina que estas desarrollando un sistema de gestión de empleados para una empresa,
   debes crear una jerarquía de clases que incluye las siguientes:

    a) Una clase llamada "Empleado" que tenga propiedades comunes como (nombre,edad y salario).

    b) Una clase llamada "Gerente" que herede de "Empleado" y tenga las propiedades adicionales como (departamento y empleados a cargo).

    c) Una clase llamada "Desarrollador" que herede de "Empleado" y tenga propiedades adicionales como (lenguaje y proyectos asignados).

    d) Implementa un constructor en cada clase para inicializar sus propiedades.

    e) Agrega métodos a las clases para obtener informacion detallada sobre cada tipo de empleado.
    
    f) Crea instancias (new) de varios empleados, incluyendo gerentes y desarrolladores, y muestra informacion sobre ellos.
*/

class Empleado{
    constructor(nombre,edad,salario){
        this._nombre = nombre;
        this._edad = edad;
        this._salario = salario;
    }
    get nombre(){
        return `Empleado: ${this._nombre}`;
    }
    get edad(){
        return `Edad: ${this._edad}`;
    }
    get salario(){
        return `Salario: ${this._salario}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, edad, salario, departamento,empleadosCargo){
        super(nombre, edad, salario);
        this._departamento = departamento;
        this._empleadosCargo = empleadosCargo;
    }
    get departamento(){
        return `departamento: ${this._departamento}`;
    }
    get empleadosCargo(){
        return `empleados a cargo: ${this._empleadosCargo}`;
    }
}

class Desarrollador extends Empleado{
    constructor(nombre, edad, salario,lenguaje,proyectosAsignados){
        super(nombre,edad,salario);
        this._lenguaje = lenguaje;
        this._proyectosAsignados = proyectosAsignados;
    }
    get lenguaje(){
        return `lenguaje: ${this._lenguaje}`;
    }
    get proyectosAsignados(){
        return `proyectos asignados: ${this._proyectosAsignados}`;
    }
}

let empleado1 = new Empleado('pedro','52','80$');
let empleado2 = new Empleado('Maria','28','80$');
let empleado3 = new Empleado('Juan','39','80$');
console.log(empleado1);
console.log(empleado2);
console.log(empleado3);
console.log(empleado1.edad);
console.log(empleado2.nombre);
console.log(empleado3.salario);

let gerente1 = new Gerente('pepe','36','1000$','Informática',3);
let gerente2 = new Gerente('jose','30','2000$', 'contabilidad', 2);
let gerente3 = new Gerente('maria','30','1500$','marketing',3);
console.log(gerente1);
console.log(gerente2);
console.log(gerente3);
console.log(gerente1.departamento);
console.log(gerente2.empleadosCargo);

let desarrollador1 = new Desarrollador('luis','39','2000$','Js','Programa informacion');
let desarrollador2 = new Desarrollador('juana','30','2000$','Js','Programa informacion');
let desarrollador3 = new Desarrollador('marcos','28','2000$','Js','Programa informacion');
console.log(desarrollador1);
console.log(desarrollador2);
console.log(desarrollador3);
console.log(desarrollador1.lenguaje);
console.log(desarrollador2.proyectosAsignados);

/*
2) Crea un programa que calcule e imprima la tabla de multiplicar del 1 al 10 para un numero especifico ingresado por el usuario. (Usar funcion y bucle for).

*/

function multiplicar(numero){
    for(let i = 1; i <= 10; i++){
        let resultado = numero * i
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

multiplicar(parseInt(prompt('ingresa un numero')))


/*
3) Crea un juego en el que el programa genera un numero aleatorio del 1 al 100, y luego le pide al usuario ese numero. El bucle "WHILE" debe continuar ejecutandose hasta que el usuario adivine correctamente el numero. (Investigar Math.random)
*/

let numAleatorio = Math.floor(Math.random()*100) + 1
console.log(numAleatorio);

let valorusuario;

while(numAleatorio != valorusuario){
    valorusuario = parseInt(prompt('adivine el numero'))
    if( numAleatorio == valorusuario){
        console.log('Felicidades, has adivinado!');
    }else if(valorusuario > numAleatorio){
        console.log('el numero que estás buscando es menor');
    }else if(valorusuario < numAleatorio){
        console.log('el numero que estás buscando es mayor');
    }else{
        console.log('No acertaste el numero');
    }
}
