const random = require("../../utils/random");

class CustomIdentValue {
  value(variables) {
    return random.randomString(Math.round(Math.random() * 32));
  }
}

module.exports = CustomIdentValue;
