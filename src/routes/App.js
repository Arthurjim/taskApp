import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Update from "../containers/Update";

import { Provider } from "react-redux";
import { createStore } from "redux";
// import useIntialState from "../hooks/useInitialState";
import reducer from "../reducers/reducer";
import Create from "../containers/Create";

const IntialState = {
  taskList: [],
  taskListSection: [],
  taskSection:''
  

};
const store = createStore(reducer, IntialState);
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/update" component={Update} />
          <Route path="/create" component={Create} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
