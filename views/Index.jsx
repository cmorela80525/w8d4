const React = require('react')

const Index = (props) => {
    return (
        <div>
          <h1>Flights</h1>

          <nav>
            <a href='/flights/new'>Add a New Flight</a>
          </nav>
            
            <ul>
               {
               props.poops.map((flight, index) => {
                return(
                <li key=''>
                  {flight.airline} flight number {flight.flightNo} departs {flight.departs}
                </li>
                )
               })
               }

            </ul>


        </div>
    )
}

module.exports = Index