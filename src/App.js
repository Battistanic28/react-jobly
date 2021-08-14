import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar.js";
import Form from "./Form.js";
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/jobs">
            <Form title="jobs"></Form>
          </Route>
          <Route exact path="/companies">
            <Form title="companies"></Form>
          </Route>
          <Route exact path="/jobs/:id"></Route>
          <Route exact path="/companies/:id"></Route>
          <Route>
            <p>Hmmm. I can't seem to find what you want.</p>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  </div>
  );
}

export default App;
