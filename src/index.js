import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloProvider,
  ApolloClient,
  createNetworkInterface
} from "react-apollo";

import "./hard-override.less";

import Routes from "./routes";

const networkInterface = createNetworkInterface({
  uri: "http://localhost:3001/api"
});
const client = new ApolloClient({
  networkInterface: networkInterface
});

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
