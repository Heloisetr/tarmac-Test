import React, { PureComponent } from 'react';

import { FlightsContentType } from 'types/DashboardFlightsType';

import Arrow from 'assets/right-arrow.png';

import 'styles/FlightCard.css';

interface Props {
  flightData: FlightsContentType;
}

class FlightCard extends PureComponent<Props> {

  setStatusColor = (flightStatus: string) => {
    switch(flightStatus) {
      case 'cancelled':
        return "red";
      case 'scheduled':
        return "orange";
      case 'landed':
        return "blue";
      case 'active':
        return "green";
      default:
        return "grey";
    }
  }
  
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
          <p style={{color: `${this.setStatusColor(flightData.flight_status)}`}}>
            {flightData.flight_status !== null && flightData.flight_status.toUpperCase()}
          </p>
        </div>
        <div className="FlightCardAirline">
          <p>Airline: <strong>{flightData.airline.name}</strong></p>
          <p>Flight no. : {flightData.flight.iata}</p>
        </div>
        <div className="FlightCardDepartureInfo">
          <img src={`https://daisycon.io/images/airline/?width=300&height=150&color=ffffff&iata=${flightData.airline.iata}`} alt={flightData.airline.name} className="FlightCardLogo"/>
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