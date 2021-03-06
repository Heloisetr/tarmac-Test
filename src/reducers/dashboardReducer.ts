import {
  GET_REAL_TIME_FLIGHTS,
  GET_REAL_TIME_FLIGHTS_SUCCESS,
  GET_REAL_TIME_FLIGHTS_FAILURE,
} from 'actions/DashboardAction';

import { ActionType } from 'types/ActionsType';
import { FlightsContentType } from 'types/DashboardFlightsType';
import Status from 'types/StatusType';

const initialState = {
  flightsData: [],
  getFlightStatus: Status.DEFAULT,
};

export interface StateType {
  flightsData: FlightsContentType[];
  getFlightStatus: Status;
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

    default:
      return state;
  }
}
