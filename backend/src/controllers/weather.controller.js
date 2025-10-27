import { fetchCurrentAndForecast } from '../services/openweather.service.js';
import { query } from '../config/db.js';
import { validateCity, validateUnits } from '../utils/validate.js';

export async function getWeather(req, res, next) {
  try {
    const city = validateCity(req.query.city);
    const units = validateUnits(req.query.units);
    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey || apiKey === 'YOUR_OPENWEATHER_KEY') {
      const e = new Error('Server is not configured with an OpenWeather API key');
      e.status = 500;
      throw e;
    }

    const data = await fetchCurrentAndForecast({ city, units, apiKey });
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().slice(0,45);
    await query('INSERT INTO searches (city, units, ip) VALUES (?, ?, ?)', [city, units, ip]);

    res.json({
      ok: true,
      city,
      units,
      current: data.current,
      forecast: data.forecast
    });
  } catch (err) {
    next(err);
  }
}

export async function listSearches(_req, res, next) {
  try {
    const rows = await query('SELECT id, city, units, ip, created_at FROM searches ORDER BY created_at DESC LIMIT 50', []);
    res.json({ ok: true, results: rows });
  } catch (err) {
    next(err);
  }
}