export  async function dataRender(weatherData) {
  const lieu = document.querySelector("#lieu");
  lieu.innerText = await weatherData.resolvedAddress;

  const condition = document.querySelector("#condition");
  condition.innerText = await weatherData.currentConditions.conditions;

  const temperature = document.querySelector("#tempareture");
  temperature.innerText = await weatherData.currentConditions.temp;

  const precipitation = document.querySelector("#precipitation");
  precipitation.innerText = await weatherData.currentConditions.precip;

  const humidite = document.querySelector("#humidite");
  humidite.innerText = await weatherData.currentConditions.humidity;
}
