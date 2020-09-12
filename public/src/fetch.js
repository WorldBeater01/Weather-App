class Fetch {
    
    

    async getCurrent(input) {
    const myKey = "bb6f39c2a17d7e5d4c15670a1a8ad6ff";
    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
    )

    const data = await response.json();
	
	console.log(data);

    return data;
    
    }
    


}

