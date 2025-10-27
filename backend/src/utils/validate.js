const CITY_REGEX = /^[\p{L} .,'-]{1,100}$/u; // Basic validation for city names
const UNITS = new Set(['metric','imperial']);

export function validateCity(city) {
  if (!city || typeof city !== 'string' || !CITY_REGEX.test(city.trim())) {
    const e = new Error('Invalid city parameter');
    e.status = 400;
    throw e;
  }
  return city.trim();
}

export function validateUnits(units) {
  const u = (units || 'metric').toLowerCase();
  if (!UNITS.has(u)) {
    const e = new Error('Invalid units parameter (use metric or imperial)');
    e.status = 400;
    throw e;
  }
  return u;
}