import React, { Component } from "react";

class FuelNumber extends Component {
  render() {
    const {
      currency,
      number,
      precision,
      prefix,
      suffix,
    } = this.props;
    const formatter = new Intl.NumberFormat('en', {
      minimumFractionDigits: precision || 4,
    });
    let modified = number;
    if (currency) {
      modified = modified / 10000;
    }
    return (
      <span className={(parseFloat(modified, 10) === 0) ? 'nil' : false}>
        {prefix}{formatter.format(modified.toFixed(precision || 4))}{suffix}
      </span>
    )
  }
}

export default FuelNumber;
