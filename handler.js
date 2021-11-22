const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");
const parsing = require("./src/utils/parsing");

const app = express();

const SYNTAXES_TABLE = process.env.SYNTAXES_TABLE;
// const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDbClientParams = {};
if (process.env.IS_OFFLINE) {
  dynamoDbClientParams.region = "localhost";
  dynamoDbClientParams.endpoint = "http://localhost:8000";
}
const dynamoDbClient = new AWS.DynamoDB.DocumentClient(dynamoDbClientParams);

app.use(express.json());

app.get("/styles", async (req, res) => {
  const count = parseInt(req.query.count) || Math.random() * 20;

  const params = { TableName: SYNTAXES_TABLE };
  try {
    const { Items } = await dynamoDbClient.scan(params).promise();
    let properties = [];
    while (properties.length < count) {
      const shuffled = Items.sort(() => 0.5 - Math.random());
      const property = shuffled.pop();
      const name = property.PropertyName;
      console.log(name);
      const value = parsing.parse(property.FormalSyntax).value();
      console.log(`${name}: ${value}`);
      properties.push({ name, value });
    }

    return res.json(properties);
  } catch {
    return res.status(500);
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
