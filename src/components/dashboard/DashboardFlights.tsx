import React, { Component, ChangeEvent, FormEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Hint } from 'react-autocomplete-hint';

import Status from 'types/StatusType';
import { FlightsContentType } from 'types/DashboardFlightsType';

import DashboardHeader from 'components/fragments/header/DashboardHeader';
import FlightCard from 'components/fragments/flightCard/FlightCard';
import Pagination from 'components/fragments/pagination/Pagination';

import Filter from 'assets/filter.png';

import 'styles/DashboardFlights.css';

export interface DispatchProps {
  getRealTimeFlights: Function;
  getCarriers: Function;
  getAirports: Function;
}

export interface StateProps {
  flightsData: FlightsContentType[];
  getFlightStatus: Status;
  airlinesName: string[];
  getAirlinesStatus: Status;
  airportsIata: string[];
  getAirportsStatus: Status;
}

export interface State {
  limit: number;
  offset: number;
  airline: string;
  requestValue: string;
  iataCode: string;
  filterIsOpen: boolean;
}

type Props = {} & DispatchProps & StateProps & RouteComponentProps;

class DashboardFlights extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      limit: 51,
      offset: 20,
      airline: '',
      requestValue: '',
      iataCode: '',
      filterIsOpen: false,
    };
  }

  componentDidMount() {
    const { getRealTimeFlights, getCarriers, getAirports } = this.props;
    const { limit } = this.state;

    getRealTimeFlights({ offset: 0, limit: limit });
    getCarriers();
    getAirports();
  }

  sendParamsFlights = (pageNumber: number) => {
    const { getRealTimeFlights } = this.props;
    const { limit, airline, iataCode } = this.state;
    
    let countElementPage = (pageNumber - 1) * 51;
    this.setState({ offset: countElementPage });

    getRealTimeFlights({ offset: countElementPage, limit: limit, airline_name: airline, dep_iata: iataCode });
  }

  sendRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { requestValue } = this.state;

    switch (requestValue) {
      case 'airline':
        return this.sendAirline();

      case 'airport':
        return this.sendAirport();

      default:
        return null;
    }
  }

  handleChangeRequest = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    this.setState({ requestValue: event.target.value });
  };

  sendAirline = () => {
    const { getRealTimeFlights } = this.props;
    const { offset, limit, airline } = this.state;

    getRealTimeFlights({ offset: offset, limit: limit, airline_name: airline });
  }

  handleChangeAirline = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    this.setState({ airline: event.target.value });
  }

  sendAirport = () => {
    const { getRealTimeFlights } = this.props;
    const { offset, limit, iataCode } = this.state;
    
    getRealTimeFlights({ offset: offset, limit: limit, dep_iata: iataCode });

  }

  handleChangeAirport = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    this.setState({ iataCode: event.target.value});
  }

  renderWhichRequestSelect() {
    const { requestValue } = this.state;
    return (
      <div className="DashboardFlightsRequestBar">
        <select className="DashboardFlightsSelect" value={requestValue} onChange={this.handleChangeRequest}>
          <option value="">Choose your filters</option>
          <option value="airline">Carriers</option>
          <option value="airport">Depart Airports</option>
        </select>
      </div>
    );
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

  renderOptionSelect() {
    const { requestValue } = this.state;

    switch (requestValue) {
      case 'airline':
        return this.renderAirlinesSelect();

      case 'airport':
        return this.renderAirportsSelect();

      default:
        return null;
    }
  }

  renderAirlinesSelect = () => {
    const { airline } = this.state;
    const { airlinesName } = this.props;

    return (
      <div>
        <Hint options={airlinesName} allowTabFill>
          <input className='input-with-hint'
            value={airline}
            onChange={this.handleChangeAirline}
          />
        </Hint>
        <div className="DashboardFlightsButtonSubmitContainer">
          <button className="DashboardFlightsButtonSubmit" type="submit">Search</button>
        </div>
      </div>
    );
  }

  renderAirportsSelect = () => {
    const { iataCode } = this.state;
    const { airportsIata } = this.props;

    return (
      <div>
        <Hint options={airportsIata} allowTabFill>
          <input className='input-with-hint'
            value={iataCode}
            onChange={this.handleChangeAirport}
          />
        </Hint>
        <div className="DashboardFlightsButtonSubmitContainer">
          <button className="DashboardFlightsButtonSubmit" type="submit">Search</button>
        </div>
      </div>
    );
  }

  filterOpen = () => {
    const { filterIsOpen } = this.state;

    this.setState({ filterIsOpen: !filterIsOpen });
  }

  render() {
    const { filterIsOpen } = this.state;

    return (
      <div>
        <DashboardHeader />
        <div className="DashboardFlightsContainer">
          <div className="DashboardFlightsFilterActivation" onClick={() => {this.filterOpen()}}>
            <img className="DashboardFlightsFilterImg" src={Filter} alt="filter"/>
            <p className="DashboardFlightsFilterName">All filters</p>
          </div>
          { filterIsOpen && (
            <form onSubmit={this.sendRequest}>
              <div className="DashboardFlightsFilterContainer">
                <div className="DashboardFlightsFilterBar">
                {this.renderWhichRequestSelect()}
                {this.renderOptionSelect()}
                </div>
              </div>
          </form>
          )}
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
