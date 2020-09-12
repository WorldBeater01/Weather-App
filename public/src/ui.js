class UI {
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
        this.defaultCity ="New York";
    }

    populateUI(data) {
        //de-structure vars
        const { main, name, sys, weather } = data;
        
       
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;
        //add them to inner HTML
    
        this.uiContainer.innerHTML = `
           
           
           <div class="card-body">
            
             <h4 class="city-name" data-name="${name},${sys.country}">
                <span>${name}</span>
                <sup>${sys.country}</sup>
             </h4>
             <div class="lower-section">
             <div class="city-temp">
             <h5 class="city-tempUnit">${Math.round(main.temp)}</h5><sup>°C</sup>
             </div>
            
            <figure class="fig-description">
              <img class="city-icon" src="${icon}" alt="${
              weather[0]["description"]
              }">
              <figcaption>${weather[0]["description"]}</figcaption>
            </figure>  
            </div>
            </div>
            `;
            
      }

  clearUI() {
     uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
