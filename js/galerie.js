/**
 * Created by michm on 26/06/2017.
 */
function change_style(){
	var style1 = document.createElement('link');
	style1.href = "../Css/Galerie2.css";
	style1.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(style1);
}

function change_style2(){
	var style1 = document.createElement('link');
	style1.href = "../Css/Galerie.css";
	style1.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(style1);
}

