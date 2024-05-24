class Cliente{
    constructor(nombre,apellido,fecha_nac){
        this.nombre=nombre;
        this.apellido=apellido;
        this.fecha_nac=fecha_nac;
    }

    getEdad(){
        let hoy = new Date()
        let edad = (hoy - fecha_nac)
        return edad

        console.log(edad)
    }
}

class CtaBca extends Persona{
    constructor(nombre,apellido,fecha_nac,edad,saldo){
        super(nombre,apellido,fecha_nac)
        this.saldo=saldo;
        this.edad=edad;
    }

    consultar_saldo(){
        console.log(saldo)
    }

    depositar(depositarMonto){
        var saldo = saldo + depositarMonto;
        console.log("Depósito del monto de $"+depositarMonto+" exitoso. Saldo total de $"+saldo)
        return saldo
    }

    retirar(retirarMonto){
        var saldo = saldo - retirarMonto;
        console.log("Extracción del monto de $"+retirarMonto+" exitoso. Saldo total de $"+saldo)
        return saldo
    }

}

function registrar(){
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("surname").value;
    let fecha_nac = document.getElementById("birthdate").value;

    usuario = new Cliente(nombre,apellido,fecha_nac)
    usuario.getEdad
}

function depositarMonto{

}

function retirarMonto{

}