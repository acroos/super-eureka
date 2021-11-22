const random = require("../../utils/random");

class RGBValue {
  value(variables) {
    const usePercentageForValue = random.coinFlip();
    const includeAlpha = random.coinFlip();

    const values = [
      usePercentageForValue
        ? `${random.randInt(100)}%`
        : random.randInt(255).toString(),
      usePercentageForValue
        ? `${random.randInt(100)}%`
        : random.randInt(255).toString(),
      usePercentageForValue
        ? `${random.randInt(100)}%`
        : random.randInt(255).toString(),
    ];

    if (includeAlpha) {
      values.push(
        random.coinFlip() ? `${random.randInt(100)}%` : Math.random().toFixed(2)
      );
    }

    return `rgb(${values.join(", ")})`;
  }
}

module.exports = RGBValue;
