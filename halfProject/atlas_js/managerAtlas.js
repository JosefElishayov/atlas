import ClassAtlas from "./atlasItem.js";
export const doApi = async (_searchQ) => {
    try {
        showLoading();
        if (_searchQ != "Palestine") {
            let url = `https://restcountries.com/v3.1/name/${_searchQ}`;
            let resp = await fetch(url);
            let data = await resp.json();
            console.log(data);
            createAtlas(data[0]);
        }
    }
    catch {
        console.log("error1");
    }
}
export const doApiCode = async (_searchC) => {
    try {
   
            let url = `https://restcountries.com/v3.1/alpha/${_searchC}`;
            let resp = await fetch(url);
            let data = await resp.json();
            let fullName = await (data[0].name.common);
            console.log(data);
            return fullName;
        
    }
    catch {
        console.log("error2");
    }
}
const createAtlas = (_ar) => {
     
    document.querySelector("#id_row").innerHTML = "";
    let atlas = new ClassAtlas("#id_row", _ar, doApiCode, doApi);
    atlas.render();
}
const showLoading = () => {
    document.querySelector("#id_row").innerHTML = `
      <div class="text-center">
        <img src="images/loading.gif" width="200" alt="loading" >
      </div>
    `
  }

