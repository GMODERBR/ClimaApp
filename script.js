const apiKey = "959b385559645089c9d6f71a63303e48";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const caixaBusca = document.querySelector(".busca input");
const btnBusca = document.querySelector(".busca button");
const iconeClima = document.querySelector(".icone-clima");

async function checarClima(cidade) {
  const response = await fetch(apiUrl + cidade + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".erro").style.display = "block";
    document.querySelector(".clima").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".cidade").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidade").innerHTML = data.main.humidity + "%";
    document.querySelector(".vento").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      iconeClima.src = "img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      iconeClima.src = "img/clear.png";
    } else if (data.weather[0].main == "Rain") {
      iconeClima.src = "img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      iconeClima.src = "img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      iconeClima.src = "img/mist.png";
    }
    document.querySelector(".clima").style.display = "block";
    document.querySelector(".erro").style.display = "none";
  }
}

btnBusca.addEventListener("click", () => {
  checarClima(caixaBusca.value);
});
