window.onload=function(){

	var cuadrado = document.getElementsByClassName("cuadrado")[0]; 
	var inicialX = 498/2 -50;
	var inicialY = 498/2 -50;
	var offsetY = 100;
	var offsetX = (window.innerWidth - 500)/2;
	cuadrado.style.top= inicialY+"px";
	cuadrado.style.left=inicialX+"px";

	var contenedor = document.getElementsByClassName("contenedor")[0];
	var mouseX = 0; 
	var mouseY = 0;
	var mouseoffsetX = 0;
	var mouseoffsetY = 0;

	contenedor.onmousedown=function(evento){
		//console.log("x:"+evento.clientX +",y:"+evento.clientY);//
		mouseX = evento.clientX;
		mouseY = evento.clientY;

		contenedor.addEventListener("mousemove", mover);
	}
	contenedor.onmouseup=function(evento){
		//console.log("x:"+evento.clientX +",y:"+evento.clientY);//
		contenedor.removeEventListener("mousemove", mover);
	}

	function mover(evento){
		console.log ("moviendo");
		var puedomover = false;
		if(evento.clientX - offsetX > inicialX && evento.clientX - offsetX < inicialX + 100 && evento.clientY - offsetY > inicialY && evento.clientY - offsetY < inicialY + 100){
			puedomover = true;
		}

		if(puedomover){
			mouseoffsetX = evento.clientX - mouseX;
			mouseoffsetY = evento.clientY - mouseY;
			mouseX = evento.clientX;
			mouseY = evento.clientY;
			inicialX += mouseoffsetX;
			inicialY += mouseoffsetY;
			if(inicialX < 0){inicialX = 0}
			if (inicialX > 398){inicialX = 398}
			if(inicialY < 0){inicialY = 0}
			if (inicialY > 398){inicialY = 398}
			
			cuadrado.style.top= inicialY+"px";
			cuadrado.style.left=inicialX+"px";

		}

	}
	/*contenedor.onclick = function(){
		console.log ("contenedor");
	}

	cuadrado.onclick = function(evento){
		evento.stopPropagation();
		console.log ("cuadrado");
	}*/
}