
let objetos = new Array();
function crearObjetos() {
    objetos = test;
}
let contador = 1;
let paginaActual = 0;
$(document).ready(function () {
    crearObjetos();
    cargarPagina();
});



function cargarPagina() {

    for (let i = paginaActual * 5; i < contador * 5; i++) {
        //console.log(objetos[i].nombre+"\n");
        $("#contenedor").append(
            '<div class="card mb-3 col-m-12" style="width:80%;">' +
            '<div class="row no-gutters">' +
            '<div class="col-md-4">' +
            '<img class="card-img" src="' + objetos[i].fotosAlojamiento[0] + '" alt="C mamo" style="">' +
            '</div>' +
            '<div class="col-md-8">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + objetos[i].nombre + '</h5>' +
            '<p class="card-text">Camas: ' + objetos[i].capacidad + '</p>' +
            '<p class="card-text">Precio: ' + objetos[i].precio + '</p>' +
            '<button class="btn btn-primary">Detalles</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }
};


$('#boton').on("click", function () {
    console.log("ghjgjhgh");
    contador++;
    paginaActual++;
    $("#contenedor").html = "";
    cargarPagina();
});