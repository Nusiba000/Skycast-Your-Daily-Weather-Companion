const BASE = 'http://localhost:4000/api'; // Your backend server URL

const form = document.getElementById('searchForm');
const input = document.getElementById('cityInput');
const unitsSel = document.getElementById('units');
const currentEl = document.getElementById('current');
const forecastEl = document.getElementById('forecast');
const footerYear = document.getElementById('footerYear');
footerYear.textContent = new Date().getFullYear();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = input.value.trim();
  const units = unitsSel?.value || 'metric';
  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  try {
    setLoading(true);

    const res = await fetch(`${BASE}/weather?city=${encodeURIComponent(city)}&units=${encodeURIComponent(units)}`);
    const data = await res.json();

    if (!res.ok || !data.ok) {
      throw new Error(data.error || 'Failed to fetch weather data.');
    }

    renderCurrent(data.current, units);
    renderForecast(data.forecast, units);
  } catch (err) {
    renderError(err);
  } finally {
    setLoading(false);
  }
});

// Show loading state
function setLoading(isLoading) {
  if (isLoading) {
    currentEl.innerHTML = `<div class="sub">Loading...</div>`;
    forecastEl.innerHTML = '';
  }
}

// Render the current weather section
function renderCurrent(data, units) {
  const temp = Math.round(data.main.temp);
  const desc = data.weather?.[0]?.description || '—';
  const icon = data.weather?.[0]?.icon || '01d';
  const city = `${data.name}, ${data.sys?.country || ''}`;
  const feels = Math.round(data.main.feels_like);
  const wind = Math.round(data.wind.speed);

  const unitSym = units === 'metric' ? '°C' : '°F';
  const windUnit = units === 'metric' ? 'm/s' : 'mph';

  currentEl.innerHTML = `
    <div class="left">
      <div class="big">${temp}${unitSym}</div>
      <div>${capitalize(desc)}</div>
      <div class="sub">Feels like ${feels}${unitSym} • Wind ${wind} ${windUnit}</div>
      <div class="sub">${city}</div>
    </div>
    <div class="right">
      <img alt="icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" />
    </div>
  `;
}

// Render 3-day forecast
function renderForecast(data, units) {
  if (!data.list?.length) {
    forecastEl.innerHTML = '<p class="sub">No forecast available.</p>';
    return;
  }

  const byDay = {};
  for (const item of data.list) {
    const dt = new Date(item.dt * 1000);
    const dayKey = dt.toISOString().slice(0, 10);
    const hour = dt.getHours();
    if (!byDay[dayKey]) byDay[dayKey] = [];
    byDay[dayKey].push({ hour, item });
  }

  const todayKey = new Date().toISOString().slice(0, 10);
  const nextDays = Object.keys(byDay)
    .filter(k => k !== todayKey)
    .sort()
    .slice(0, 3);

  const tiles = nextDays.map(k => {
    const arr = byDay[k];
    let pick = arr[0];
    let bestDiff = 24;
    for (const obj of arr) {
      const diff = Math.abs(obj.hour - 12);
      if (diff < bestDiff) {
        bestDiff = diff;
        pick = obj;
      }
    }
    const d = pick.item;
    const t = Math.round(d.main.temp);
    const desc = d.weather?.[0]?.description || '—';
    const icon = d.weather?.[0]?.icon || '01d';
    const unitSym = units === 'metric' ? '°C' : '°F';
    const dayName = new Date(k).toLocaleDateString(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
    return `
      <div class="tile">
        <div class="day">${dayName}</div>
        <img alt="icon" src="https://openweathermap.org/img/wn/${icon}.png" />
        <div><strong>${t}${unitSym}</strong> — ${capitalize(desc)}</div>
      </div>
    `;
  }).join('');

  forecastEl.innerHTML = tiles;
}

// Error handler
function renderError(err) {
  currentEl.innerHTML = `<div class="sub" style="color:red;">Error: ${escapeHtml(err.message)}<br/>Tip: Ensure your backend (http://localhost:4000) is running.</div>`;
  forecastEl.innerHTML = '';
}

// Utility functions
function capitalize(str) {
  return (str || '').split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
}

function escapeHtml(s) {
  return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
