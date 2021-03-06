export interface FlightsContentType {
  "flight_date": string;
  "departure": DepartureDataType;
  "arrival": ArrivalDataType;
  "airline": {
    "name": string;
  };
  "flight": {
    "number": string;
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
