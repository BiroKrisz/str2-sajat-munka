const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    
    let final = document.querySelector("#final");
    let feet = document.querySelector("#feet");
    let inches = document.querySelector("#inches");
    e.preventDefault();

    feet = parseInt(feet.value);
    inches = parseInt(inches.value);

    if (isNaN(feet) || isNaN(inches)) {
        final.textContent = "Megfelelő számokat írj, kérlek!";
    } else if (feet < 0) {
        final.textContent = "Kérlek, pozitív lábszámot írj!";
    } else if (inches < 0 || inches >= 12) {
        final.textContent = "A hüvelyknek 0 és 12 közötti értéknek kell lennie.";
    } else {
        let totalInches = (feet * 12) + inches;
        let totalCentimeters = totalInches * 2.54;
        final.textContent = `${totalCentimeters} cm`;
    }
})