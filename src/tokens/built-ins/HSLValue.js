const random = require("../../utils/random");

class HSLValue {
  value(variables) {
    const includeAlpha = coinFlip();

    const values = [
      random.randInt(360).toString(),
      `${random.randInt(100)}%`,
      `${random.randInt(100)}%`,
    ];

    if (includeAlpha) {
      values.push(
        random.coinFlip() ? `${random.randInt(100)}%` : Math.random().toFixed(2)
      );
    }

    return `hsl(${values.join(", ")})`;
  }
}

module.exports = HSLValue;
