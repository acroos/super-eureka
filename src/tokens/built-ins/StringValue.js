const random = require("../../utils/random");

class StringValue {
  value(variables) {
    return random.randomString(Math.round(Math.random() * 32));
  }
}

module.exports = StringValue;
