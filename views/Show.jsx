const React = require('react');

//create a show function (class based is depricated)
const Show = (props) => { 
  return (
    <div>
        <a href='/flights'>All Flights</a>
        <a href='/flights/new'>Add Flight</a>
    <h1>Show Page!</h1>
    The {props.flight.airline} is {props.flight.flightNo} and departs {props.flight.departs.toDateString()}
    </div>
  )
}

module.exports = Show;

