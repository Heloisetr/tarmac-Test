import axios, { AxiosResponse } from 'axios';
import { apiKey, baseUrl } from 'constants/api';

import { ParamsContentType } from 'types/DashboardFlightsType';

const getRealTimeFlights = (params: ParamsContentType): Promise<AxiosResponse> =>
  axios.get(`${baseUrl}/flights?access_key=${apiKey}`, { params: params });

export default {
  getRealTimeFlights,
}