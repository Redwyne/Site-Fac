/**
 * Created by michm on 25/06/2017.
 */
function Opennav() {
    document.getElementById("dropdown-content").style.padding="50% 200% 50% 200%";
    document.getElementById("Navigateur").style.height="100%";



}

function fermer () {
    document.getElementById("dropdown-content").style.padding="0 0 0 0";
    document.getElementById("Navigateur").style.height= "0%";

}

function Opennavm() {
    document.getElementById("dropdown-contentm").style.padding="50% 200% 50% 200%";
    document.getElementById("Navigateurm").style.height="100%";



}

function fermerm () {
    document.getElementById("dropdown-contentm").style.padding="0 0 0 0";
    document.getElementById("Navigateurm").style.height= "0%";

}


function Opennavd() {
    document.getElementById("dropdown-contentd").style.padding="50% 200% 50% 200%";
    document.getElementById("Navigateurd").style.height="100%";



}

function fermerd () {
    document.getElementById("dropdown-contentd").style.padding="0 0 0 0";
    document.getElementById("Navigateurd").style.height= "0%";

}

function change_style(){
	var style1 = document.createElement('link');
	style1.href = "../Css/Programmes2.css";
	style1.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(style1);
}

function change_style2(){
	var style1 = document.createElement('link');
	style1.href = "../Css/Programmes.css";
	style1.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(style1);
}

