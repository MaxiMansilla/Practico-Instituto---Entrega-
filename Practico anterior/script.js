 function Persona(){ //LOS PRAMETROS TIENEN CADA UNA DE LAS CARACTERÍSTICAS QUE PRESENTA EL OBJETOS
	this.nombre = ""; //
	this.apellido = "";
	this.edad = "";
	this.email = "";
	this.fotos = "";
}

var alumnos = [];
function mostrarAlumnos(){

	$("#body1").html("");
	for (var i = 0; i < alumnos.length; i++) {
		$("#body1").append("<tr><td>" + alumnos[i].nombre + "</td>" + "<td>" + alumnos[i].apellido + "</td>" + "<td>" + alumnos[i].edad + "</td>" + "<td>" + alumnos[i].email+ "</td>" + "<td>" + "<img style='width:100px' src='" + alumnos[i].foto + "'/>" + "</td>" + "</tr>");
	}
}

$(document).ready(function(){
	$("#alert").hide();
	$("#danger_alert").hide();
	$("#form").hide();
	$("#obtenerAlumnos").click(function(){
		if(localStorage.getItem("alumnosGuardados")==undefined){
			$.ajax({
				url: 'http://www.scaggiano.com.uy/json.js',				
				success: function(datos) {
					$("#alert").show();
					$("#body1").html("");	
					alumnos = JSON.parse(datos);
					mostrarAlumnos();
					localStorage.setItem("alumnosGuardados", datos);
				},
				error: function(){
						 $("#danger_alert").show();
					}
			})
		}
		else{
			var alumnosStr = localStorage.getItem("alumnosGuardados");
			alumnos = JSON.parse(alumnosStr);
			mostrarAlumnos();
		}
	});
	$("#guardarPersona").click(function(){
		var nombre = $("#nombre-form").val();
		var apellido = $("#apellido-form").val();
		var edad = $("#edad-form").val();
		var email = $("#mail-form").val();
		var foto = $("#foto-form").val();
		var persona1 = new Persona();
		persona1.nombre = nombre;
		persona1.apellido = apellido;
		persona1.edad = edad;
		persona1.email = email;
		persona1.foto = foto;
		alumnos.push(persona1);
		mostrarAlumnos(); 

		localStorage.setItem("alumnosGuardados",JSON.stringify(alumnos));
	});
});





/*

	getItem("alumnosGuardados")
	getItem("alumnosGuardados",alumnosStr);

*/


