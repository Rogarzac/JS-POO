/*
Paradigma
estructurado
instancia
plantilla

//////////////////////////////////////////LLAVE VALOR PARA VER COSAS EN LOS OBJETOS NOTA PERSONAL/////////////////
Paradigma de programacion

paradigma = la forma de hacer algo

paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


paradigmas de programacion (formas de programar)
    -Programacion imperativa: Basada en instrucciones detallada a la computadora, ejecutadas en una secuencia determinada (c, c++, Java1, python, Swift)

    -PROGRAMACION BASADA EN EVENTOS: enfocada en la gestion y respuesta de eventos (JS, c#, python)

    programacion declarativa: explicar lo quje necesitamos obtener, mas que como se hace (HTML, SQL)

    programacion orientada a objetos: toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.


    Clase: plantillas para crear objetos. Nos ayudan a definir un tipo de objetos y crear instancias (materializacion) de este tipo de objetos
*/

///Creando mi primera clase

class persona {
    ///Propiedades o atributos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";



    ///Defino un constructor que tomara los atributos como "material" para la instancia o creacion de mis objetos
    //El constructor es una funcion especial, cuya funcion es la de contruit o intanciar objetos
    //Al pasar los atributos como parametros, es importante cuidar el orden en como fueron declarados 
    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;

    }




    ///Metodos o comportamientos (funciones)
    //Para definir los metodos de mi objeto, ya no utilizo la palabra function
    hablar() {
        console.log("Hola, estoy hablando...");
    }///Cierre del metodo hablar

    dormir() {
        console.log("ZZZZZZZZZ")
    }///Cierre del metodo dormir

    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellidos: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
    }///Cierre del metodo mostrarInfo
}///Cierre de mi clase persona

/// instancia del tipo persona 
/*
Sintaxis basica de una instancia 
variable nombreObjeto = palabra reservada new nombreClase (parametros o atributos)
let persona1 = new persona("")

*/
let persona1 = new persona("Felipe", "Maqueda", 31, "felipemaqueda@gmail.com", "5512345678");
let persona2 = new persona("Naruto", "Usumaki", 22, "narutoa@gmail.com", "12345678");
let persona3 = new persona("Roberto", "Garza", 27, "rgarzacardo@gmail.com", "811526578");


///imrpimri el objeto
console.log(persona1);


////imrpimir un atributo de un objeto (apellido)
console.log(persona1.apellido);

////invocar el metodo del objeto 
persona1.dormir();
persona2.mostrarInfo();


/*
Existen 4 pilares de la POO que nos permiten ampliar las caracteristicas y dotar de funcionalidades y operaciones a nuestro codigo.

    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstraccion


*/
/////creando una nueca clase para aplicar la herencia 
class paciente extends persona {
    ///1 definicion de atributos o propiedades
    doctorAtiende = ""; ///nombre del doctor que atiende
    historialMedico = ""; ///si o no en el historial
    alergias = ""; //// alergias existentes



    ///Generacion de contructor
    constructor(nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias) {
        super (nombre, apellido, edad, email, telefono); ///super indica que traemos cosas de la clase superior
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;

    }

    ///metodoso

    //2. Metodos
    mostrarInfo() {
     console.log("Nombre: ", this.nombre);
     console.log("Apellido: ", this.apellido);
      console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
        console.log("Doctor que atiende: ", this.doctorAtiende);
        console.log("Historial Medico: ", this.historialMedico);
        console.log("Alergias: ", this.alergias);
    }
}


/////instancia de un paciente 
let paciente1 = new paciente("jesus","Gonzalez",31,"hjesusgonzales@gmail.com","852123963","simi","no","PEnicilina")
console.log(paciente1)

paciente1.mostrarInfo();
paciente1.dormir();

//Todas las claves y los valores van dentro de comillas
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}


////Tratar la infromacion y sacar datos especificos para DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}

/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicializar sus atributos (metodo constructor), imprimirlos y mostrar un mensaje con el resultado de la nota si ha aprobado o no.


    Atributos:
        - nombre
        - nota (calificacion)

    Metodos:
        - Constructor
        - Metodo evaluacion (si aprueba o no)
        - Metodo imprimirInfo (nombre y la nota)

    Logica del negocio:
        - If para evaluar la nota (si la nota es menor a 6, esta reprobado)
        - Recuperamos la informacion por medio de un prompt
        - Generamos 3 instancias para probar mi codigo (la nota sea igual a 6, la nota sea menor 6, la nota sea mayor a 6)

*/




//Creacion de la clase 3 pasos

class alumno {
//.1Atributos o propiedades
nombre;
nota;

///3 Contructor
constructor (nombre, nota){
    this.nombre = nombre;
    this.nota = nota;
}

///2.metodos
evaluacion(nota){
        //condicion para saber si esta aprobado o reprobado
        if (nota>=6){
            console.log("Aprobado");
        }else {
            console.log("Reprobado");
        }
}

imprimirInfo (){
    console.log("Nombre del alumno: ", this.nombre);
    console.log("Nota del alumno: ", this.nota);

}


}

//instancia de alumnos (3 escenarios)
let alumno1 = new alumno ("Felipe", 3);
let alumno2 = new alumno ("Felipe", 8);
let alumno3 = new alumno ("Felipe", 6);


alumno1.evaluacion(alumno1.nota);
alumno2.evaluacion(alumno2.nota);
alumno3.evaluacion(alumno3.nota);
