/**
 * Created by michm on 26/06/2017.
 */
function ouvrirnav(){
    document.getElementById("nav").style.height="100%";

}

function fermernav(){
    document.getElementById("nav").style.height="0%";
}

function change_style(){
	var style1 = document.createElement('link');
	style1.href = "../Css/Candidature2.css";
	style1.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(style1);
}

function change_style2(){
	var style1 = document.createElement('link');
	style1.href = "../Css/Candidature.css";
	style1.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(style1);
}

