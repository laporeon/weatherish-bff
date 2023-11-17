import 'dotenv/config';

import cors from 'cors';
import express from 'express';

import { routes } from './routes/weather-routes.js';

const port = 3000 || process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
