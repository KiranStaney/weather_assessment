const apiKey = "5547669027e8ca9629a0671605ee03d1";

document.getElementById("getWeather").addEventListener("click", async function() {

    const city = document.getElementById("city").value;
    const weatherDiv = document.getElementById("weather");

    if (city === "") {
        weatherDiv.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        weatherDiv.innerHTML = `
            <h3>${data.name}</h3>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
            <p><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
            <p><strong>Condition:</strong> ${data.weather[0].description}</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;

    } catch (error) {

        weatherDiv.innerHTML = `<p>${error.message}</p>`;

    }

});