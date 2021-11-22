const random = require("../../utils/random");

class RGBAValue {
  value(variables) {
    const usePercentageForValue = random.coinFlip();
    const usePercentageForAlpha = random.coinFlip();
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
      usePercentageForAlpha
        ? `${random.randInt(100)}%`
        : Math.random().toFixed(2),
    ];

    return `rgba(${values.join(", ")})`;
  }
}

module.exports = RGBAValue;
