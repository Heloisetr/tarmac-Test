import getCarriersName from '../src/utils/CarriersName';

describe('getCarriersName', function() {
  it('is array empty', function() {
    let result = getCarriersName([]);
    expect(result).toStrictEqual([]);   
  });

  it('with object', function() {
    let array = [
      {airline_name: "American Airlines", fleet_average_age: "10.9", callsign: "AMERICAN", hub_code: "DFW", iata_code: "AA", icao_code: "AAL"},
      {airline_name: "Delta Air Lines", fleet_average_age: "17", callsign: "DELTA", hub_code: "ATL", iata_code: "DL", icao_code: "DAL"},
      {airline_name: "United Airlines", fleet_average_age: "13.8", callsign: "UNITED", hub_code: "ORD", iata_code: "UA", icao_code: "UAL"},
    ];
    
    let result = getCarriersName(array);
    expect(result).toStrictEqual(["American Airlines", "Delta Air Lines", "United Airlines"]);
  });

  it('without airline_name in object ', function() {
    let array = [
      {fleet_average_age: "10.9", callsign: "AMERICAN", hub_code: "DFW", iata_code: "AA", icao_code: "AAL"},
      {fleet_average_age: "17", callsign: "DELTA", hub_code: "ATL", iata_code: "DL", icao_code: "DAL"},
      {fleet_average_age: "13.8", callsign: "UNITED", hub_code: "ORD", iata_code: "UA", icao_code: "UAL"},
    ];
    
    let result = getCarriersName(array);
    expect(result).toStrictEqual([]);
  });
});
