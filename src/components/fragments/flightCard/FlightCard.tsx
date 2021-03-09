import React, { PureComponent } from 'react';

import { FlightsContentType } from 'types/DashboardFlightsType';

import Arrow from 'assets/right-arrow.png';

import 'styles/FlightCard.css';

interface Props {
  flightData: FlightsContentType;
}

class FlightCard extends PureComponent<Props> {
  render() {
    const { flightData } = this.props;

    return (
      <div className="flightCardContainer">
        <div className="flightCardDestination">
          <h2 className="flightCardPlace"><strong>{flightData.departure.iata}</strong></h2>
          <img className="FlightCardImg" src={Arrow} alt="arrow"/>
          <h2 className="flightCardPlace">{flightData.arrival.iata}</h2>
        </div>
        <div className="FlightCardScheduledTime">
          <p>{flightData.departure.scheduled.substr(0, 10)} at {flightData.departure.scheduled.substring(11, 16)}</p>
        </div>
        <div className="FlightCardAirline">
          <p>Airline: <strong>{flightData.airline.name}</strong></p>
          <p>Flight no. : {flightData.flight.number}</p>
        </div>
        <div className="FlightCardDepartureInfo">
          {flightData.departure.terminal === null ? (
            <p>Term : <strong>-</strong></p>
          ) : 
          (<p>Term : <strong>{flightData.departure.terminal}</strong></p>)
          }
          {flightData.departure.gate === null ? (
            <p>Gate : <strong>-</strong></p>
          ) : 
          (<p>Gate : <strong>{flightData.departure.gate}</strong></p>)
          }
        </div>
      </div>
    );
  }
}

export default FlightCard;