var cantidadProdsCarrito = 0;
var preciototal = 0;
var preciototalImpuesto = 0;
var array_Ventas = [0, "", ""];
var string_web_cart;

class carrito {
    constructor(price, nameRest, nameProd) {
        this.nameProd = nameProd;
        this.nameRest = nameRest;
        this.price = price;
    }
    getData() { return '<p>' + this.price + '</p> <p>' + this.nameRest + '</p><p>' + this.nameProd + '</p>' }
}


function agregar_a_carrito(precio, nameRest, nameProd) {
    
    preciototalImpuesto = preciototalImpuesto + precio;
    
    preciototalImpuesto = preciototalImpuesto + precio * 0.13;

    preciototal = preciototal + precio;
   
    var cart = new carrito(precio, nameRest, nameProd);
    array_Ventas.push(cart);
    cantidadProdsCarrito += 1;

    window.localStorage.setItem("cantidadProdsCart", cantidadProdsCarrito);
    window.localStorage.setItem("precioTotalImpuestoG", preciototalImpuesto);
    window.localStorage.setItem("precioTotalG", preciototal);

    window.localStorage.setItem("arrayCartG", array_Ventas);

    var precioTotalG1 = window.localStorage.getItem("precioTotalG");
    var cantidadProdsCartG = window.localStorage.getItem("cantidadProdsCart");
    var precioTotalImpuestoG1 = window.localStorage.getItem("precioTotalImpuestoG");

    document.getElementById("cantidadProductosCarrito").innerHTML = "<p>" + cantidadProdsCartG + "</p> <p>" + precioTotalG1 + "</p> <p>" + precioTotalImpuestoG1 + "</p>"
    var cart = array_Ventas.pop();
    string_web_cart = string_web_cart + cart.getData();
    window.localStorage.setItem("carrito1", string_web_cart);
    alert(string_web_cart);


    //obtenerCarrito(array_Ventas);
}
function obtenerCarrito(array1) {
    //var array1 = window.localStorage.getItem("arr_global");
    array1.forEach(function (elemento, indice, array) {
        var obj1 = elemento;
        console.log(elemento, indice);
    });


    /*var cantArr = array.length;
    var mostrar = array.pop();
    alert(cantArr);

*/}

function mostrarCarrito() {
    var cart = window.localStorage.getItem("carrito1");
    var precioTotalG1 = window.localStorage.getItem("precioTotalG");
    var cantidadProdsCartG = window.localStorage.getItem("cantidadProdsCart");
    var precioTotalImpuestoG1 = window.localStorage.getItem("precioTotalImpuestoG");

    document.getElementById("carrito").innerHTML = cart + '<p> Precio total:' + precioTotalG1 + '</p> <p> Precio con impuestos:' + precioTotalImpuestoG1 + '</p>';
}

function completarVenta() {
    var provincia = document.getElementById("provincia").value;
    var canton = document.getElementById("canton").value;
    var distrito = document.getElementById("distrito").value;
    var otras = document.getElementById("otrasseñas").value;
    var telefono = document.getElementById("telefono").value;

    var cart = window.localStorage.getItem("carrito1");
    var precioTotalG1 = window.localStorage.getItem("precioTotalG");
    var cantidadProdsCartG = window.localStorage.getItem("cantidadProdsCart");
    var precioTotalImpuestoG1 = window.localStorage.getItem("precioTotalImpuestoG");

    if (precioTotalG1 > 0 && cantidadProdsCartG > 0 && precioTotalImpuestoG1 > 0 && provincia != "" && canton != "" && distrito != "" && otras != "" && telefono != "") {
        alert("Se hizo el envío con éxito");
        cantidadProdsCarrito = 0;
        preciototal = 0;
        preciototalImpuesto = 0;
        array_Ventas = [0, "", ""];
        string_web_cart;
        window.localStorage.setItem("cantidadProdsCart", cantidadProdsCarrito);
        window.localStorage.setItem("precioTotalImpuestoG", preciototalImpuesto);
        window.localStorage.setItem("precioTotalG", preciototal);
        window.localStorage.setItem("carrito1", string_web_cart);

    } else {
        alert("Falta de informacion");
    }


}

