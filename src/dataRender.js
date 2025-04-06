export function dataRender(weatherData, unit) {
  let tempParam = unit;

  const lieu = document.querySelector("#lieu");
  lieu.innerText = weatherData.resolvedAddress;

  const condition = document.querySelector("#condition");
  condition.innerText = weatherData.currentConditions.conditions;

  const temperature = document.querySelector("#tempareture");
  if (tempParam === "°F")
    temperature.innerText =
      (weatherData.currentConditions.temp) + tempParam;
  else
    temperature.innerText =
      (Math.floor((((weatherData.currentConditions.temp - 32) * 5) / 9))) + tempParam;

  const precipitation = document.querySelector("#precipitation");
  precipitation.innerText = (weatherData.currentConditions.precip) + "%";

  const humidite = document.querySelector("#humidite");
  humidite.innerText = (weatherData.currentConditions.humidity) + "%";

  const unitToggleButton = document.querySelector("#unitToggleButton");
  unitToggleButton.innerText = tempParam;

  unitToggleButton.addEventListener("click", () => {
    if (tempParam === "°F") {
      tempParam = "°C";
      dataRender(weatherData, tempParam);
    } else {
      tempParam = "°F";
      dataRender(weatherData, tempParam);
    }
  });
}
