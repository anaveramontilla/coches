let car: Car[] = [];

//Crear coche
function createCar() {

    //Inputs
    const plate = document.querySelector("#plate") as HTMLInputElement;
    const brand = document.querySelector("#brand") as HTMLInputElement;
    const color = document.querySelector("#color") as HTMLInputElement;

    //Validamos
    if (!validateCar()) {
        return;
    }
    //Instanciamos
    car.push(new Car(plate.value, color.value, brand.value));
    showCar(car);
    const carForm = document.querySelector(".carForm") as HTMLElement;
    carForm.classList.remove("d-flex");
    carForm.classList.add("d-none");
    const wheelForm = document.querySelector(".wheelForm") as HTMLElement;
    wheelForm.classList.remove("d-none");
    wheelForm.classList.add("d-flex", "flex-column", "align-items-center");
}

//Mostrar coche
function showCar(car: Car[]) {

    const informacion = document.querySelector("#informacion") as HTMLElement;
    const carContainer = document.createElement("div");
    carContainer.classList.add("carContainer");
    const carTitle = document.createElement("h6");
    const carInfo = document.createElement("p");
    carInfo.classList.add("infoCoche", "text-center", "font-weight-bold");
    carTitle.classList.add("tituloCoche");
    carInfo.append(carTitle);
    carContainer.prepend(carTitle, carInfo);
    informacion.prepend(carContainer);

    for (let i = 0; i < car.length; i++) {
        carTitle.textContent = `Coche ${i + 1}`;
        carInfo.textContent = `Matrícula: ${car[i].plate} | Marca: ${car[i].brand} | Color: ${car[i].color}`;
    }
}

//Recoger inputs diámetros
function diametrosRuedas() {
    let diametrosRuedas: number[] = [];
    for (let i = 0; i < 4; i++) {
        const diametro = document.querySelector("#diametroRueda" + (i + 1)) as HTMLInputElement;
        diametrosRuedas[i] = diametro.valueAsNumber;
    }
    return diametrosRuedas;
}

//Recoger inputs marcas
function marcasRuedas() {
    let marcasRuedas: string[] = [];
    for (let i = 0; i < 4; i++) {
        const marca = document.querySelector("#marcaRueda" + (i + 1)) as HTMLInputElement;
        marcasRuedas[i] = marca.value;
    }
    return marcasRuedas;
}

//Añadir ruedas
function ruedas(car: Car[]) {

    const diametros = diametrosRuedas();
    const marcas = marcasRuedas();

    //Validamos
    if (!validateWheels()) {
        return;
    }

    //Añadimos ruedas
    let ruedas: Wheel[] = [];
    for (let i = 0; i < 4; i++) {
        ruedas[i] = new Wheel(diametros![i], marcas[i]);
        car[car.length - 1].addWheel(ruedas[i]);
    }

    showWheels(car);
    console.log(car);
    reset();
}

//Mostrar ruedas
function showWheels(car: Car[]) {
    const carContainer = document.querySelector(".carContainer") as HTMLElement;
    const infoCoche = document.querySelector(".infoCoche") as HTMLParagraphElement;
    const tituloCoche = document.querySelector(".tituloCoche") as HTMLHeadingElement;
    let ruedas = car[car.length - 1].wheels;

    for (let i = ruedas.length-1; i >= 0; i--) {
        const wheelInfo = document.createElement("li");
        carContainer.prepend(wheelInfo);
        let diameter = ruedas[i].diameter;
        let brand = ruedas[i].brand;
        wheelInfo.textContent = `Rueda ${i+1}: Marca ${brand} - Diámetro ${diameter}`;
        wheelInfo.before(infoCoche);
        infoCoche.before(tituloCoche);
    }
}

//Función reseteo
function reset() {
    const wheelForm = document.querySelector(".wheelForm") as HTMLElement;
    wheelForm.classList.remove("d-flex");
    wheelForm.classList.add("d-none");
    const carForm = document.querySelector(".carForm") as HTMLElement;
    carForm.classList.remove("d-none");
    carForm.classList.add("d-flex");

    //Inputs
    const plate = document.querySelector("#plate") as HTMLInputElement;
    const brand = document.querySelector("#brand") as HTMLInputElement;
    const color = document.querySelector("#color") as HTMLInputElement;

    plate.value = "";
    brand.value = "";
    color.value = "";

    for (let i = 1; i <= 4; i++) {
        const diametro = document.querySelector("#diametroRueda" + i) as HTMLInputElement;
        diametro.value = "";
    }
    for (let i = 1; i <= 4; i++) {
        const marca = document.querySelector("#marcaRueda" + i) as HTMLInputElement;
        marca.value = "";
    }
}