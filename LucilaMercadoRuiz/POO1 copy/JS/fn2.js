class Persona{
    constructor(name,lastname,gender,city,email){
        this.name=name;
        this.lastname=lastname;
        this.gender=gender;
        this.city=city;
        this.email=email;
    }

    saludar(){
        console.log(`hola ${this.name}`)
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

function buscar(){
      let url="https://randomuser.me/api/";
      fetch(url)
        .then(response => response.json())
        .then(data =>{
        
            let edad = data.results[0].dob.age;

            console.log(edad) 
        
            if (edad<18){
                var usuario = new Cliente (data.results[0].name.first,data.results[0].name.last,data.results[0].gender,data.results[0].location.city,data.results[0].email)
                }

            if (edad>18){
                var usuario = new Empleado (data.results[0].name.first,data.results[0].name.last,data.results[0].gender,data.results[0].location.city,data.results[0].email)   
                }
            
                console.log(usuario)
                usuario.saludar()
        })

}