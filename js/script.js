//Seleccion actual en el menu
function seleccion(link){
    var opcion = document.querySelectorAll('#links a');
    opcion[0].className = "";
    opcion[1].className = "";
    opcion[2].className = "";
    opcion[3].className = "";
    opcion[4].className = "";
    link.className = "seleccionado";

    //Esconder Menu 

    var ocultar = document.getElementById("nav"); 
    opcion.className = "";
}
//Menu responsive
function responsiveMenu(){
    var item = document.getElementById("nav");
    if (item.className === ""){
        item.className = "responsive";
    }
    else{
        item.className = "";
    }
}

//Animacion barra de habilidades
//Deteccion de scroll en la seccion habilidades
window.onscroll = function(){
    aplicarEfecto()
};

// Funcion que aplica el efecto
function aplicarEfecto(){
    var habilidades = document.getElementById("habilidades");
    var distancia = window.innerHeight - habilidades.getBoundingClientRect().top;

    if (distancia >= 300){
        document.getElementById("html").classList.add("progreso1");
        document.getElementById("js").classList.add("progreso2");
        document.getElementById("bd").classList.add("progreso3");
        document.getElementById("git").classList.add("progreso4");
    }

}



