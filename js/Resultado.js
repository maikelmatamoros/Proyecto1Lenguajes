
let objetos = new Array();
let zonas = new Array();
let subBusqueda;
let fecha1;
let fecha2;


function crearObjetos() {
    objetos = test;
    for (let i = 0; i < objetos.length; i++) {
        if (!zonas.includes(objetos[i].zona)) {
            zonas.push(objetos[i].zona);
        }
    }
}



$(document).ready(function () {
    crearObjetos();

    for (let i = 0; i < zonas.length; i++) {
        console.log(zonas[i]);
        $("#select").append(
            '<option data-tokens="">' + zonas[i] + '</option>'
        );
    }
    $('#select').selectpicker('refresh');

    $('#picker').daterangepicker({
        "showDropdowns": true,
        "showWeekNumbers": true,
        "showISOWeekNumbers": true,
        "startDate": "05/18/2020",
        "endDate": "05/24/2020",
        "opens": "center",
        "drops": "auto"
    }, function (start, end, label) {
        fecha1 = start.format('YYYY-MM-DD');
        fecha2 = end.format('YYYY-MM-DD');

    });

    filtro();
    cargarPagina();

});

$('body #contenedor1').on('click', 'button', function () {
    window.localStorage.setItem("id", $(this).attr('id'));
    window.location.href = 'DetallesAlojamiento.html';
});

let busquedaDatos=new Array();

$(document).on('click', "#buscar", function () {
    busquedaDatos=new Array();
    busquedaDatos.push($("#select option:selected").html());
    busquedaDatos.push($("#cantidad").val());
    busquedaDatos.push($("#precioMinimo").val());
    busquedaDatos.push($("#precioMaximo").val());
    if ($('#parqueo').is(":checked")) {
        busquedaDatos.push("Si");
    }else{
        busquedaDatos.push("No");
    }
    if ($('#piscina').is(":checked")) {
        busquedaDatos.push("Si");
    }else{
        busquedaDatos.push("No");
    }
    busquedaDatos.push(fecha1);
    busquedaDatos.push(fecha2);

    let jsonBusqueda=JSON.stringify(busquedaDatos);
    
    localStorage.setItem("busqueda",jsonBusqueda); 
    alert($("#cantidad").val());
    $("#contenedor1").empty();
    filtro();
    
    cargarPagina();
});


function cantOpciones(opciones) {
    let filt =new Array("false","false","false","false","false","false","false","false","0");
    let cont=0;
    if (opciones[0] !=" -- Seleccione la zona -- ") {
        filt[0]="true";
        cont++;
    }
    if (opciones[1].length > 0) {
        filt[1]="true";
        cont++;
    }
    if (opciones[2].length > 0) {
        filt[2]="true";
        cont++;
    }
    if (opciones[3].length > 0) {
        filt[3]="true";
        cont++;
    }
    if (opciones[4] == "Si") {
        filt[4]="true";
        cont++;
    }
    if (opciones[5] == "Si") {
        filt[5]="true";
        cont++;
    }
    if (opciones[6] != "SF") {
        filt[6]="true";
        cont++;
    }
    if (opciones[7] != "SF") {
        filt[7]="true";
        cont++;
    }
    filt[8]=cont;

    return filt;
}

function filtro() {
    let busqueda = JSON.parse(localStorage.getItem("busqueda"));
    let opciones = cantOpciones(busqueda);
    subBusqueda= new Array();
    if (!opciones.includes("true")) {
        for (let i = 0; i < objetos.length; i++) {
            subBusqueda.push(objetos[i]);
        }
    } else {
        for (let i = 0; i < objetos.length; i++) {

            let coincidencia = 0;
            if(opciones[0]=="true" && objetos[i].zona==busqueda[0]){
                coincidencia++;
            }
            if (opciones[1]=="true" && parseInt(objetos[i].capacidad) == parseInt(busqueda[1])) {
                coincidencia++;
            }
            if (opciones[2]=="true" && opciones[3]=="false" && parseInt(objetos[i].precio) >= parseInt(busqueda[2])) {
                coincidencia++;
            }else if(opciones[2]=="false" && opciones[3]=="true" && parseInt(objetos[i].precio) <= parseInt(busqueda[3])){
                coincidencia++;
            }else if(opciones[2]=="true" && opciones[3]=="true" && parseInt(objetos[i].precio) >= parseInt(busqueda[2]) && parseInt(objetos[i].precio) <= parseInt(busqueda[3])){
                coincidencia+=2;
            }
            if (opciones[4]=="true" && objetos[i].parqueo == busqueda[4]) {
                coincidencia++;
            }
            if (opciones[5]=="true" && objetos[i].piscina == busqueda[5]) {
                coincidencia++;
            }
            if(opciones[6]=="true" && opciones[7]=="true"){
                let noDisponibles=0;

                for(let j=0;j<objetos[i].noDisponible.length;j++){

                    if(!moment(objetos[i].noDisponible[j][0]).isBetween(busqueda[6],busqueda[7]) &&
                    !moment(objetos[i].noDisponible[j][1]).isBetween(busqueda[6],busqueda[7])){
                        noDisponibles++;
                    }
                }

                if(noDisponibles==objetos[i].noDisponible.length){
                    coincidencia+=2;
                }
            }

            if(opciones[8]==coincidencia){
                //alert("Entra: "+i);
                subBusqueda.push(objetos[i]);
            }

        }
    }

}

let contador = 1;
let paginaActual = 0;


function cargarPagina() {
    let tope = subBusqueda.length - (contador * 5);
    if (tope >= 0) {
        tope = 5;
    } else {
        tope = 5 + tope;
    }
    let actual = paginaActual * 5;
    for (let i = actual; i < (actual + tope); i++) {
        $("#contenedor1").append(
            '<div class="card cardResult mb-3 col-m-12" style="width:80%;margin: auto;">' +
            '<div class="row no-gutters">' +
            '<div class="col-md-4">' +
            '<img class="card-img" src="' + subBusqueda[i].fotosAlojamiento[0] + '" alt="C mamo" style="">' +
            '</div>' +
            '<div class="col-md-8">' +
            '<div class="card-body">' +
            '<h2 class="card-title">' + subBusqueda[i].nombre + '</h2>' +
            '<h4 class="card-text text-aling-right">Zona: ' + subBusqueda[i].zona + '</h4>' +
            '<h4 class="card-text text-aling-right">Capacidad: ' + subBusqueda[i].capacidad + '</h4>' +
            '<h4 class="card-text text-aling-right">Precio: ' + subBusqueda[i].precio + '</h4>' +
            '<button class="btn btn-primary" id="' + subBusqueda[i].id + '">Detalles</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    if(subBusqueda.length==0){
        $("#contenedor1").append(
        '<div class="card cardResult mb-3 col-m-12 " style="width:80%;margin: auto;">' +
            
            '<div class="col-md-12">' +
            '<div class="card-body text-center">' +
            '<h2 class="card-title">No se encontró alojamiento con esos parametros</h2>'+ 
            '</div>' +
            '</div>' +
            '</div>');
    }
};


$(document).on('click', '#boton', function () {
    contador++;
    paginaActual++;
    $("#contenedor1").empty();
    cargarPagina();
    if ((contador * 5) > (subBusqueda.length - 1)) {
        $("#boton").hide();
    }
    if ((contador * 5) > 0) {
        $("#prev").show();
    }

});

$(document).on('click', '#prev', function () {
    contador--;
    paginaActual--;
    console.log(contador * 5);
    $("#contenedor1").empty();
    cargarPagina();
    if ((contador * 5) <= (subBusqueda.length - 1)) {
        $("#boton").show();
    }
    if ((contador * 5) <= 5) {
        $("#prev").hide();
    }
});