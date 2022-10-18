

window.addEventListener("load", function() {
    console.log("El contenido a cargado!");

   
    var imagen=[];

        imagen[0]= "img/imagen1.jpg"
        imagen[1]= "img/imagen2.jpg"
        imagen[2]= "img/imagen3.jpg"

    var indiceImagenes= 0;

        function cambiarImagenes() {

            document.slider.src= imagen[indiceImagenes];

            if (indiceImagenes < 2) { indiceImagenes++;
            } else {
                indiceImagenes= 0;
            }

        }

   var tiempo= 1500;

   setInterval(cambiarImagenes, tiempo);

});


var fecha = new Date();
        document.write("Fecha: " + fecha.getDay() + "/" + fecha.getMonth() + "/" + fecha.getFullYear() + " - ");

 var time = new Date();
        document.write(" "+ "Hora: " + time.getHours() + ":" + time.getMinutes());
