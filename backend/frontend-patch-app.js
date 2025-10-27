
const BASE = 'http://localhost:4000/api';

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const units = document.getElementById('units') ? document.getElementById('units').value : 'metric';

  if (!city) {
    alert('Please enter a city');
    return;
  }

  try {
    const res = await fetch(`${BASE}/weather?city=${encodeURIComponent(city)}&units=${units}`);
    const data = await res.json();
    if (!res.ok || !data.ok) {
      throw new Error((data && data.error) || 'Request failed');
    }

    const current = data.current;
    const forecast = data.forecast;

    document.getElementById('currentWeather').innerHTML = `
      <h2>${current.name}</h2>
      <img src="https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png" alt="">
      <p>${current.weather[0].description}</p>
      <p><strong>${Math.round(current.main.temp)}°${units === 'metric' ? 'C' : 'F'}</strong> (feels like ${Math.round(current.main.feels_like)}°)</p>
      <p>Wind: ${Math.round(current.wind.speed)} ${units === 'metric' ? 'm/s' : 'mph'}</p>
    `;

    let forecastHTML = '<h3>3-Day Forecast</h3>';
    for (let i = 0; i < forecast.list.length; i += 8) {
      const item = forecast.list[i];
      forecastHTML += `
        <div class="forecast-day">
          <h4>${new Date(item.dt_txt).toLocaleDateString()}</h4>
          <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="">
          <p>${item.weather[0].main}</p>
          <p>${Math.round(item.main.temp)}°${units === 'metric' ? 'C' : 'F'}</p>
        </div>
      `;
    }
    document.getElementById('forecast').innerHTML = forecastHTML;

  } catch (err) {
    document.getElementById('currentWeather').innerHTML = `<p style="color:#b00">Error: ${err.message}</p>`;
    document.getElementById('forecast').innerHTML = '';
  }
}