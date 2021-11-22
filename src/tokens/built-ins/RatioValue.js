class RatioValue {
  value(variables) {
    const numerator = Math.ceil(Math.random() * 20);
    const denominator = Math.ceil(Math.random() * 20);

    return `${numerator} / ${denominator}`;
  }
}

module.exports = RatioValue;
