function Persona(){ //LOS PRAMETROS TIENEN CADA UNA DE LAS CARACTERÍSTICAS QUE PRESENTA EL OBJETOS
	this.nombre = ""; //
	this.apellido = "";
	this.edad = "";
	this.mail = "";
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
		$.ajax({
				url: 'http://www.scaggiano.com.uy/json.js',				
			success: function(datos) {
				$("#alert").show();
				$("#body1").html("");	
				alumnos = JSON.parse(datos);
				mostrarAlumnos();
			},
			error: function(){
					 $("#danger_alert").show();
				}
		})
	});

	$("#guardarPersona").click(function(){
		
		if(localStorage.getItem("alumnosGuardados")==undefined){
			var nombre = $("#nombre-form").val();
			var apellido = $("#apellido-form").val();
			var edad = $("#edad-form").val();
			var mail = $("#mail-form").val();
			var foto = $("#foto-form").val();
			var persona1 = new Persona();
			persona1.nombre = nombre;
			persona1.apellido = apellido;
			persona1.edad = edad;
			persona1.mail = mail;
			persona1.foto = foto;
			alumnos.push(persona1);
			mostrarAlumnos(persona1); 

			localStorage.setItem("alumnosGuardados",JSON.stringify(alumnos));
			}
			else{
			var alumnosStr = localStorage.getItem("alumnosGuardados");
			var alumnos = JSON.parse(alumnosStr);


		}
	
	});

});





/*

	getItem("alumnosGuardados")
	getItem("alumnosGuardados",alumnosStr);

*/


