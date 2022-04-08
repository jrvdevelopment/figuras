//Codigo del cuadrado

//const ladoCuadrado = 5;

function perimetroCuadrado(lado){ 
    
    return lado * 4;

}

function areaCuadrado(lado){ 
    
    return lado * lado;
}

//Codigo del triangulo

function perimetroTriangulo(lado1, lado2, lado3){

    return lado1 + lado2 + lado3 ;

}

function areaTriangulo(base, altura){

    return (base * altura) / 2;

}

//Codigo del circulo

//Radio

const radioCirculo = 4;

//Diametro

function diametroCirculo(radio){

    return radio * 2;

}

//Circunferencia 

function perimetroCirculo(radio){

    const diametro = diametroCirculo(radio);
    return diametro * PI;

}

//Area

function areaCirculo(radio){
    return (radio * radio) * PI;
}


// Funciones Form

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
    
}

function calcularPerimetroTriangulo(){
    const inputT1 = document.getElementById("InputTriangulo1");
    const inputT2 = document.getElementById("InputTriangulo2");
    const inputT3 = document.getElementById("InputTriangulo3");
    const valueT1 = inputT1.value;
    const valueT2 = inputT2.value;
    const valueT3 = inputT3.value;
    const perimetroTri = perimetroTriangulo(valueT1, valueT2, valueT3);
    alert(perimetroTri);
}

function calcularAreaTriangulo(){
    const inputT1 = document.getElementById("InputTriangulo1");
    const inputT2 = document.getElementById("InputTriangulo2");
    const valueT1 = inputT1.value;
    const valueT2 = inputT2.value;
    const areaTri = areaTriangulo(valueT1, valueT2);
    alert(areaTri);
}

function calcularDiametroCirculo(){
    const inputC = document.getElementById("InputCirculo");
    const valueC = inputC.value;
    const diametroC = diametroCirculo(valueC);
    alert(diametroC);
}