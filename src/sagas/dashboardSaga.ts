import { call, takeLatest, put } from 'redux-saga/effects';

import {
  getRealTimeFlightsSuccess,
  getRealTimeFlightsFailure,
  GET_REAL_TIME_FLIGHTS,
} from 'actions/DashboardAction';

import DashboardApi from 'api/DashboardApi';

import IS_DEV from 'constants/global';

function* getRealtimeFlightsFunction() {
  try {
    const { data, status } = yield call(DashboardApi.getRealTimeFlights);

    console.log(data);
    if (status === 200) {
      yield put(getRealTimeFlightsSuccess(data.data));
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