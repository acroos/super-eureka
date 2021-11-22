const random = require("../../utils/random");

class HexColorValue {
  value(variables) {
    let hex = [
      random.randInt(16).toString(16),
      random.randInt(16).toString(16),
      random.randInt(16).toString(16),
      random.randInt(16).toString(16),
      random.randInt(16).toString(16),
      random.randInt(16).toString(16),
    ].join();

    return `#${hex}`;
  }
}

module.exports = HexColorValue;
