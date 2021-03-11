import { FlightsContentType } from 'types/DashboardFlightsType';

function sortFlightsByChronicleOrder(flightsData: FlightsContentType[]): FlightsContentType[] {
  return (flightsData.sort(function(a, b) {
    if (a.departure.scheduled && b.departure.scheduled) {
      return (a.departure.scheduled < b.departure.scheduled ? -1 : 1);
    }
    return -1;
  }));
  //return flightsData.sort((a, b) => (a.departure.scheduled < b.departure.scheduled ? -1 : 1));
}

export default sortFlightsByChronicleOrder;

