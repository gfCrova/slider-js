

//Este codigo indica que una vez cargue la página, ejecuta ese string en la consola//
window.addEventListener("load", function() {
    console.log("El contenido a cargado!");


//Este codigo crea un slider de 3 imagenes que cambian cada 2 segundos//
    
   //se crea una variable de un Array//
    var imagen=[];

        imagen[0]= "img/imagen1.jpg"
        imagen[1]= "img/imagen2.jpg"
        imagen[2]= "img/imagen3.jpg"

    var indiceImagenes= 0;

        function cambiarImagenes() {

            document.slider.src= imagen[indiceImagenes];

//La condición dice si (if) la VAR indiceIm es menor a 2 se incrementa en 1, pero (else) si ya llego a su límite (2) entonces vuelve a su inico (0)// 

            if (indiceImagenes < 2) { indiceImagenes++;
            } else {
                indiceImagenes= 0;
            }

        }

   var tiempo= 1500;

   setInterval(cambiarImagenes, tiempo);

});


//