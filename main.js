let nombre = prompt("¿Cual es tu nombre?")
let apellido = prompt("¿Cual es tu apellido?")
alert("Tu nombre es "+ nombre + " " + apellido)
do{
    let opcion =prompt("¿Qué es lo que queres hacer?" + "\n" + "A - Calcular el área de un rectangulo" + "\n" + "B - Calcular el área de un triangulo")

    if (opcion === "a"){
        alert("Vamos a calcular el ÁREA DE UN RECTANGULO")
        let largo = prompt("Ingrese el largo del rectangulo:")
        let ancho =prompt("Ingrese el ancho del rectangulo:")
        function arearectangulo(largo, ancho){
            return largo*ancho
        }
        let arearec = arearectangulo(largo, ancho) 
        alert("El area del rectangulo es: " + arearec )
    
    } else if (opcion === "b"){
        alert("Vamos a calcular el ÁREA DE UN TRIANGULO")
        let largo = prompt("Ingrese el largo del triangulo:")
        let ancho =prompt("Ingrese el ancho del triangulo:")
        function areatriangulo(largo, ancho){
            return largo*ancho/2
        }
        let areatri = areatriangulo(largo, ancho) 
        alert("El area del rectangulo es: " + areatri )
    }else{
        alert("Error!!! Ingrese A ó B")
    }
} while ( opcion !== "a" || opcion !== "b")
