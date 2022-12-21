import { doApi } from "./managerAtlas.js";

export const declareEvents = () => {
    let id_form = document.querySelector("#id_form");
    let id_input = document.querySelector("#id_input");
    id_form.addEventListener("submit", (e) => {
        e.preventDefault();
    })
    
    id_input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
                
                    doApi(id_input.value);
                
            }
        })
        let id_btn = document.querySelector("#id_btn");
        id_btn.addEventListener("click", () => {
            doApi(id_input.value);

        })
 

}