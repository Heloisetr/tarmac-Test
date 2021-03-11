function getAirportsData(airportsData: any[]): string[] {
  let iataCode: string[] = [];

  airportsData.map((name) => {
    if (name.iata_code) {
      iataCode.push(name.iata_code);
    }
    return null;
  });

  return iataCode;
}

export default getAirportsData;