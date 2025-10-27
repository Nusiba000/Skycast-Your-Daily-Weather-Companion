<!-- 🌤️ Skycast README.md -->

<div align="center">

# 🌤️ **Skycast — Your Daily Weather Companion**

### ☁️ Real-Time Forecasts · 🌍 Global Coverage · 💡 Elegant Design

![Weather App](https://img.shields.io/badge/Weather%20App-Node.js%20%7C%20Express%20%7C%20HTML%20%7C%20CSS%20%7C%20JS-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![OpenWeather](https://img.shields.io/badge/API-OpenWeatherMap-orange?style=for-the-badge)

---

### _"Your daily dose of accurate, beautiful weather updates!"_

</div>

---

## 🌈 Overview

**Skycast** is a modern and interactive weather web application that delivers **real-time weather data**, **forecast insights**, and **climate conditions** for cities worldwide.  
It’s designed with a seamless and responsive frontend and a robust backend powered by the **OpenWeatherMap API** and **Node.js**.

Skycast aims to make **daily weather tracking smarter and simpler**, combining **functionality, design, and reliability** into a single platform.

---

## 🎯 Project Purpose / Problem Statement

In today's fast-paced world, access to accurate and real-time weather data is crucial for travel, work, and safety.  
**Skycast** was developed to bridge the gap between complex weather APIs and user-friendly interfaces — allowing users to check global weather conditions instantly through a clean, modern dashboard.  

The project focuses on:
- Providing **instant weather forecasts** for any city globally.  
- Presenting **data visually and intuitively** for everyday users.  
- Ensuring **efficiency, accuracy, and performance** using backend optimization and caching.  

---

## ✨ Features

🌍 **Global Coverage** — Get weather details for any city worldwide.  
⚡ **Real-Time Data** — Instant updates with temperature, humidity, and wind speed.  
💾 **MySQL Integration** — Stores and caches city data for better performance.  
🧠 **Smart Validation** — Validates API requests and user inputs.  
🚦 **Rate Limiting** — Controls excessive requests for stability.  
💎 **Responsive UI** — Works perfectly across mobile, tablet, and desktop.  
🎨 **User-Friendly Design** — Modern, elegant, and easy to navigate.  

---

## 🧰 Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL |
| **API** | OpenWeatherMap |
| **Version Control** | Git & GitHub |

---

## 🗂️ Folder Structure

```bash
Skycast-Your-Daily-Weather-Companion/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                # Database connection
│   │   ├── controllers/
│   │   │   └── weather.controller.js # Core weather logic
│   │   ├── middleware/
│   │   │   ├── errorHandler.js
│   │   │   └── rateLimiter.js
│   │   ├── routes/
│   │   │   └── weather.routes.js     # API routes
│   │   ├── services/
│   │   │   └── openweather.service.js # API integration
│   │   └── utils/
│   │       └── validate.js
│   └── server.js                     # Server entry point
│
├── frontend/
│   ├── index.html                    # Main web UI
│   ├── style.css                     # Custom styling
│   └── app.js                        # Frontend scripts
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 🖥 Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create a .env file with:
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=skycast_db
OPENWEATHER_API_KEY=your_openweather_api_key

# Start the backend server
npm start
# or use nodemon for development
npm run dev
```

💡 **The backend runs on:** [http://localhost:5000](http://localhost:5000)

---

### 🌐 Frontend Setup

```bash
# Move to frontend directory
cd frontend

# Open directly in your browser:
index.html

# or run a local dev server
npx live-server
```

💡 **The frontend connects automatically** to your backend API.

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|:-------|:----------|:-------------|
| `GET` | `/api/weather?city={cityName}` | Fetch current weather by city |
| `GET` | `/api/forecast?city={cityName}` | Get 5-day weather forecast |
| `GET` | `/health` | API health check |

**Example Request:**
```bash
GET http://localhost:5000/api/weather?city=London
```

**Example Response:**
```json
{
  "city": "London",
  "temperature": 22,
  "condition": "Cloudy",
  "humidity": 60
}
```

---

## 🧪 Testing

```bash
npm test
```

---

## 🖼️ Screenshots

> *(Add your screenshots inside `frontend/screenshots/` and link them below)*

![Home Screen](frontend/screenshots/home.png)  
![Search Result](frontend/screenshots/search-result.png)

---

## 🧭 Future Improvements

🚀 **Weather Alerts:** Add extreme weather notifications.  
📍 **Location Detection:** Auto-detect user’s location for faster results.  
📅 **Historical Data:** Display past weather patterns for research.  
📊 **Interactive Charts:** Visualize temperature trends over time.  

---

## 📜 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it with attribution.

---

<div align="center">
🌤️ Developed with ❤️ for innovation and learning.

“Stay informed. Stay weather-ready.”
☀️ 🌧️ ⛈️ ❄️ 🌈
</div>
