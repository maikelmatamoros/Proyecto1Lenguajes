let busquedaDatos = new Array();
let objetos = new Array();
let zonas = new Array();
let fecha1="SF";
let fecha2="SF";


function crearObjetos() {
    objetos = test;
    for (let i = 0; i < objetos.length; i++) {
        if (!zonas.includes(objetos[i].zona)) {
            zonas.push(objetos[i].zona);
        }
    }
}


$(document).ready(function () {

    $('#picker').daterangepicker({
        "showDropdowns": true,
        "showWeekNumbers": true,
        "showISOWeekNumbers": true,
        "maxSpan": {
            "days": 7
        },
        "startDate": "05/18/2020",
        "endDate": "05/24/2020",
        "opens": "center",
        "drops": "auto"
    }, function (start, end, label) {
        fecha1 = start.format('YYYY-MM-DD');
        fecha2 = end.format('YYYY-MM-DD');

    });
    crearObjetos();
        
    
    for(let i=0;i<zonas.length;i++){

        $("#select").append(
            '<option data-tokens="">'+zonas[i]+'</option>'
        );
    }
    $('#select').selectpicker('refresh');

});


$(document).on('click', "#buscar", function () {
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
    window.location.href = 'BusquedaResultado.html';   
});