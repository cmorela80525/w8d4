const React = require("react");

const Index = (props) => {
  return (
    <div>
      <h1>Flights</h1>

      <nav>
        <a href="/flights/new">Add a New Flight</a>
      </nav>

      <ul>
        {props.flights.map((flight, index) => {
          return (
            <li key="">
              {flight.airline} flight number {flight.flightNo} departs {flight.departs.toDateString()}
            . <a href={`flights/${flight._id}`}>Details</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

module.exports = Index;
