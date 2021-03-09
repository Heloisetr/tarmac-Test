import { call, takeLatest, put } from 'redux-saga/effects';

import {
  getRealTimeFlightsSuccess,
  getRealTimeFlightsFailure,
  GET_REAL_TIME_FLIGHTS,
  GET_REAL_TIME_FLIGHTS_ACTION,
} from 'actions/DashboardAction';

import DashboardApi from 'api/DashboardApi';
import sortFlightsByChronicleOrder from 'utils/sortFlights';

import IS_DEV from 'constants/global';

function* getRealtimeFlightsFunction(action: GET_REAL_TIME_FLIGHTS_ACTION) {
  const { payload } = action;

  console.log(payload);

  try {
    const { data, status } = yield call(DashboardApi.getRealTimeFlights, payload);

    console.log(data);
    if (status === 200) {
      yield put(getRealTimeFlightsSuccess(sortFlightsByChronicleOrder(data.data)));
    } else {
      IS_DEV && console.log('error');// eslint-disable-line
      yield put(getRealTimeFlightsFailure());
    }
  } catch (e) {
    IS_DEV && console.log('error', e);// eslint-disable-line
    yield put(getRealTimeFlightsFailure());
  }
}

export default function* dashboardSaga() {
  yield takeLatest(GET_REAL_TIME_FLIGHTS, getRealtimeFlightsFunction);
}