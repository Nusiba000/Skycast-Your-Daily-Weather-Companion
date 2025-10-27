import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import weatherRoutes from './routes/weather.routes.js';
import { apiLimiter } from './middleware/rateLimiter.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import { health } from './config/db.js';

dotenv.config();
const app = express();

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.use(express.json());

const allowedOrigin = process.env.FRONTEND_ORIGIN || '*';
app.use(cors({
  origin: allowedOrigin === '*' ? true : [allowedOrigin],
  methods: ['GET','POST','OPTIONS'],
  credentials: false
}));

app.use('/api', apiLimiter, weatherRoutes);

app.get('/api/health', async (_req, res) => {
  const dbOk = await health().catch(() => false);
  res.json({ ok: true, db: !!dbOk, env: process.env.NODE_ENV || 'development' });
});

app.use(notFound);
app.use(errorHandler);

const PORT = Number(process.env.PORT || 4000);
app.listen(PORT, () => {
  console.log(`SkyCast backend listening on http://localhost:${PORT}`);
});