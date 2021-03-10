import { FlightsContentType, ParamsContentType } from 'types/DashboardFlightsType';

export type Action =
  | GET_REAL_TIME_FLIGHTS_ACTION
  | GET_REAL_TIME_FLIGHTS_SUCCESS_ACTION
  | GET_REAL_TIME_FLIGHTS_FAILURE_ACTION
  | GET_CARRIERS_ACTION
  | GET_CARRIERS_SUCCESS_ACTION
  | GET_CARRIERS_FAILURE_ACTION
  | GET_AIRPORTS_ACTION
  | GET_AIRPORTS_SUCCESS_ACTION
  | GET_AIRPORTS_FAILURE_ACTION;

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

export const GET_CARRIERS = 'GET_CARRIERS';
export const getCarriers = (): GET_CARRIERS_ACTION => ({
  type: GET_CARRIERS,
});

export const GET_CARRIERS_SUCCESS = 'GET_CARRIERS_SUCCESS';
export const getCarriersSuccess = (carriersName: string[]): GET_CARRIERS_SUCCESS_ACTION => ({
  type: GET_CARRIERS_SUCCESS,
  payload: carriersName,
});

export const GET_CARRIERS_FAILURE = 'GET_CARRIERS_FAILURE';
export const getCarriersFailure = (): GET_CARRIERS_FAILURE_ACTION => ({
  type: GET_CARRIERS_FAILURE,
});

export const GET_AIRPORTS = 'GET_AIRPORTS';
export const getAirports = (): GET_AIRPORTS_ACTION => ({
  type: GET_AIRPORTS,
});

export const GET_AIRPORTS_SUCCESS = 'GET_AIRPORTS_SUCCESS';
export const getAirportsSuccess = (airportsIata: string[]): GET_AIRPORTS_SUCCESS_ACTION => ({
  type: GET_AIRPORTS_SUCCESS,
  payload: airportsIata,
}); 

export const GET_AIRPORTS_FAILURE = 'GET_AIRPORTS_FAILURE';
export const getAirportsFailure = (): GET_AIRPORTS_FAILURE_ACTION => ({
  type: GET_AIRPORTS_FAILURE,
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

export interface GET_CARRIERS_ACTION {
  type: typeof GET_CARRIERS;
}

export interface GET_CARRIERS_SUCCESS_ACTION {
  type: typeof GET_CARRIERS_SUCCESS;
  payload: string[];
}

export interface GET_CARRIERS_FAILURE_ACTION {
  type: typeof GET_CARRIERS_FAILURE;
}

export interface GET_AIRPORTS_ACTION {
  type: typeof GET_AIRPORTS;
}

export interface GET_AIRPORTS_SUCCESS_ACTION {
  type: typeof GET_AIRPORTS_SUCCESS;
  payload: string[];
}

export interface GET_AIRPORTS_FAILURE_ACTION {
  type: typeof GET_AIRPORTS_FAILURE;
}
