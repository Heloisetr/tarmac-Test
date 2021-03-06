import axios, { AxiosResponse } from 'axios';
import { apiKey, baseUrl } from 'constants/api';

const getRealTimeFlights = (): Promise<AxiosResponse> =>
  axios.get(`${baseUrl}/flights?access_key=${apiKey}`);

export default {
  getRealTimeFlights,
}