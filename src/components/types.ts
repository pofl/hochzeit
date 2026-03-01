export interface FlightSegment {
  from: string;
  to: string;
  departure: string;
  arrival: string;
  flightNumber?: string;
}

export interface FlightConnection {
  guests: string[];
  route: FlightSegment[];
}
