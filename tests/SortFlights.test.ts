import sortFlightsByChronicleOrder from '../src/utils/sortFlights';
import data from './flight.json';
import resultData from './resultFlight.json';
import dataMissing from './dataMissingFlight.json';

describe('sortFlightsByChronicleOrder', function() {
  it('is array empty', function() {
    let result = sortFlightsByChronicleOrder([]);
    expect(result).toStrictEqual([]);   
  });

  it('with object', function() {
    let array = data;
    
    let result = sortFlightsByChronicleOrder(array);
    expect(result).toStrictEqual(resultData);
  });

  it('without airline_name in object ', function() {
    let array = dataMissing;
    
    let result = sortFlightsByChronicleOrder(array);
    expect(result).toStrictEqual(dataMissing);
  });
});
