document.getElementById("montoDepositado").disabled = true;
document.getElementById("botonD").disabled = true;
document.getElementById("montoRetirado").disabled = true;
document.getElementById("botonR").disabled = true;

class Cliente{
    constructor(nombre,apellido,fecha_nac){
        this.nombre=nombre;
        this.apellido=apellido;
        this.fecha_nac=fecha_nac;
    }

    getEdad(){
        let hoy = new Date();
        let fecha_nac = new Date(this.fecha_nac);
        console.log(fecha_nac)
        let edad = (hoy.getFullYear() - fecha_nac.getFullYear());
        
        return edad;
    }
}

class Cuenta_Bancaria extends Cliente{
    constructor(nombre,apellido,fecha_nac,edad,saldo){
        super(nombre,apellido,fecha_nac);
        this.saldo=saldo;
        this.edad=edad;
    }

    get consultar_saldo(){
        
        document.getElementById("resultadoC").innerHTML=`<p>Saldo actual de ${this.saldo}</p>`  
        return this.saldo;
    }

    set depositar(monto){
        if (monto>1.000 && monto>=1){
        this.saldo = this.saldo + monto;
        document.getElementById("resultadoD").innerHTML=`<p>Depósito del monto de ${monto} exitoso. Saldo actual de ${this.saldo}</p>`
        } else {
            document.getElementById("resultadoD").innerHTML=`<p>El monto ingresado es inaceptable. Puede depositar un mínimo de $1 hasta $1000. Inténtelo nuevamente con un monto válido.</p>`
        }  
         
        return this.saldo
    }

    set retirar(monto){
        if (monto>this.saldo){
            document.getElementById("resultadoR").innerHTML=`<p>El monto que desea extraer supera el saldo actual. Intente con un monto menor</p>` 
        } else {
            this.saldo = this.saldo - monto;
            document.getElementById("resultadoR").innerHTML=`<p>Extracción del monto de ${monto} exitoso. Saldo actual de ${this.saldo}</p>`  
        }

        return this.saldo
    }

}

var usuario

function registrar(){
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("surname").value;
    let fecha_nac = document.getElementById("birthdate").value;

    usuario = new Cliente(nombre,apellido,fecha_nac)
    
    let edadUsuario= usuario.getEdad();
    
    if (edadUsuario > 18) {
        let saldo = 0;
        usuario = new Cuenta_Bancaria(nombre,apellido,fecha_nac,edadUsuario,saldo)
        console.log(usuario)
        document.getElementById("resultado").innerHTML=`<p>Nueva Cuenta Bancaria registrada con éxito</p>`

        document.getElementById("montoDepositado").disabled = false;
        document.getElementById("botonD").disabled = false;
        document.getElementById("montoRetirado").disabled = false;
        document.getElementById("botonR").disabled = false;
    } else {
        document.getElementById("resultado").innerHTML=`<p>Al ser menor de edad no puedes crear una cuenta bancaria aún.</p>` 
    }
    
    
}

function depositarMonto(){
    var monto = Number(document.getElementById("montoDepositado").value);
    usuario.depositar = monto
}

function retirarMonto(){
    let monto = Number(document.getElementById("montoRetirado").value);
    usuario.retirar = monto
}

function consultarSaldo(){
    usuario.consultar_saldo
}

/*Cuando guardamos los objetos o información en el Storage de JavaScript
localStorage.setitem('data',Json.stringify(data));

cuando recuperemos aquel string necesitamos pasarlo a json para poder utilizarlo:
let aux1=localStorage.getItem(Json.parse('data'));



localStorage.setItem('clave','123');



*/
