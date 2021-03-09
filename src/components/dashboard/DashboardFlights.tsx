import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Status from 'types/StatusType';
import { FlightsContentType } from 'types/DashboardFlightsType';

import DashboardHeader from 'components/fragments/header/DashboardHeader';
import FlightCard from 'components/fragments/flightCard/FlightCard';
import Pagination from 'components/fragments/pagination/Pagination';

import 'styles/DashboardFlights.css';

export interface DispatchProps {
  getRealTimeFlights: Function;
}

export interface StateProps {
  flightsData: FlightsContentType[];
  getFlightStatus: Status;
}

export interface State {
  limit: number;
  offset: number;
}

type Props = {} & DispatchProps & StateProps & RouteComponentProps;

class DashboardFlights extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      limit: 20,
      offset: 20,
    };
  }

  componentDidMount() {
    const { getRealTimeFlights } = this.props;
    const { limit } = this.state;

    getRealTimeFlights({ offset: 0, limit: limit });
  }

  sendParamsFlights = (pageNumber: number) => {
    const { getRealTimeFlights } = this.props;
    const { limit } = this.state;
    
    let countElementPage = (pageNumber - 1) * 20;

    getRealTimeFlights({ offset: countElementPage, limit: limit });
  }


  displayData = () => {
    const { flightsData } = this.props;

    return (
      flightsData.map((flight: FlightsContentType, index) => {
        return (
          <div key={index} className="DashboardCardContainer">
            <FlightCard flightData={flight} />
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <DashboardHeader />
        <div className="DashboardFlightsContainer">
          <div className="DashboardFlightCard">
            {this.displayData()}
          </div>
        </div>
        <Pagination limit={10} sendParamsFlights={this.sendParamsFlights}/>
      </div>
    );
  }
}

export default withRouter(DashboardFlights);
