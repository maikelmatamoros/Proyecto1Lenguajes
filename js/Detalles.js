let alojamientos = new Array();
let alojamientoSeleccionado;

let fecha1;
let fecha2;

function crearObjetos() {
    let id = localStorage.getItem('id');

    alojamientos = test;
    for (let i = 0; i < alojamientos.length; i++) {
        if (alojamientos[i].id == id) {
            alojamientoSeleccionado = alojamientos[i];
            break;
        }
    }
}

$(document).on('click',"#btnReserva",function () {
    localStorage.setItem("fechaI",fecha1);
    localStorage.setItem("fechaF",fecha2);
    localStorage.setItem("precio",alojamientoSeleccionado.precio);
    window.location.href = 'PaginaDePago.html'; 
});


$(document).ready(function () {
    crearObjetos();

    for (let i = 0; i < alojamientoSeleccionado.fotosAlojamiento.length; i++) {
        if (i == 0) {
            $("#indicadores").append(
                '<li data-target="#demo" data-slide-to="0" class="active"></li>'
            );
            $("#imagenes").append(
                '<div class="carousel-item active">' +
                '<img class="d-block" src="' + alojamientoSeleccionado.fotosAlojamiento[i] + '" width="600" heigth="200" >' +
                '</div>'
            );
        } else {

            $("#indicadores").append(
                '<li data-target="#demo" data-slide-to="' + i + '"></li>'
            );
            $("#imagenes").append(
                '<div class="carousel-item">' +
                '<img class="d-block" src="' + alojamientoSeleccionado.fotosAlojamiento[i] + '" width="600" heigth="200" >' +
                '</div>'
            );
        }
    }

    $("#infoAlquiler").append(
        '<h3 class="card-text">Precio por noche: ¢' + alojamientoSeleccionado.precio + '</h3>'
    );
    $("#seccionDetalle").append(
        '<div class="col-md-12"><h1 class="card-text">' + alojamientoSeleccionado.nombre + '</h1></div>' +
        '<div class="col-md-3 col-sm-6"><h2><span class="badge badge-secondary">Parqueo: ' + alojamientoSeleccionado.parqueo + '</span></h2></div>' +
        '<div class="col-md-3 col-sm-6"><h2><span class="badge badge-secondary">Piscina: ' + alojamientoSeleccionado.piscina + '</span></h2></div>' +
        '<div class="col-md-3 col-sm-6"><h2><span class="badge badge-secondary">Camas: ' + alojamientoSeleccionado.capacidad + '</span></h2></div>' +
        '<div class="col-md-3 col-sm-6"><h2><span class="badge badge-secondary">' + alojamientoSeleccionado.modalidad + '</span></h2></div>' +
        '<div class="col-md-12"><h4 class="card-text">' + alojamientoSeleccionado.descripcion + '</h4></div>'
    );


    $('#datepicker').daterangepicker({
        "showDropdowns": true,
        "showWeekNumbers": true,
        "showISOWeekNumbers": true,
        "linkedCalendars": false,
        "showCustomRangeLabel": false,
        "startDate": "05/17/2020",
        "endDate": "05/23/2020",
        "opens": "center"
    }, function (start, end, label) {
        fecha1 = start.format('YYYY-MM-DD');
        fecha2 = end.format('YYYY-MM-DD');

    });

});