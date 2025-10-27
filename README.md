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

**Skycast** is a sleek and interactive web application that delivers **real-time weather information**, detailed forecasts, and temperature insights for any city on Earth.  
It features a clean and responsive frontend integrated with a robust **Node.js + Express** backend powered by the **OpenWeatherMap API**.

---

## ✨ Features

🌍 **Global Coverage** — Get weather details for any city worldwide.  
⚡ **Real-Time Data** — Instant updates with live temperature, humidity, and wind.  
💾 **MySQL Integration** — Store weather history and improve performance.  
🧠 **Smart Validation** — Ensures clean API requests and user input handling.  
🚦 **Rate Limiting** — Prevents API overload for smooth performance.  
💎 **Responsive UI** — Fully mobile-friendly, minimalist design.  

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

Skycast-Your-Daily-Weather-Companion/
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ │ └── db.js # Database connection
│ │ ├── controllers/
│ │ │ └── weather.controller.js # Core weather logic
│ │ ├── middleware/
│ │ │ ├── errorHandler.js
│ │ │ └── rateLimiter.js
│ │ ├── routes/
│ │ │ └── weather.routes.js # API routes
│ │ ├── services/
│ │ │ └── openweather.service.js # API integration
│ │ └── utils/
│ │ └── validate.js
│ └── server.js # Server entry point
│
├── frontend/
│ ├── index.html # Main web UI
│ ├── style.css # Custom styling
│ └── app.js # Frontend scripts
│
└── README.md



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

💡 The backend runs on: http://localhost:5000

### 🌐 Frontend Setup
# Move to frontend directory
cd frontend

# Open directly in browser:
index.html

# or run a local dev server
npx live-server

The frontend connects automatically to your backend API.

### 🔗 API Endpoints

Method	Endpoint	Description
GET	/api/weather?city={cityName}	Fetch weather by city
GET	/api/forecast?city={cityName}	Get 5-day forecast
GET	/health	API health check

