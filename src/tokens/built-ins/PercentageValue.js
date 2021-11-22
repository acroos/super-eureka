const random = require("../../utils/random");

class PercentageValue {
  value(variables) {
    return `${random.randInt(500)}%`;
  }
}

module.exports = PercentageValue;
