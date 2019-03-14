import React from "react";
import "./App.css";
import Controls from "./Controls";
import Stack from "./Stack";
import Store from "./Store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Controls />
          <Stack />
        </div>
      </Provider>
    );
  }
}

export default App;
