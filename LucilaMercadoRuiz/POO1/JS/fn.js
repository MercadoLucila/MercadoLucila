class Persona{
    constructor(nombre,apellido,fecha_nacimiento){ 
        
        /*Metodo constructor pasa parámetros/atributos 
        -No es encesario declarar una clase constructura
        -constructor a la hora de instanciar una variable estamos obligados a pasar los atributos a la hora de definirlo. 
        -De lo contrario, simplemente declaramos el objeto, asì podemos declararlo sin atributos.
        */
        this.nombre= nombre;
        this.apellido= apellido;
        this.fecha_nacimiento=fecha_nacimiento;
    }

    getEdad() {
        let anio = new Date()
        let edad = (anio.getFullYear() - this.fecha_nacimiento);
    
    return edad
    //console.log(`${this.nombre} tiene ${edad} años`)
    }
}

const luz = new Persona ("Lucila","Mercado Ruiz",2002) 
/* se establece un nuevo elemento 
asignándole los atributos del objeto definido anteriormente(Persona), 
a continuación especificando cuáles son sus atributos al ser clasificado 
como tal objeto */

let edad=luz.getEdad

console.log (`${luz.nombre} tiene ${edad} años`)
console.log (`${luz.nombre} ${luz.apellido} tiene ${edad} años siendo mujer ((sin derechos)) `)


/* let Clifford = new Perro();

-las clases,en sus nombres, siempre la primera letra es mayúscula
-el "new" sirve para instanciar

Clifford.ladrar();
*/

class Cliente extends Persona{
    /* 
    -con "extends" declaramos un objeto como hijo del segundo Objeto mencionado
    -no hay herencia múltiple
    */
}