import { declareEvents } from "./eventView.js";
import { doApi } from "./managerAtlas.js";

const init= () => { 
    // doApi("France");
   
    declareEvents();
    checkQueryString();
}


const checkQueryString = () => {
       
    const urlParams = new URLSearchParams(window.location.search);
   
    console.log(urlParams.get("s"))
    let searchQ = urlParams.get("s") || "France"; 
    console.log(searchQ);
    
    // if(urlParams.get("s") ){
    //   searchQ = urlParams.get("s")
    // }
    // else{
    //   searchQ = "kobi"
    // }
    if (searchQ!="Palestine"){
      doApi(searchQ);
    }
  }

init();