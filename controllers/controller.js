"use strict";
var car = [];
//Crear coche
function createCar() {
    //Inputs
    var plate = document.querySelector("#plate");
    var brand = document.querySelector("#brand");
    var color = document.querySelector("#color");
    //Validamos
    if (!validateCar()) {
        return;
    }
    //Instanciamos
    car.push(new Car(plate.value, color.value, brand.value));
    showCar(car);
    var carForm = document.querySelector(".carForm");
    carForm.classList.remove("d-flex");
    carForm.classList.add("d-none");
    var wheelForm = document.querySelector(".wheelForm");
    wheelForm.classList.remove("d-none");
    wheelForm.classList.add("d-flex", "flex-column", "align-items-center");
}
//Mostrar coche
function showCar(car) {
    var informacion = document.querySelector("#informacion");
    var carContainer = document.createElement("div");
    carContainer.classList.add("carContainer");
    var carTitle = document.createElement("h6");
    var carInfo = document.createElement("p");
    carInfo.classList.add("infoCoche", "text-center", "font-weight-bold");
    carTitle.classList.add("tituloCoche");
    carInfo.append(carTitle);
    carContainer.prepend(carTitle, carInfo);
    informacion.prepend(carContainer);
    for (var i = 0; i < car.length; i++) {
        carTitle.textContent = "Coche " + (i + 1);
        carInfo.textContent = "Matr\u00EDcula: " + car[i].plate + " | Marca: " + car[i].brand + " | Color: " + car[i].color;
    }
}
//Recoger inputs diámetros
function diametrosRuedas() {
    var diametrosRuedas = [];
    for (var i = 0; i < 4; i++) {
        var diametro = document.querySelector("#diametroRueda" + (i + 1));
        diametrosRuedas[i] = diametro.valueAsNumber;
    }
    return diametrosRuedas;
}
//Recoger inputs marcas
function marcasRuedas() {
    var marcasRuedas = [];
    for (var i = 0; i < 4; i++) {
        var marca = document.querySelector("#marcaRueda" + (i + 1));
        marcasRuedas[i] = marca.value;
    }
    return marcasRuedas;
}
//Añadir ruedas
function ruedas(car) {
    var diametros = diametrosRuedas();
    var marcas = marcasRuedas();
    //Validamos
    if (!validateWheels()) {
        return;
    }
    //Añadimos ruedas
    var ruedas = [];
    for (var i = 0; i < 4; i++) {
        ruedas[i] = new Wheel(diametros[i], marcas[i]);
        car[car.length - 1].addWheel(ruedas[i]);
    }
    showWheels(car);
    console.log(car);
    reset();
}
//Mostrar ruedas
function showWheels(car) {
    var carContainer = document.querySelector(".carContainer");
    var infoCoche = document.querySelector(".infoCoche");
    var tituloCoche = document.querySelector(".tituloCoche");
    var ruedas = car[car.length - 1].wheels;
    for (var i = ruedas.length - 1; i >= 0; i--) {
        var wheelInfo = document.createElement("li");
        carContainer.prepend(wheelInfo);
        var diameter = ruedas[i].diameter;
        var brand = ruedas[i].brand;
        wheelInfo.textContent = "Rueda " + (i + 1) + ": Marca " + brand + " - Di\u00E1metro " + diameter;
        wheelInfo.before(infoCoche);
        infoCoche.before(tituloCoche);
    }
}
//Función reseteo
function reset() {
    var wheelForm = document.querySelector(".wheelForm");
    wheelForm.classList.remove("d-flex");
    wheelForm.classList.add("d-none");
    var carForm = document.querySelector(".carForm");
    carForm.classList.remove("d-none");
    carForm.classList.add("d-flex");
    //Inputs
    var plate = document.querySelector("#plate");
    var brand = document.querySelector("#brand");
    var color = document.querySelector("#color");
    plate.value = "";
    brand.value = "";
    color.value = "";
    for (var i = 1; i <= 4; i++) {
        var diametro = document.querySelector("#diametroRueda" + i);
        diametro.value = "";
    }
    for (var i = 1; i <= 4; i++) {
        var marca = document.querySelector("#marcaRueda" + i);
        marca.value = "";
    }
}
