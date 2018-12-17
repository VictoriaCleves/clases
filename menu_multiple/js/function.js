window.loand = function (){

	var	open_1 = document.getElementsByTagName('open_1')[0];
	var	open_2 = document.getElementsByTagName('open_2')[0];

	
}

primero.onclick=function(evento){
	evento.preventDefault();
	menu.className="cerrar";}




var ul=document.getElementsByTagName('ul')[0];
var open_1=document.getElementsByClassName('open_1')[0];
var open_2=document.getElementsByClassName('open_2')[0];
//console.log("primero");
open_2.onclick=function(evento){
	evento.preventDefault();
	ul.className="primero";
}
open_1.onclick=function(evento){
	evento.preventDefault();
	ul.className="";
}