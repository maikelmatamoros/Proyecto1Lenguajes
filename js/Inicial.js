let busquedaDatos=new Array();
let objetos = new Array();
let zonas=new Array();



function crearObjetos() {
    objetos = test;
    for(let i=0;i<objetos.length;i++){
        if(!zonas.includes(objetos[i].zona)){
            zonas.push(objetos[i].zona);
        }
    }
}


$(document).ready(function(){
    
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
    }, function(start, end, label) {
      console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });
    crearObjetos();
    for(let i=0;i<zonas.length;i++){
        console.log(zonas[i]);
        $("#select").append(
            '<option data-tokens="">'+zonas[i]+'</option>'
        );
    }
    $('#select').selectpicker('refresh');
    
    
});