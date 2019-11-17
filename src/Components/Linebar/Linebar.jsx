import React, { Component } from "react";

class Linebar extends Component {
  getCoefficients = () => {
    const { previous, current } = this.props;
    const isNewLarger = current > previous;

    const prevCoeff = isNewLarger ? previous / current : 1;
    const currCoeff = !isNewLarger ? current / previous : 1;

    return {
      prev: Math.max(prevCoeff, 0.5),
      curr: Math.max(currCoeff, 0.5),
    }
  }

  render() {
    const { prev, curr } = this.getCoefficients();
    return (
      <div className="linebar-container">
          <div
            style={{ 
              height: 50 * prev,
              width: 20 * prev,
              background: '#b0b9bf',
            }}
          ></div>
          <div
            style={{
              height: 50 * curr,
              width: 20 * curr,
              background: '#3FC0E8',
              marginLeft: 2,
            }}
          ></div>
      </div>
    );
  }
}

export default Linebar;
