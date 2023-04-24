let chooseCointainer = document.querySelector(".choose-option");
let chooseOption = document.getElementById("chooseOption");
let city = document.getElementById("city");
let measurementOption = document.getElementById("measurement-option");
let currentWeather = document.querySelector(".current-weather");
let submitBtn = document.querySelector(".submit-btn");
let countryDisplay = document.querySelector(".country-display");
let cityDisplay = document.querySelector(".city-display");
let temperature = document.querySelector(".temperature");
let description = document.querySelector(".description");
let sunrise = document.querySelector(".sunrise");
let sunset = document.querySelector(".sunset");
let icon = document.querySelector(".icon");
let backBtn = document.querySelector(".back");
let daysForecast = document.querySelector(".day-forecast");
let body = document.body;

currentWeather.style.display="none";
daysForecast.style.display="none";

async function fetchData(cityName, measurement) {
    const apiKey = "2f9d8f73d2562d5ce9246d800ec28553";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${measurement}`;
      
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else if (response.status === 404) {
        return { error: "City not found" };
      } else {
        console.log("Error while fetching data");
        return null;
      }
    } catch (error) {
      console.log('Error while fetching data:', error);
      return null;
    }
  }
  

  submitBtn.addEventListener("click", () => {
    
    
    chooseCointainer.style.display="none";
    var measurement = measurementOption.options[measurementOption.selectedIndex].value;
    var option = chooseOption.options[chooseOption.selectedIndex].value;
    const cityValue = city.value;

    if (!cityValue || /[^a-zA-Z\s]+/.test(cityValue)) {
      const confirmed = window.confirm("Please enter a valid city name");
      if (confirmed) {
        city.value = "";
        chooseCointainer.style.display = "flex";
        return;
      }
      else {
        city.focus();
        return;
      }
    }

    if(option === "current-weather-info"){
        fetchData(cityValue, measurement)
            .then(data => {
              if (data.error) {
                alert(`${cityValue} is not a valid city`);
                city.value = "";
                chooseCointainer.style.display = "flex";
                return;
              }
                    currentWeather.style.display = "block";
                    countryDisplay.textContent = data.sys.country;
                    cityDisplay.textContent = data.name;
                    if(measurement === "metric"){
                        temperature.textContent = `${Math.round(data.main.temp)}°C`;
                    } else {
                        temperature.textContent = `${Math.round(data.main.temp)}°F`;
                    }
                    temperature.style.fontWeight = "bold";
                    description.textContent = data.weather[0].description;
                    description.style.fontWeight = "bold";
                    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false, hourCycle: 'h23' });
                    sunrise.textContent = sunriseTime;
                    sunrise.style.fontWeight = "bold";

                    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false, hourCycle: 'h23' });
                    sunset.textContent = sunsetTime;
                    sunset.style.fontWeight = "bold";

                    icon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
                
                    
                    if (Math.round(data.main.temp) < -10) {
                        body.style.background = "linear-gradient(to top, #0c2340, #31405c, #506987, #8ba1b7, #dcdcdc)";
                        body.style.color = "#fff";
                    } else if (Math.round(data.main.temp) >= -10 && Math.round(data.main.temp) < 0) {
                        body.style.background = "linear-gradient(to top, #000080, #4a6491, #7f94b9, #b5c5e1, #ebedf5)";
                        body.style.color = "#fff";
                      } else if (Math.round(data.main.temp) >= 0 && Math.round(data.main.temp) < 10) {
                        body.style.background = "linear-gradient(to top, #00bfff, #74c9e6, #a8d8f3, #e0f0fa, #f8ffff)";
                      } else if (Math.round(data.main.temp) >= 10 && Math.round(data.main.temp) < 20) {
                        body.style.background = "linear-gradient(to top, #ffd700, #ffdc7c, #ffe6ae, #fff2e0, #ffffff)";
                      } else if (Math.round(data.main.temp) >= 20 && Math.round(data.main.temp) < 30) {
                        body.style.background = "linear-gradient(to top, #ff6347, #ff867d, #ffb5af, #ffe4e1, #ffffff)";
                      } else if (Math.round(data.main.temp) >= 30) {
                        body.style.background = "linear-gradient(to top, #8b0000, #b81313, #de4949, #ffa0a0, #ffd9d9)";
                      }

                           
            })
            .catch(error => console.log(error));

    }
  });
  

  backBtn.addEventListener("click", () => {
    currentWeather.style.display = "none";
    chooseCointainer.style.display = "flex";
    city.value = "";
    body.style.background = "#fff";
    body.style.color = "#000";
  })







