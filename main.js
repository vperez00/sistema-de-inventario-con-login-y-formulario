"use strict";


class Mercancia {
    constructor(mercancia, valor, cantidad) {
        this.mercancia = mercancia;
        this.valor = valor;
        this.cantidad = cantidad;
    }//Permite convertir el objeto a texto legible
    toString() {
        return `Mercancia: ${this.mercancia}, Valor: ${this.valor}, Cantidad: ${this.cantidad}, Total: ${this.valor * this.cantidad}`;
    }
}
//Creamos un objeto Inventario donde productos es un arreglo
class Inventario {
    constructor(listaMercancia) {
        this.Mercancia = listaMercancia;
    }
    
    agregar(MercanciaNuevo) {
   
        this.Mercancia.push(MercanciaNuevo);
    }
}

let inventariomercancia = new Inventario([]);

function ingresar() {
    let mercancia = document.getElementById("Mercancia").value;
    let valor = Number(document.getElementById("valor").value);
    let cantidad = Number(document.getElementById("cantidad").value);
    document.getElementById("correcto").innerText ='';

    let validar = (() => {
        //Verificación de campos vacíos
        let mensaje = "";

        if (mercancia == "") {
            mensaje += "Ingrese un Mercancia" + '\n';
        }
        if (valor == "") {
            mensaje += "Ingrese un valor" + '\n';

        }
        if (cantidad == "") {
            mensaje += "Ingrese una cantidad" + '\n';
        }
        
        if (isNaN(valor)) {
            mensaje += "Ingrese un valor" + '\n';
        }
        if (isNaN(cantidad)) {
            mensaje += "Ingrese una cantidad" + '\n';
        }
        let parrafo_errores = document.getElementById("mensaje");
        parrafo_errores.innerText = mensaje;
        //Si no hay mensajes de error, retorna true
        return mensaje == "" ? true : false;
    })

    if (validar()) {

        let nuevo = new Mercancia(mercancia, valor, cantidad);
        inventariomercancia.agregar(nuevo);
        document.getElementById("correcto").innerText = `Mercancia agregado correctamente`;
        document.getElementById("form").reset();
    }
}

function listar() {
    let resultado = document.getElementById("lista");
  
     if (inventariomercancia.Mercancia == "") { 
        resultado.innerText = "No ha ingresado ningúna Mercancia aún";
    } else {
        document.getElementById("lista").innerText = ""; 
        inventariomercancia.Mercancia.forEach(Mercancia => resultado.innerText += Mercancia.toString() + '\n');
        inventariomercancia.Mercancia.forEach(Mercancia => console.log(Mercancia.toString()));
    }
}
function mostrar(){
    let resultado2 = document.getElementById("resultado2")
    
    if (inventariomercancia.Mercancia= "mercancia== cantidad-valor") { 
        resultado2.innerText = "No ha ingresado ningúna Mercancia aún";
    } else {
        document.getElementById("resultado2").innerText = ""; 
        inventariomercancia.Mercancia.forEach(Mercancia => resultado.innerText += Mercancia.toString() + '\n');
        inventariomercancia.Mercancia.forEach(Mercancia => console.log(Mercancia.toString()));
    }
}

