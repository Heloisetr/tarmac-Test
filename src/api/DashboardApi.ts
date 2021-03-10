import axios, { AxiosResponse } from 'axios';
import { apiKey, baseUrl } from 'constants/api';

import { ParamsContentType } from 'types/DashboardFlightsType';

const getRealTimeFlights = (params: ParamsContentType): Promise<AxiosResponse> =>
  axios.get(`${baseUrl}/flights?access_key=${apiKey}`, { params: params });

const getCarriers = (): Promise<AxiosResponse> =>
  axios.get(`${baseUrl}/airlines?access_key=${apiKey}`, { params: { limit: 1350 } });

const getAirports = (): Promise<AxiosResponse> =>
  axios.get(`${baseUrl}/airports?access_key=${apiKey}`, { params: { limit: 1350 } });

export default {
  getRealTimeFlights,
  getCarriers,
  getAirports,
}