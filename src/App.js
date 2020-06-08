import React from 'react';
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App" style={{ margin: "4rem auto", maxWidth: "30rem" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
