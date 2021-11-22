const random = require("../../utils/random");

class LengthValue {
  RELATIVE_UNITS = [
    "cap",
    "ch",
    "em",
    "ex",
    "ic",
    "lh",
    "rem",
    "rlh",
    "vh",
    "vw",
    "vi",
    "vb",
    "vmin",
    "vmax",
  ];
  ABSOLUTE_UNITS = ["px", "cm", "mm", "Q", "in", "pc", "pt"];

  value(variables) {
    const allUnits = this.RELATIVE_UNITS.concat(this.ABSOLUTE_UNITS);
    const unitIndex = random.randInt(allUnits.length);
    const value =
      unitIndex < this.RELATIVE_UNITS.length
        ? random.randInt(20)
        : random.randInt(500);

    return `${value}${allUnits[unitIndex]}`;
  }
}

module.exports = LengthValue;
