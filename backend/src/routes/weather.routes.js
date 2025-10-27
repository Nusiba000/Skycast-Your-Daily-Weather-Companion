import { Router } from 'express';
import { getWeather, listSearches } from '../controllers/weather.controller.js';

const router = Router();

router.get('/weather', getWeather);
router.get('/searches', listSearches);

export default router;