export default class ClassAtlas {

    constructor(_parent, _item, doApiCode, doApi) {
        this.parent = _parent;
        this.capital = _item.capital;
        this.name = _item.name.common;
        this.languages = Object.keys(_item.languages);
        this.map = _item.latlng;
        this.flag = _item.flags.png;
        this.coin = Object.keys(_item.currencies);
        this.people = _item.population;
        this.borders = _item.borders;
        this.doApi = doApi;
        this.doApiCode = doApiCode;

    }

    render() {
        let newDiv = document.createElement("div");
        newDiv.className = "row justify-content-between";
        document.querySelector("#id_row").append(newDiv);
        newDiv.innerHTML = ` 
        <h1  class="fs-1 text-center my-5">${this.name}</h1>
        <div class="col-md-4 text-center ">
            <img class="border shadow border-dark" src="${this.flag}" alt="flag">
        </div>
        <div class="col-md-4 my-md-0 my-5">
            <p><strong>People:</strong> ${this.people}</p>
            <p><strong>Languages: </strong>${this.languages}</p>
            <p><strong>Capital: </strong>${this.capital}</p>
            <p><strong>Coin: </strong>${this.coin}</p>
            <p>
                <strong> States with borders</strong>
                <br>
                <div class="col-6 col-md-12  borderCuntry"></div>
            </p>
        </div>
        <div class=" col-md-3">
        <iframe class="border shadow col-12  p-0" height="220"
        src="https://maps.google.com/maps?q=${this.map[0]},${this.map[1]}&z=4&ie=UTF8&iwloc=&output=embed" frameborder="0"
        scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        `
        let border = newDiv.querySelector(".borderCuntry");
        this.borders.forEach(async item => {
            let a = document.createElement("a");
            border.append(a);
            a.style.color = "brown"
            a.style.cursor = "pointer"
            a.innerHTML = await this.doApiCode(item) + " ";
            a.addEventListener("click", () => {
                this.doApi(a.innerHTML)
            })

        })
    }
}
