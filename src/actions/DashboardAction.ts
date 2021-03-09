import { FlightsContentType, ParamsContentType } from 'types/DashboardFlightsType';

export type Action =
  | GET_REAL_TIME_FLIGHTS_ACTION
  | GET_REAL_TIME_FLIGHTS_SUCCESS_ACTION
  | GET_REAL_TIME_FLIGHTS_FAILURE_ACTION;

export const GET_REAL_TIME_FLIGHTS = 'GET_REAL_TIME_FLIGHTS';
export const getRealTimeFlights = (paramsData: ParamsContentType): GET_REAL_TIME_FLIGHTS_ACTION => ({
  type: GET_REAL_TIME_FLIGHTS,
  payload: paramsData,
});

export const GET_REAL_TIME_FLIGHTS_SUCCESS = 'GET_REAL_TIME_FLIGHTS_SUCCESS';
export const getRealTimeFlightsSuccess = (flightsData: FlightsContentType[]): GET_REAL_TIME_FLIGHTS_SUCCESS_ACTION => ({
  type: GET_REAL_TIME_FLIGHTS_SUCCESS,
  payload: flightsData,
});

export const GET_REAL_TIME_FLIGHTS_FAILURE = 'GET_REAL_TIME_FLIGHTS_FAILURE';
export const getRealTimeFlightsFailure = (): GET_REAL_TIME_FLIGHTS_FAILURE_ACTION => ({
  type: GET_REAL_TIME_FLIGHTS_FAILURE,
});

export interface GET_REAL_TIME_FLIGHTS_ACTION {
  type: typeof GET_REAL_TIME_FLIGHTS;
  payload: ParamsContentType;
}

export interface GET_REAL_TIME_FLIGHTS_SUCCESS_ACTION {
  type: typeof GET_REAL_TIME_FLIGHTS_SUCCESS;
  payload: FlightsContentType[];
}

export interface GET_REAL_TIME_FLIGHTS_FAILURE_ACTION {
  type: typeof GET_REAL_TIME_FLIGHTS_FAILURE;
}
