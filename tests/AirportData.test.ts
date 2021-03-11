import getAirportsData from '../src/utils/AirportData';

describe('getAirportsData', function() {
  it('is array empty', function() {
    let result = getAirportsData([]);
    expect(result).toStrictEqual([]);   
  });

  it('with object', function() {
    let array = [
      {gmt: "-10", iata_code: "AAA", city_iata_code: "AAA", icao_code: "NTGA", country_iso2: "PF"},
      {gmt: "10", iata_code: "AAB", city_iata_code: "AAB", icao_code: "YARY", country_iso2: "AU"},
      {gmt: "2", iata_code: "AAC", city_iata_code: "AAC", icao_code: "HEAR", country_iso2: "EG"},
    ];
    
    let result = getAirportsData(array);
    expect(result).toStrictEqual(["AAA", "AAB", "AAC"]);
  });

  it('without iata_code in object ', function() {
    let array = [
      {gmt: "-10", city_iata_code: "AAA", icao_code: "NTGA", country_iso2: "PF"},
      {gmt: "10", city_iata_code: "AAB", icao_code: "YARY", country_iso2: "AU"},
      {gmt: "2", city_iata_code: "AAC", icao_code: "HEAR", country_iso2: "EG"},
    ];
    
    let result = getAirportsData(array);
    expect(result).toStrictEqual([]);
  });
});
