const React = require("react");

const currentDate = new Date();

const New = (props) => {
  return (
    <div>
      <h1>New Flight</h1>

      <form action="/flights" method="POST">
        <label>Airline Name:</label>
        <input type="text" name="airline"></input>
        <br></br>
        <label>Flight Number:</label>
        <input type="text" name="flightNo"></input>
        <br></br>

        <input type="submit" name="" value="Create Flight"></input>
      </form>
    </div>
  );
};

module.exports = New;
