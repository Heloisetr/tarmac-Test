function getAirportsData(airportsData: any[]): string[] {
  let iataCode: string[] = [];

  airportsData.map((name) => {
    iataCode.push(name.iata_code);
    
    return null;
  });

  return iataCode;
}

export default getAirportsData;