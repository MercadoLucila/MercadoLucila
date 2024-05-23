class Persona{
    constructor(name,lastname,gender,city,email,fecha_nacimiento){
        this.name=name;
        this.lastname=lastname;
        this.gender=gender;
        this.city=city;
        this.email=email;
        this.fecha_nacimiento=fecha_nacimiento;
    }

    getEdad(edad){
        let anio = new Date();
        let anioactual = [
            anio.getFullYear(),
            anio.getMonth(),
            anio.getDate()];

        
        console.log(anioactual)
        edad = (anioactual - this.fecha_nacimiento)
        return edad
        console.log(edad)
    }

    saludar(){
        console.log(`hola ${this.name}`)
    }

    queEdad(){
        console.log(`${this.name} tiene ${edad} años.`)
    }

}

class Cliente extends Persona {
    constructor(name,lastname,gender,city,email,cuenta) {
        super(name,lastname,gender,city,email)
        this.cuenta=cuenta;
    }
   

}

class Empleado extends Persona{
    constructor(name,lastname,gender,city,email,legajo) {
        super(name,lastname,gender,city,email)
        this.legajo=legajo;
    }
}

function buscar(edad){
      let url="https://randomuser.me/api/";
      fetch(url)
        .then(response => response.json())
        .then(data =>{
            let fechaAPI = data.results[0].dob.date;
            let recortefecha =fechaAPI.substring(0,10);
            let separarfecha=recortefecha.split("-",3);
            var fechadef=Number(separarfecha)

            console.log(fechadef)

            var usuario = new Persona (data.results[0].name.first,data.results[0].name.last,data.results[0].gender,data.results[0].location.city,separarfecha)
            
            edad=usuario.getEdad(edad)

            console.log(edad) 
        
            if (edad<30){
                var usuario = new Cliente (data.results[0].name.first,data.results[0].name.last,data.results[0].gender,data.results[0].location.city,data.results[0].email,fecha)
                 }

            if (edad>30){
                var usuario = new Empleado (data.results[0].name.first,data.results[0].name.last,data.results[0].gender,data.results[0].location.city,data.results[0].email,fecha)   
                }
            
                console.log(usuario)
                usuario.saludar()
        })

}