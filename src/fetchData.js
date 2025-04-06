export async function fetchData(location){
    try{
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=634DUWD4MYPK43R9SP3L552JF&contentType=json`);
    const weatherData = await response.json();
    console.log(weatherData);} catch{
        console.error("addresse invalide")
    }
}