import { connect } from 'react-redux';

import DashboardFlights, { DispatchProps, StateProps } from 'components/dashboard/DashboardFlights';
import { getRealTimeFlights, getCarriers, getAirports } from 'actions/DashboardAction';

import { StateType } from 'types/ReducersType';

const mapDispatchToProps: DispatchProps = {
  getRealTimeFlights,
  getCarriers,
  getAirports,
};

const mapStateToProps = (state: StateType): StateProps => ({
  flightsData: state.dashboardState.flightsData,
  getFlightStatus: state.dashboardState.getFlightStatus,
  airlinesName: state.dashboardState.airlinesName,
  getAirlinesStatus: state.dashboardState.getAirlinesStatus,
  airportsIata: state.dashboardState.airportsIata,
  getAirportsStatus: state.dashboardState.getAirportsStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardFlights);
