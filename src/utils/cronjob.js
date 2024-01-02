import axios from 'axios';

export const preventRenderSleepMode = async () => {
  try {
    const response = await axios.get('https://weatherish-bff.onrender.com/');
    console.log({ status: response.status });
  } catch (error) {
    console.log(error);
  }
};
