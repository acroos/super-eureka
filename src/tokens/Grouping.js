class Grouping {
  children = [];
  optional = false;
  type = "Segment";

  addChild(token) {
    this.children.push(token);
  }

  value(variables) {
    if (this.type === "Choice") {
      const randIndex = Math.floor(Math.random() * this.children.length);
      return this.children[randIndex].value(variables);
    } else {
      return this.children
        .map((p) => p.value(variables))
        .filter((p) => p !== null)
        .join(" ");
    }
  }

  generateChoiceTS() {
    const stepSize = 1 / this.children.length;
    return `
    const rand = Math.random()
    if (rand < ${stepSize}) {
      ${this.children[0].generateTS()}
    } ${this.children
      .slice(1)
      .map((child, index) => {
        return `else if(rand < ${stepSize * (index + 2)}) {
        ${child.generateTS()}
      } `;
      })
      .join(" ")}
    `;
  }

  generateSegmentTS() {
    const vars = this.children.map((child, index) => {
      return `const v${index} = ${child.generateTS()}`;
    });

    const varNames = this.children.map((child, index) => {
      return `v${index}`;
    });

    return `${vars.join("\n")}
    return [${varNames.join(", ")}].join(" ")
    `;
  }
}

module.exports = Grouping;
