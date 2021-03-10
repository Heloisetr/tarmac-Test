import { call, takeLatest, put } from 'redux-saga/effects';

import {
  getRealTimeFlightsSuccess,
  getRealTimeFlightsFailure,
  GET_REAL_TIME_FLIGHTS,
  GET_REAL_TIME_FLIGHTS_ACTION,
  getCarriersSuccess,
  getCarriersFailure,
  GET_CARRIERS,
  getAirportsSuccess,
  getAirportsFailure,
  GET_AIRPORTS,
} from 'actions/DashboardAction';

import DashboardApi from 'api/DashboardApi';

import sortFlightsByChronicleOrder from 'utils/sortFlights';
import getCarriersName from 'utils/CarriersName';
import getAirportsData from 'utils/AirportData';

import IS_DEV from 'constants/global';

function* getRealtimeFlightsFunction(action: GET_REAL_TIME_FLIGHTS_ACTION) {
  const { payload } = action;

  try {
    const { data, status } = yield call(DashboardApi.getRealTimeFlights, payload);

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

function* getCarriersFunction() {
  try {
    const { data, status } = yield call(DashboardApi.getCarriers);

    if (status === 200) {
      yield put(getCarriersSuccess(getCarriersName(data.data)));
    } else {
      IS_DEV && console.log('error');// eslint-disable-line
    yield put(getCarriersFailure());
    }
  } catch (e) {
    IS_DEV && console.log('error', e);// eslint-disable-line
    yield put(getCarriersFailure());
  }
}

function* getAirportsFunction() {
  try {
    const { data, status } = yield call(DashboardApi.getAirports);
    console.log(data);
    if (status === 200) {
      yield put(getAirportsSuccess(getAirportsData(data.data)));
    } else {
      IS_DEV && console.log('error');// eslint-disable-line
    yield put(getAirportsFailure());
    }
  } catch (e) {
    IS_DEV && console.log('error', e);// eslint-disable-line
    yield put(getAirportsFailure());
  }
}

export default function* dashboardSaga() {
  yield takeLatest(GET_REAL_TIME_FLIGHTS, getRealtimeFlightsFunction);
  yield takeLatest(GET_CARRIERS, getCarriersFunction);
  yield takeLatest(GET_AIRPORTS, getAirportsFunction);
}