
let objetos = new Array();
let zonas=new Array();
let subBusqueda=new Array();



function crearObjetos() {
    objetos = test;
    for(let i=0;i<objetos.length;i++){
        if(!zonas.includes(objetos[i].zona)){
            zonas.push(objetos[i].zona);
        }
    }
}


let contador = 1;
let paginaActual = 0;
$(document).ready(function () {
    crearObjetos();
    
    for(let i=0;i<zonas.length;i++){
        console.log(zonas[i]);
        $("#select").append(
            '<option data-tokens="">'+zonas[i]+'</option>'
        );
    }
    $('#select').selectpicker('refresh');
    

    cargarPagina();

    $('body #contenedor1').on('click', 'button', function(){
        window.localStorage.setItem("id",$(this).attr('id'));
        window.location.href = 'DetallesAlojamiento.html';
      });
});



function cargarPagina() {
    
    let tope=objetos.length-(contador*5);
    if(tope>=0){
        tope=5;
    }else{
        tope=5+tope;
    }
    let actual=paginaActual * 5;
    for (let i = actual; i < (actual+tope); i++) {
        $("#contenedor1").append(
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
            '<button class="btn btn-primary" id="'+objetos[i].id+'">Detalles</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }
};


$(document).on('click','#boton', function () {
    contador++;
    paginaActual++;
    $("#contenedor1").empty();
    cargarPagina();
    if((contador*5)>(objetos.length-1)){
        $("#boton").hide();
    }
    if((contador*5)>0){
        $("#prev").show();
    }

});

$(document).on('click','#prev', function () {
    contador--;
    paginaActual--;
    console.log(contador*5);
    $("#contenedor1").empty();
    cargarPagina();
    if((contador*5)<=(objetos.length-1)){
        $("#boton").show();
    }
    if((contador*5)<=5){
        $("#prev").hide();
    }
});