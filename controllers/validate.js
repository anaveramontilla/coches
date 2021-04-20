"use strict";
//Validar coche
function validateCar() {
    var respuestaP = inputPlate();
    var respuestaB = inputBrand();
    var respuestaC = inputColor();
    if (respuestaP && respuestaB && respuestaC) {
        return true;
    }
    else {
        return false;
    }
}
//Validar ruedas
function validateWheels() {
    var respuestasM = [];
    var respuestasD = [];
    var flag = true;
    for (var i = 1; i <= 4; i++) {
        respuestasM[i - 1] = inputWheelBrand(i);
        respuestasD[i - 1] = inputDiameter(i);
        if (respuestasM[i - 1] && respuestasD[i - 1]) {
            flag = true;
        }
        else {
            flag = false;
        }
    }
    if (flag) {
        return true;
    }
    else {
        return false;
    }
}
//Input matrícula
function inputPlate() {
    var plate = document.querySelector("#plate");
    plate.classList.remove("is-invalid");
    var regEx = /^(\d{4}[b-df-hj-np-tv-z]{3})*$/gi;
    if (plate.value == "") {
        plate.classList.add("is-invalid");
        var matricula = document.querySelector("#errorPlate");
        matricula.textContent = "Debes introducir una matrícula.";
        return false;
    }
    else if (!regEx.test(plate.value)) {
        plate.classList.add("is-invalid");
        var matricula = document.querySelector("#errorPlate");
        matricula.textContent = "Formato de matrícula incorrecto.";
        return false;
    }
    return true;
}
//Input marca
function inputBrand() {
    var brand = document.querySelector("#brand");
    brand.classList.remove("is-invalid");
    if (brand.value == "") {
        brand.classList.add("is-invalid");
        var marca = document.querySelector("#errorBrand");
        marca.textContent = "Debes introducir una marca.";
        return false;
    }
    return true;
}
//Input color
function inputColor() {
    var color = document.querySelector("#color");
    color.classList.remove("is-invalid");
    if (color.value == "") {
        color.classList.add("is-invalid");
        var colorCar = document.querySelector("#errorColor");
        colorCar.textContent = "Debes introducir un color.";
        return false;
    }
    return true;
}
//Inputs ruedas
function inputWheelBrand(i) {
    var marcaRueda = document.querySelector("#marcaRueda" + i);
    marcaRueda.classList.remove("is-invalid");
    if (marcaRueda.value == "") {
        marcaRueda.classList.add("is-invalid");
        var wheelB = document.querySelector("#errorWheelBrand" + i);
        wheelB.textContent = "Debes introducir la marca de la rueda " + i;
        return false;
    }
    return true;
}
//Inputs diámetros
function inputDiameter(i) {
    var diametroRueda = document.querySelector("#diametroRueda" + i);
    diametroRueda.classList.remove("is-invalid");
    if (diametroRueda.value == "") {
        diametroRueda.classList.add("is-invalid");
        var wheelB = document.querySelector("#errorDiameter" + i);
        wheelB.textContent = "Debes introducir el di\u00E1metro de la rueda " + i;
        return false;
    }
    else if (diametroRueda.valueAsNumber < 0.4 || diametroRueda.valueAsNumber > 2) {
        diametroRueda.classList.add("is-invalid");
        var wheelB = document.querySelector("#errorDiameter" + i);
        wheelB.textContent = "Debe ser entre 0.4 y 2.";
        return false;
    }
    return true;
}
