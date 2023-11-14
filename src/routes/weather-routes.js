import { Router } from 'express';

import { WeatherController } from '../controllers/weather-controller.js';

const routes = Router();
const weatherController = new WeatherController();

routes.get('/', weatherController.get);

export { routes };
