class Variable {
  name;
  optional;

  constructor(name, optional) {
    this.name = name;
    this.optional = optional;
  }

  value(variables) {
    if (this.optional && Math.random() < 0.5) {
      return null;
    }

    let definition = variables.find((v) => v.name === this.name);
    if (definition === undefined) {
      throw new Error(`Unknown variable '${this.name}' used`);
    }

    return definition.token.value(variables);
  }
}

module.exports = Variable;
