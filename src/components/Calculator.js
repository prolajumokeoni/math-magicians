import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: '',
      next: '',
    };
  }

  manageClicks = (e) => {
    this.setState((obj) => calculate(obj, e.target.value));
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="appCalc">
        <div className="screenInput">
          <Display total={total} operation={operation} next={next} />
        </div>
        <div className="btnBox">
          <input type="button" onClick={this.manageClicks} value="AC" />
          <input type="button" onClick={this.manageClicks} value="+/-" />
          <input type="button" onClick={this.manageClicks} value="%" />
          <input
            type="button"
            className="orange"
            onClick={this.manageClicks}
            value="÷"
          />
        </div>
        <div className="btnBox">
          <input type="button" onClick={this.manageClicks} value="7" />
          <input type="button" onClick={this.manageClicks} value="8" />
          <input type="button" onClick={this.manageClicks} value="9" />
          <input
            type="button"
            className="orange"
            onClick={this.manageClicks}
            value="X"
          />
        </div>
        <div className="btnBox">
          <input type="button" onClick={this.manageClicks} value="4" />
          <input type="button" onClick={this.manageClicks} value="5" />
          <input type="button" onClick={this.manageClicks} value="6" />
          <input
            type="button"
            className="orange"
            onClick={this.manageClicks}
            value="-"
          />
        </div>
        <div className="btnBox">
          <input type="button" onClick={this.manageClicks} value="1" />
          <input type="button" onClick={this.manageClicks} value="2" />
          <input type="button" onClick={this.manageClicks} value="3" />
          <input
            type="button"
            className="orange"
            onClick={this.manageClicks}
            value="+"
          />
        </div>
        <div className="btnBox">
          <input
            type="button"
            className="zero"
            onClick={this.manageClicks}
            value="0"
          />
          <input type="button" onClick={this.manageClicks} value="." />
          <input
            type="button"
            className="orange"
            onClick={this.manageClicks}
            value="="
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
