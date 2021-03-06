import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Status from 'types/StatusType';
import { FlightsContentType } from 'types/DashboardFlightsType';

import 'styles/DashboardFlights.css';

export interface DispatchProps {
  getRealTimeFlights: Function;
}

export interface StateProps {
  flightsData: FlightsContentType[];
  getFlightStatus: Status;
}

type Props = {} & DispatchProps & StateProps & RouteComponentProps;

class DashboardFlights extends Component<Props> {
  componentDidMount() {
    const { getRealTimeFlights } = this.props;

    getRealTimeFlights();
  }
  
  displayData = () => {
    const { flightsData } = this.props;
    console.log(flightsData);
    return (
      flightsData.map((flight: FlightsContentType, index) => {
        return (
          <div key={index}>
            <p>{flight.departure.airport}</p>
            <p>{flight.departure.scheduled}</p>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div>
        {this.displayData()}
      </div>
    );
  }
}

export default withRouter(DashboardFlights);
