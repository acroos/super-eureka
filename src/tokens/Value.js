class Value {
  rawValue;

  constructor(value) {
    this.rawValue = value;
  }

  value(variables) {
    return this.rawValue;
  }
}

module.exports = Value;
