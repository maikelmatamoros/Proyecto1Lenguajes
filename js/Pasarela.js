let fecha1=localStorage.getItem("fechaI");
let fecha2=localStorage.getItem("fechaF");
let dias=moment(fecha2).diff(moment(fecha1), 'days');
let precio=localStorage.getItem("precio");
let subtotal=(precio*dias);
let plataforma=subtotal*0.08;
let iva=subtotal*0.13;
let limpieza=subtotal*0.05;
let total=subtotal+plataforma+iva+limpieza;
$(document).ready(function(){
    $("#fechaI").append(fecha1);
    $("#fechaS").append(fecha2);
    $("#dias").append(dias);
    $("#precio").append(precio);
    $("#subtotal").append(subtotal);
    $("#plataforma").append(plataforma);
    $("#iva").append(iva);
    $("#limpieza").append(limpieza);
    $("#total").append(total);
});

$(document).on('click','button', function(){
    
    total+=parseInt($(this).attr('id'));
    $("#total").html(total);
    
});