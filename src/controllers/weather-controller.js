import { openWeatherBaseURL } from '../config/api/openWeatherApi.js';

const { API_KEY } = process.env;

export class WeatherController {
  async get(request, response) {
    try {
      const { city, units } = request.query;

      if (!city) return response.status(400).json({ message: 'Missing city.' });

      const { data } = await openWeatherBaseURL.get(
        `data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`,
      );

      response.status(200).json(data);
    } catch (error) {
      response.status(500).json({ error });
    }
  }
}
