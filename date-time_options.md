<!--   Get Date/Time snippet from https://www.geeksforgeeks.org/capturing-time-in-react/

  function App() {
      const date = new Date();
      const showTime = date.getHours()
          + ':' + date.getMinutes()
          + ":" + date.getSeconds();

      return (
          <div className="App">
              <h1 align="center">Current Time</h1>
              <h2 align="center"> {showTime}</h2>
          </div>
      );
  }

  export default App;
-->

<!-- Get Date/Time snippet from https://hdtuto.com/article/react-js-get-current-date-and-time-example



  import React, { Component } from 'react';

  import { render } from 'react-dom';

  class App extends Component {
    constructor() {
      this.state = {
        currentDateTime: Date().toLocaleString()
      };
    }

    render() {
      return (
        <div>
          <p>{this.state.currentDateTime}</p>
        </div>
      );
    }
  }

  render(<App />, document.getElementById('root'));
-->
