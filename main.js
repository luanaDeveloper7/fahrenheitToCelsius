const submitButton =  document.querySelector(".submitButton");
let celsiusTemperatureText = document.querySelector(".celsiusValue");

submitButton.addEventListener("click", convertFahrenheintInCelsius);

document.addEventListener("keydown", (keyDownEvent) =>{
    if(keyDownEvent.key === "Enter"){
        convertFahrenheintInCelsius();
    }
})

function convertFahrenheintInCelsius(){
    let fahrenheitTemperature = parseFloat(document.querySelector(".fahrenheitTemperature").value);
    if(isNaN(fahrenheitTemperature)){
        alert("Write a temperature!");
        return;
    }else{
        let celsiusTemperature =  (( ( fahrenheitTemperature - 32 ) * 5 ) / 9).toFixed(2);
        celsiusTemperatureText.textContent = `${fahrenheitTemperature} ºF is ${celsiusTemperature} ºC`;
        let input = document.querySelector("input");
        input.value = "";
    }
    
}
