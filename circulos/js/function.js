$(document).ready(function(){

	var puntuacion = 0;
	var tiempo = 10;
	var limite = 16;

	$(".fondo_modal").hide();
	for (var i = 0; i < tiempo; i++) {  
	var bloque = $("<div></div>").addClass("bloque_timer");
	bloque.css("width",100/tiempo -1 +"%");
	$(".timer").append(bloque);
	}



	var timer = setInterval(function(){
		if (tiempo > 0) {
			//console.log(tiempo);//
			$(".bloque_timer").eq(tiempo-1).fadeOut();
			tiempo --;
		}else{
			clearInterval(timer);
			console.log("game over");
			$(".fondo_modal").show();
		}
	},1000);

 $(".circulo").click(function(){
 	if(!$(this).hasClass("invisible")){

 	$(this).addClass("invisible");
 	puntuacion++;
 	$(".puntuacion").html(puntuacion);

 	}
 

 });



 		
		
});
