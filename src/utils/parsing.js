const Grouping = require("../tokens/Grouping");
const Program = require("../tokens/Program");
const Value = require("../tokens/Value");
const Variable = require("../tokens/Variable");
const VariableDefinition = require("../tokens/VariableDefinition");

function parse(syntax) {
  console.log("Parsing syntax");
  let program = new Program();

  const syntaxParts = syntax.split("where");
  const rootSyntax = syntaxParts.shift();

  program.syntaxRoot = parseSyntax(rootSyntax);
  if (syntaxParts.length > 0) {
    program.variables.push(...parseVariables(syntaxParts.join("\n")));
  }

  return program;
}

function parseSyntax(syntax) {
  if (syntax === undefined) {
    throw new Error("Error reading syntax");
  }

  const words = syntax.split(/\s+/);

  let rootGroup = new Grouping();
  let currentGroup = rootGroup;

  for (let word of words) {
    if (isValueType(word)) {
      currentGroup.addChild(new Value(word));
    } else if (isVariableUsage(word)) {
      currentGroup.addChild(new Variable(word, false));
    } else if (isOptionalVariableUsage(word)) {
      currentGroup.addChild(new Variable(word.slice(0, -1), true));
    } else if (isOrKeyword(word)) {
      currentGroup.type = "Choice";
    } else if (isGroupStartBracket(word)) {
      currentGroup = new Grouping();
      rootGroup.addChild(currentGroup);
    } else if (isGroupEndBracket(word)) {
      currentGroup = rootGroup;
    } else if (isOptionalGroupEndBracket(word)) {
      currentGroup.optional = true;
      currentGroup = rootGroup;
    }
  }

  return rootGroup;
}

function parseVariables(variableText) {
  if (variableText === undefined) {
    return [];
  }

  const lines = variableText.split("\n").filter((l) => l !== "");
  let variables = [];

  for (let line of lines) {
    const lineParts = line.split(" = ");
    if (lineParts.length !== 2) {
      throw new Error(`Invalid variable declaration ${line}`);
    }
    const name = lineParts[0];
    const token = parseSyntax(lineParts[1]);

    variables.push(new VariableDefinition(name, token));
  }

  return variables;
}

function isVariableUsage(word) {
  return word.match(/^\<.*?\>$/) !== null;
}

function isOptionalVariableUsage(word) {
  return word.match(/^\<.*?\>\?$/) !== null;
}

function isValueType(word) {
  return word.match(/^[a-zA-Z\-]+$/) !== null;
}

function isOrKeyword(word) {
  return word === "|";
}

function isGroupStartBracket(word) {
  return word === "[";
}

function isGroupEndBracket(word) {
  return word === "]";
}

function isOptionalGroupEndBracket(word) {
  return word === "]?";
}

exports.parse = parse;
