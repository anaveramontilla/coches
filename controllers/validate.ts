//Validar coche
function validateCar() {

    let respuestaP = inputPlate();
    let respuestaB = inputBrand();
    let respuestaC = inputColor();

    if (respuestaP && respuestaB && respuestaC) {
        return true;
    } else {
        return false;
    }
}

//Validar ruedas
function validateWheels() {
    let respuestasM: boolean[] = [];
    let respuestasD: boolean[] = [];
    let flag: boolean = true;
    for (let i = 1; i <= 4; i++) {
        respuestasM[i - 1] = inputWheelBrand(i);
        respuestasD[i - 1] = inputDiameter(i);

        if (respuestasM[i - 1] && respuestasD[i - 1]) {
            flag = true;
        } else {
            flag = false;
        }
    }

    if (flag) {
        return true;
    } else {
        return false;
    }
}

//Input matrícula
function inputPlate() {
    const plate = document.querySelector("#plate") as HTMLInputElement;
    plate.classList.remove("is-invalid");
    let regEx = /^(\d{4}[b-df-hj-np-tv-z]{3})*$/gi;

    if (plate.value == "") {
        plate.classList.add("is-invalid");
        let matricula = document.querySelector("#errorPlate") as HTMLElement;
        matricula.textContent = "Debes introducir una matrícula.";
        return false;
    } else if (!regEx.test(plate.value)) {
        plate.classList.add("is-invalid");
        let matricula = document.querySelector("#errorPlate") as HTMLElement;
        matricula.textContent = "Formato de matrícula incorrecto.";
        return false;
    }
    return true;
}

//Input marca
function inputBrand() {
    const brand = document.querySelector("#brand") as HTMLInputElement;
    brand.classList.remove("is-invalid");

    if (brand.value == "") {
        brand.classList.add("is-invalid");
        let marca = document.querySelector("#errorBrand") as HTMLElement;
        marca.textContent = "Debes introducir una marca.";
        return false;
    }
    return true;
}

//Input color
function inputColor() {
    const color = document.querySelector("#color") as HTMLInputElement;
    color.classList.remove("is-invalid");

    if (color.value == "") {
        color.classList.add("is-invalid");
        let colorCar = document.querySelector("#errorColor") as HTMLElement;
        colorCar.textContent = "Debes introducir un color.";
        return false;
    }
    return true;
}

//Inputs ruedas
function inputWheelBrand(i: number) {
    let marcaRueda = document.querySelector("#marcaRueda" + i) as HTMLInputElement;
    marcaRueda.classList.remove("is-invalid");
    if (marcaRueda.value == "") {
        marcaRueda.classList.add("is-invalid");
        let wheelB = document.querySelector("#errorWheelBrand" + i) as HTMLElement;
        wheelB.textContent = `Debes introducir la marca de la rueda ${i}`;
        return false;
    }
    return true;
}

//Inputs diámetros
function inputDiameter(i: number) {
    let diametroRueda = document.querySelector("#diametroRueda" + i) as HTMLInputElement;
    diametroRueda.classList.remove("is-invalid");
    if (diametroRueda.value == "") {
        diametroRueda.classList.add("is-invalid");
        let wheelB = document.querySelector("#errorDiameter" + i) as HTMLElement;
        wheelB.textContent = `Debes introducir el diámetro de la rueda ${i}`;
        return false;
    } else if (diametroRueda.valueAsNumber < 0.4 || diametroRueda.valueAsNumber > 2) {
        diametroRueda.classList.add("is-invalid");
        let wheelB = document.querySelector("#errorDiameter" + i) as HTMLElement;
        wheelB.textContent = "Debe ser entre 0.4 y 2.";
        return false;
    }
    return true;
}