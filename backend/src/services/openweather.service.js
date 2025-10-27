import axios from 'axios';

export async function fetchCurrentAndForecast({ city, units, apiKey }) {
  const base = 'https://api.openweathermap.org/data/2.5';
  const currentUrl = `${base}/weather?q=${encodeURIComponent(city)}&units=${units}&appid=${apiKey}`;
  const forecastUrl = `${base}/forecast?q=${encodeURIComponent(city)}&units=${units}&cnt=24&appid=${apiKey}`;

  const [current, forecast] = await Promise.all([
    axios.get(currentUrl),
    axios.get(forecastUrl)
  ]);

  return {
    current: current.data,
    forecast: forecast.data
  };
}