const React = require('react')

const currentDate = new Date()

const New = (props) => {
    return(
        <div>
           <h1>New Flight</h1> 

            <form action='/flights' method='POST'>
                <label>Airline Name:</label>
                <input type='text' name='airline'></input><br></br>
                <label>Flight Number:</label>
                <input type='text' name='flightNo'></input><br></br>
                <label>Departure Date:</label>
                <input type='datetime-local' name='departs' value="2022-09-24T16:25"></input><br></br>
                <input type="submit" name="" defaultValue="Create Flight"></input>
            </form>
        </div>
    )
}

module.exports = New