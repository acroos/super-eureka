const random = require("../../utils/random");

class HSLAValue {
  value(variables) {
    const values = [
      random.randInt(360).toString(),
      `${random.randInt(100)}%`,
      `${random.randInt(100)}%`,
      random.coinFlip() ? `${random.randInt(100)}%` : Math.random().toFixed(2),
    ];

    return `hsla(${values.join(", ")})`;
  }
}

module.exports = HSLAValue;
