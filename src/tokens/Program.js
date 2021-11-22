const CustomIdentValue = require("./built-ins/CustomIdentValue");
const HSLAValue = require("./built-ins/HSLAValue");
const HSLValue = require("./built-ins/HSLValue");
const LengthValue = require("./built-ins/LengthValue");
const NamedColorValue = require("./built-ins/NamedColorValue");
const NumberValue = require("./built-ins/NumberValue");
const PercentageValue = require("./built-ins/PercentageValue");
const RatioValue = require("./built-ins/RatioValue");
const RGBAValue = require("./built-ins/RGBAValue");
const RGBValue = require("./built-ins/RGBValue");
const StringValue = require("./built-ins/StringValue");
const TimeValue = require("./built-ins/TimeValue");
const VariableDefinition = require("./VariableDefinition");

class Program {
  syntaxRoot;
  variables;

  constructor() {
    this.variables = [
      new VariableDefinition("<custom-ident>", new CustomIdentValue()),
      new VariableDefinition("<hsl()>", new HSLValue()),
      new VariableDefinition("<hsla()>", new HSLAValue()),
      new VariableDefinition("<length>", new LengthValue()),
      new VariableDefinition("<named-color>", new NamedColorValue()),
      new VariableDefinition("<number>", new NumberValue()),
      new VariableDefinition("<percentage>", new PercentageValue()),
      new VariableDefinition("<ratio>", new RatioValue()),
      new VariableDefinition("<rgb()>", new RGBValue()),
      new VariableDefinition("<rgba()>", new RGBAValue()),
      new VariableDefinition("<string>", new StringValue()),
      new VariableDefinition("<time>", new TimeValue()),
    ];
  }

  value() {
    return this.syntaxRoot.value(this.variables);
  }
}

module.exports = Program;
