var carta="";
var cartas="";
var html1="";
$(function(){
	miStorage = window.localStorage;
	if (localStorage.getItem("datos")) {
$.getJSON("json/cartas.json", function(datos) {
                cartas=datos;
                localStorage.setItem('datos', JSON.stringify(cartas));
                console.log(cartas);
                $.each(cartas["cartas"], function(idx,cartas) {
                	$("#tablaC").append("<tr><th>"+cartas["#"]+"</th><th>"+cartas["Carta"]+"</th><th>"+cartas["Cant"]+"</th></tr>");
                });
            });
}
});

$(document).on("click","#img",function(){
	carta=$(this).data("id");
});