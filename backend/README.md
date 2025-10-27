# SkyCast Backend (Node.js + MySQL)

Secure backend for the SkyCast Weather Dashboard.
- Proxies OpenWeather requests (hides API key from the browser)
- Logs user searches in MySQL
- Adds CORS, Helmet, and rate limiting
- Clean file structure with controllers/services

## Endpoints
- `GET /api/health` — server & DB status
- `GET /api/weather?city=Muscat&units=metric` — current + forecast (proxied)
- `GET /api/searches` — last 50 searches (for admin/debug)

## Quick Start

1) Install dependencies
```bash
npm install
```

2) Create a database and user, then run the schema
```sql
-- Adjust credentials as needed
SOURCE sql/schema.sql;
```

3) Configure environment variables
- Copy `.env.example` to `.env` and fill values:
```
PORT=4000
FRONTEND_ORIGIN=http://127.0.0.1:5500
OPENWEATHER_API_KEY=YOUR_OPENWEATHER_KEY

DB_HOST=localhost
DB_PORT=3306
DB_USER=skycast_user
DB_PASSWORD=super_secret_password
DB_NAME=skycast_db
```

4) Start the server
```bash
npm run dev
```
Server runs at `http://localhost:4000`.

## Frontend Integration

Update your frontend `app.js` to call the backend:

```js
// Example: fetch via your backend instead of hitting OpenWeather directly
async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const units = document.getElementById('units').value || 'metric';
  const base = 'http://localhost:4000/api';
  const res = await fetch(`${base}/weather?city=${encodeURIComponent(city)}&units=${units}`);
  if (!res.ok) {
    const err = await res.json().catch(()=>({error:'Request failed'}));
    throw new Error(err.error || 'Backend error');
  }
  const data = await res.json();
  // Use data.current and data.forecast the same way as before
}
```

> Tip: In production, deploy the backend and set `FRONTEND_ORIGIN` to your site’s URL.

## Security Notes
- API key never lives in the frontend.
- Helmet adds secure HTTP headers.
- express-rate-limit throttles abusive clients.
- Basic validation on `city` and `units`.
- Use a **least-privilege** MySQL user for the app.
- In production, add HTTPS (via a proxy like Nginx or your platform).

## File Structure
```
skycast-backend/
├─ .env.example
├─ package.json
├─ sql/
│  └─ schema.sql
└─ src/
   ├─ server.js
   ├─ config/
   │  └─ db.js
   ├─ controllers/
   │  └─ weather.controller.js
   ├─ routes/
   │  └─ weather.routes.js
   ├─ services/
   │  └─ openweather.service.js
   ├─ middleware/
   │  ├─ errorHandler.js
   │  └─ rateLimiter.js
   └─ utils/
      └─ validate.js
```