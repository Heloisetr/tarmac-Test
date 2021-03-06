import { connect } from 'react-redux';

import DashboardFlights, { DispatchProps, StateProps } from 'components/dashboard/DashboardFlights';
import { getRealTimeFlights } from 'actions/DashboardAction';

import { StateType } from 'types/ReducersType';

const mapDispatchToProps: DispatchProps = {
  getRealTimeFlights,
};

const mapStateToProps = (state: StateType): StateProps => ({
  flightsData: state.dashboardState.flightsData,
  getFlightStatus: state.dashboardState.getFlightStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardFlights);
