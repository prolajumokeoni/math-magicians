import { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';

const calculator = () => {
  const [obj, setState] = useState({ total: null, next: null, operation: null });

  const manageClicks = (e) => {
    setState(calculate(obj, e.target.value));
  };

  return (

    <div className="container d-flex justify-content-between">
      <h3>Lets do some maths!</h3>
      <div className="appCalc">
        <div className="screenInput">
          <Display total={obj.total} operation={obj.operation} next={obj.next} />
        </div>
        <div className="btnBox">
          <input type="button" onClick={manageClicks} value="AC" />
          <input type="button" onClick={manageClicks} value="+/-" />
          <input type="button" onClick={manageClicks} value="%" />
          <input
            type="button"
            className="orange"
            onClick={manageClicks}
            value="÷"
          />
        </div>
        <div className="btnBox">
          <input type="button" onClick={manageClicks} value="7" />
          <input type="button" onClick={manageClicks} value="8" />
          <input type="button" onClick={manageClicks} value="9" />
          <input
            type="button"
            className="orange"
            onClick={manageClicks}
            value="x"
          />
        </div>
        <div className="btnBox">
          <input type="button" onClick={manageClicks} value="4" />
          <input type="button" onClick={manageClicks} value="5" />
          <input type="button" onClick={manageClicks} value="6" />
          <input
            type="button"
            className="orange"
            onClick={manageClicks}
            value="-"
          />
        </div>
        <div className="btnBox">
          <input type="button" onClick={manageClicks} value="1" />
          <input type="button" onClick={manageClicks} value="2" />
          <input type="button" onClick={manageClicks} value="3" />
          <input
            type="button"
            className="orange"
            onClick={manageClicks}
            value="+"
          />
        </div>
        <div className="btnBox">
          <input
            type="button"
            className="zero"
            onClick={manageClicks}
            value="0"
          />
          <input type="button" onClick={manageClicks} value="." />
          <input
            type="button"
            className="orange"
            onClick={manageClicks}
            value="="
          />
        </div>
      </div>
    </div>

  );
};

export default calculator;
