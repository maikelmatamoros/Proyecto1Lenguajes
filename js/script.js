var cantidadProdsCarrito = 0;
var preciototal = 0;
var lat = 0;
var log = 0;

class restauranteClass {
    constructor(nombre, descripcion, ubicacion, horario) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.horario = horario;
    }
    getData() {
        return '<p><h3>' + this.nombre + ': </h3></p><p>' + this.ubicacion + '</p> <p>' + this.descripcion + '</p><p>' + this.horario + '</p>';
    }
}
class producto {
    constructor(nombre, foto, tamaño, precio, nombreRestaurante) {
        this.nombre = nombre;
        this.foto = foto;
        this.tamaño = tamaño;
        this.precio = precio;
        this.nombreRestaurante = nombreRestaurante;
    }
    getData() {
        return '<p>' + this.nombreRestaurante + '</p> <img src="' + this.foto +
            '" width="150" height="100"/>' + '<p>'
            + this.nombre + '</p><p>' + this.precio +
            '</p>' + '<button type="button" class="btn btn-success" onclick="agregar_a_carrito(' +
            this.precio + ", '" + this.nombreRestaurante + "', '" + this.nombre + "' " + ')"> Añadir a carrito</button>';
    }
}
class promocion {
    constructor(nombreRest, nombreProd, foto, precio) {
        this.nombreRest = nombreRest;
        this.nombreProd = nombreProd;
        this.foto = foto;
        this.precio = precio;
    }
    getData() {
        return '<p>' + this.nombreRest + '</p> <img src="' + this.foto +
            '" width="150" height="100"/>' + '<p>'
            + this.nombreProd + '</p><p>' + this.precio +
            '</p>' + '<button type="button" class="btn btn-success" onclick="agregar_a_carrito(' +
            this.precio + ", '" + this.nombreRest + "', '" + this.nombreProd + "' " + ')"> Añadir a carrito</button>';
    }
}




var rest1 = new restauranteClass('Mc Donalds', 'Comida Rápida', 'Cartago Costa Rica', 'L-D 8am-11pm');
var rest2 = new restauranteClass('KFC', 'Comida Rápida', 'San José Costa Rica', 'L-S: 8am-11pm D: 9am-10pm');
var rest3 = new restauranteClass('Pizza Hut', 'Comida Rápida', 'San José Costa Rica', 'L-S: 8am-11pm D: 9am-10pm');
var rest4 = new restauranteClass('Taco Bell', 'Comida Rápida', 'San José Costa Rica', 'L-S: 8am-11pm D: 9am-10pm');
var rest5 = new restauranteClass('Sub Way', 'Comida Rápida', 'San José Costa Rica', 'L-S: 8am-11pm D: 9am-10pm');


//Comienzo Taco Bell
var prodTaco1 = new producto('Burrito Pinto', 'IMG/Restaurante4/imagen1.png', 'Mediano', 1990, rest4.nombre);
var prodTaco2 = new producto('Burrito Bacon', 'IMG/Restaurante4/imagen2.png', 'Mediano', 1990, rest4.nombre);
var prodTaco3 = new producto('Combo desayuno', 'IMG/Restaurante4/imagen3.png', 'Grande', 2350, rest4.nombre);
var prodTaco4 = new producto('Mexican Pizza', 'IMG/Restaurante4/imagen4.png', 'Pequeño', 3150, rest4.nombre);
var prodTaco5 = new producto('Gordita Crunch', 'IMG/Restaurante4/imagen5.png', 'Mediano', 3300, rest4.nombre);
var prodTaco6 = new producto('Xtra Big Burrito', 'IMG/Restaurante4/imagen6.png', 'Mediano', 3500, rest4.nombre);
var arreglo = [prodTaco1.precio, prodTaco2.precio, prodTaco3.precio, prodTaco4.precio, prodTaco5.precio, prodTaco6.precio];
var maximoTaco = 0;

for (var i = 0, len = arreglo.length; i < len; i++) {
    if (maximoTaco < arreglo[i]) {
        maximoTaco = arreglo[i];
    }
}
/**Terminan taco bell*/

//Comienzo KFC
var prodKFC1 = new producto('Combo Tipico', 'IMG/Restaurante3/imagen1.jpg', 'Mediano', 2950, rest2.nombre);
var prodKFC2 = new producto('WOW BOX', 'IMG/Restaurante3/imagen2.png', 'Mediano', 2000, rest2.nombre);
var prodKFC3 = new producto('Mega Mix', 'IMG/Restaurante3/imagen3.png', 'Gigante', 10900, rest2.nombre);
var prodKFC4 = new producto('Duo Crispy', 'IMG/Restaurante3/imagen4.jpg', 'Grande', 5500, rest2.nombre);
var prodKFC5 = new producto('Pieza de Pollo', 'IMG/Restaurante3/imagen5.jpg', 'Mediano', 1900, rest2.nombre);
var prodKFC6 = new producto('Combo Buenisimo', 'IMG/Restaurante3/imagen6.png', 'Mediano', 3300, rest2.nombre);
var prom3 = new promocion('KFC', 'Solo por Hoy', 'IMG/Restaurante4/promo1.jpg', 1950);

var arreglo = [prodKFC1.precio, prodKFC2.precio, prodKFC3.precio, prodKFC4.precio, prodKFC5.precio, prodKFC6.precio];
var maximoKfc = 0;

for (var i = 0, len = arreglo.length; i < len; i++) {
    if (maximoKfc < arreglo[i]) {
        maximoKfc = arreglo[i];
    }
}
//Termina KFC
//Comienza Pizza hut
var prodPizza1 = new producto('Pizza Suprema', 'IMG/Restaurante1/imagen1.jpg', 'Pequeño', 7950, rest3.nombre);
var prodPizza2 = new producto('Pizza Jamon y queso', 'IMG/Restaurante1/imagen2.jpg', 'Mediano', 7500, rest3.nombre);
var prodPizza3 = new producto('Pizza Veggie Lovers', 'IMG/Restaurante1/imagen3.jpg', 'Grande', 7950, rest3.nombre);
var prodPizza4 = new producto('Pizza Napolitana', 'IMG/Restaurante1/imagen4.png', 'Mediano', 7950, rest3.nombre);
var prodPizza5 = new producto('Pizza Cheese Lovers', 'IMG/Restaurante1/imagen5.png', 'Mediano', 7950, rest3.nombre);
var prodPizza6 = new producto('Spaguetti Supremo', 'IMG/Restaurante1/imagen6.png', 'Mediano', 4315, rest3.nombre);
var prom2 = new promocion('Pizza Hut', 'Popcorn Grande', 'IMG/Restaurante3/promo1.jpg', 1200);
var arreglo = [prodPizza1.precio, prodPizza2.precio, prodPizza3.precio, prodPizza4.precio, prodPizza5.precio, prodPizza6.precio];
var maximoPizza = 0;

for (var i = 0, len = arreglo.length; i < len; i++) {
    if (maximoPizza < arreglo[i]) {
        maximoPizza = arreglo[i];
    }
}
//Termina Pizza hut
//Comienza Mc Donalds
var prodMC1 = new producto('Club House', 'IMG/Restaurante2/imagen1.png', 'Mediano', 2445, rest1.nombre);
var prodMC2 = new producto('BigMac', 'IMG/Restaurante2/imagen2.png', 'Pequeño', 2200, rest1.nombre);
var prodMC3 = new producto('Cuarto de libra', 'IMG/Restaurante2/imagen3.png', 'Mediano', 2050, rest1.nombre);
var prodMC4 = new producto('Pollo Clasic', 'IMG/Restaurante2/imagen4.png', 'Mediano', 3025, rest1.nombre);
var prodMC5 = new producto('Mc Wrap Pollo', 'IMG/Restaurante2/imagen5.png', 'Grande', 5020, rest1.nombre);
var prodMC6 = new producto('Club House Pollo', 'IMG/Restaurante2/imagen6.png', 'Mediano', 2445, rest1.nombre);
var prom1 = new promocion('McDonalds', 'Combo Mediano', 'IMG/Restaurante2/promo1.jpg', 2190);
var arreglo = [prodMC1.precio, prodMC2.precio, prodMC3.precio, prodMC4.precio, prodMC5.precio, prodMC6.precio];
var maximoMC = 0;

for (var i = 0, len = arreglo.length; i < len; i++) {
    if (maximoMC < arreglo[i]) {
        maximoMC = arreglo[i];
    }
}
// Termina Mc donalds
//Comienza Subway
var prodSub1 = new producto('Pavo y Jamon', 'IMG/Restaurante5/imagen1.png', 'Mediano', 2000, rest5.nombre);
var prodSub2 = new producto('Pollo Pizziola', 'IMG/Restaurante5/imagen2.jpg', 'Mediano', 2100, rest5.nombre);
var prodSub3 = new producto('Atun', 'IMG/Restaurante5/imagen3.jpg', 'Mediano', 1900, rest5.nombre);
var prodSub4 = new producto('Pollo Teriyaki', 'IMG/Restaurante5/imagen4.jpg', 'Mediano', 3200, rest5.nombre);
var prodSub5 = new producto('Mariscos y Cangrejo', 'IMG/Restaurante5/imagen5.png', 'Mediano', 5500, rest5.nombre);
var prodSub6 = new producto('Turkey Bacon', 'IMG/Restaurante5/imagen6.png', 'Mediano', 4000, rest5.nombre);
var arreglo = [prodSub1.precio, prodSub2.precio, prodSub3.precio, prodSub4.precio, prodSub5.precio, prodSub6.precio];
var maximoSW = 0;

for (var i = 0, len = arreglo.length; i < len; i++) {
    if (maximoSW < arreglo[i]) {
        maximoSW = arreglo[i];
    }
}


document.getElementById("r1").innerHTML = rest1.getData();
document.getElementById("r2").innerHTML = rest2.getData();
document.getElementById("r3").innerHTML = rest3.getData();
document.getElementById("r4").innerHTML = rest4.getData();
document.getElementById("r5").innerHTML = rest5.getData();
document.getElementById("p1").innerHTML = prom1.getData();
document.getElementById("p2").innerHTML = prom2.getData();
document.getElementById("p3").innerHTML = prom3.getData();

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
        labels: [rest1.nombre, rest2.nombre, rest3.nombre, rest4.nombre, rest5.nombre],
        datasets: [{
            label: 'Producto más costoso en colones',
            backgroundColor: ['rgb(100, 119, 222)', 'rgb(100, 99, 132)', 'rgb(100, 250, 102)', 'rgb(150,199, 232)', 'rgb(100, 99, 22)'],
            borderColor: 'rgb(255, 99, 132)',
            data: [maximoMC, maximoKfc, maximoPizza, maximoTaco, maximoSW]
        }]
    },
    // Configuration options go here
    options: {}
});

//mcd
function addR1onDOM() {
    document.getElementById("colRest").innerHTML = rest1.getData()
    document.getElementById("col1").innerHTML = prodMC1.getData() + prodMC2.getData();
    document.getElementById("col2").innerHTML = prodMC3.getData() + prodMC4.getData();
    document.getElementById("col3").innerHTML = prodMC5.getData() + prodMC6.getData();
    var lat = 9.865876;
    var log = -83.920645;
    initMap();
}

//kfc
function addR2onDOM() {
    document.getElementById("colRest").innerHTML = rest2.getData();
    document.getElementById("col1").innerHTML = prodKFC1.getData() + prodKFC6.getData();
    document.getElementById("col2").innerHTML = prodKFC2.getData() + prodKFC3.getData();
    document.getElementById("col3").innerHTML = prodKFC5.getData() + prodKFC4.getData();
    var lat=9.935713;
    var log=-84.093822;
    initMap();
    }
//Pizza Hut
function addR3onDOM() {
    document.getElementById("colRest").innerHTML = rest3.getData();
    document.getElementById("col1").innerHTML = prodPizza1.getData() + prodPizza2.getData();
    document.getElementById("col2").innerHTML = prodPizza3.getData() + prodPizza4.getData();
    document.getElementById("col3").innerHTML = prodPizza5.getData() + prodPizza6.getData();
    var lat=9.935512;
    var log=-84.091569;
    initMap();  
}
//tacobell
function addR4onDOM() {
    document.getElementById("colRest").innerHTML = rest4.getData();
    document.getElementById("col1").innerHTML = prodTaco1.getData() + prodTaco2.getData();
    document.getElementById("col2").innerHTML = prodTaco3.getData() + prodTaco4.getData();
    document.getElementById("col3").innerHTML = prodTaco5.getData() + prodTaco6.getData();
    initMap();   
}//sub
function addR5onDOM() {
    document.getElementById("colRest").innerHTML = rest5.getData();
    document.getElementById("col1").innerHTML = prodSub1.getData() + prodSub2.getData();
    document.getElementById("col2").innerHTML = prodSub3.getData() + prodSub4.getData();
    document.getElementById("col3").innerHTML = prodSub5.getData() + prodSub6.getData();
    var lat=9.935450;
   var log=-84.055524;
    initMap();
}
function initMap() {
    navigator.geolocation.getCurrentPosition(coordenadas);
}//Fin de la funcion initMap.

function coordenadas(position) {
    var directionsService = new google.maps.DirectionsService
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var waypts = [{
        location: {
            lat: lat,
            lng: lon
        },
        stopover: true
    }, {
            location: {
                lat: 9.865876,
                lng: -83.920645
            }, stopover: true
        }];
    var map = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 35,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            center: {
                lat: waypts[0].location.lat,
                lng: waypts[0].location.lng
            }
        });
    directionsDisplay.setMap(map);
    directionsService.route({
        origin: {
            lat: waypts[0].location.lat,
            lng: waypts[0].location.lng
        },
        destination: {
            lat: waypts[0].location.lat,
            lng: waypts[0].location.lng
        },
        waypoints: waypts,
        travelMode: google.maps.TravelMode.WALKING
    },
        function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Ha fallado la comunicación con el mapa a causa de: ' + status);
            }
        });
}
