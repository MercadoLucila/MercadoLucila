class Persona{
    constructor(nombre,apellido,dni,nacionalidad,fecha_nacimiento){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.nacionalidad=nacionalidad;
        this.fecha_nacimiento=fecha_nacimiento;
    }
    saludar(){
        console.log(`hola ${this.nombre}`)
    }

}

    /*getEdad() {
        let anio = new Date()
        let edad = (anio.getFullYear() - this.fecha_nacimiento);
    
    return edad
    //console.log(`${this.nombre} tiene ${edad} años`)
    }*/


class Cliente extends Persona {
    constructor(nombre,apellido,dni,nacionalidad,fecha_nacimiento,cuenta){
        super(nombre,apellido,dni,nacionalidad,fecha_nacimiento)
        this.cuenta=cuenta;
       }
    }

let luz= new Cliente ("Lucila","Mercado Ruiz",44421224,"argentina",2002)

console.log(luz)
luz.saludar()
