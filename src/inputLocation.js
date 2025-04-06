import { fetchData } from "./fetchData";

export function inputLocation(){

    const locationInput = document.querySelector("#locationInput");
    const validationRecherche = document.querySelector("#validationRecherche")

    validationRecherche.addEventListener('click',()=>{
        fetchData(locationInput.value);
    });
}