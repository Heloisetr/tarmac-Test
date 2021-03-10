import {
  GET_REAL_TIME_FLIGHTS,
  GET_REAL_TIME_FLIGHTS_SUCCESS,
  GET_REAL_TIME_FLIGHTS_FAILURE,
  GET_CARRIERS,
  GET_CARRIERS_SUCCESS,
  GET_CARRIERS_FAILURE,
  GET_AIRPORTS,
  GET_AIRPORTS_SUCCESS,
  GET_AIRPORTS_FAILURE,
} from 'actions/DashboardAction';

import { ActionType } from 'types/ActionsType';
import { FlightsContentType, ParamsContentType } from 'types/DashboardFlightsType';
import Status from 'types/StatusType';

const initialState = {
  flightsData: [],
  getFlightStatus: Status.DEFAULT,
  paramsData: {
    offset: 20,
    limit: 1,
  },
  airlinesName: [],
  getAirlinesStatus: Status.DEFAULT,
  airportsIata: [], 
  getAirportsStatus: Status.DEFAULT,
};

export interface StateType {
  flightsData: FlightsContentType[];
  getFlightStatus: Status;
  paramsData: ParamsContentType;
  airlinesName: string[];
  getAirlinesStatus: Status;
  airportsIata: string[];
  getAirportsStatus: Status;
}

export default function dashboardState(state: StateType = initialState, action: ActionType): StateType {
  switch(action.type) {
    case GET_REAL_TIME_FLIGHTS:
      return {
        ...state,
        getFlightStatus: Status.LOADING,
      };

    case GET_REAL_TIME_FLIGHTS_SUCCESS:
      return {
        ...state,
        getFlightStatus: Status.SUCCESS,
        flightsData: action.payload,
      };

    case GET_REAL_TIME_FLIGHTS_FAILURE:
      return {
        ...state,
        getFlightStatus: Status.FAIL,
      };

    case GET_CARRIERS:
      return {
        ...state,
        getAirlinesStatus: Status.LOADING,
      };

    case GET_CARRIERS_SUCCESS:
      return {
        ...state,
        getAirlinesStatus: Status.SUCCESS,
        airlinesName: action.payload,
      };

    case GET_CARRIERS_FAILURE:
      return {
        ...state,
        getAirlinesStatus: Status.FAIL,
      };

    case GET_AIRPORTS:
      return {
        ...state,
        getAirportsStatus: Status.LOADING,
      };

    case GET_AIRPORTS_SUCCESS:
      return {
        ...state,
        getAirportsStatus: Status.SUCCESS,
        airportsIata: action.payload,
      };

    case GET_AIRPORTS_FAILURE:
      return {
        ...state,
        getAirportsStatus: Status.FAIL,
      };

    default:
      return state;
  }
}
