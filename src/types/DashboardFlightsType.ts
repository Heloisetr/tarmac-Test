export interface FlightsContentType {
  "flight_date": string;
  "flight_status": string;
  "departure": DepartureDataType;
  "arrival": ArrivalDataType;
  "airline": {
    "name": string;
    "iata": string;
  };
  "flight": {
    "number": string;
    "iata": number;
  };
}

export interface DepartureDataType {
  "airport": string;
  "iata": string;
  "terminal": string | null;
  "gate": string | null;
  "scheduled": string;
}

export interface ArrivalDataType {
  "airport": string;
  "iata": string;
}

export interface ParamsContentType {
  "offset": number;
  "limit": number;
  "airline_name"?: string;
  "dep_iata"?: string;
}

export interface AirportsContentType {
  "airportName": string[];
  "iataCode": string[];
}