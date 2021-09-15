import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="appCalc">
        <div className="screenInput">0</div>
        <div className="btnBox">
          <input type="button" value="AC" />
          <input type="button" value="+/-" />
          <input type="button" value="%" />
          <input type="button" className="orange" value="÷" />
        </div>
        <div className="btnBox">
          <input type="button" value="7" />
          <input type="button" value="8" />
          <input type="button" value="9" />
          <input type="button" className="orange" value="X" />
        </div>
        <div className="btnBox">
          <input type="button" value="4" />
          <input type="button" value="5" />
          <input type="button" value="6" />
          <input type="button" className="orange" value="-" />
        </div>
        <div className="btnBox">
          <input type="button" value="1" />
          <input type="button" value="2" />
          <input type="button" value="3" />
          <input type="button" className="orange" value="+" />
        </div>
        <div className="btnBox">
          <input type="button" className="zero" value="0" />
          <input type="button" value="." />
          <input type="button" className="orange" value="=" />
        </div>

      </div>
    );
  }
}

export default Calculator;
