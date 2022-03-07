const express = require("express");
const app = express();
const PORT = 6969;
const schema = require("./Schemas/index.js");
const { graphqlHTTP } = require("express-graphql");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log("Server running");
});
