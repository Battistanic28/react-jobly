import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar.js";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import CompanyDetail from "./companies/CompanyDetail";
import CompanyList from "./companies/CompanyList.js";
import JobList from "./jobs/JobList.js";
import Homepage from "./common/Homepage.js";
import './styles/App.css';


function App() {

  const [token, setToken] = useState();
  console.log(token)

  return(
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/companies">
            <CompanyList></CompanyList>
          </Route>
          <Route exact path="/jobs">
            <JobList></JobList>
          </Route>
          <Route exact path="/companies/:handle">
            <CompanyDetail />
          </Route>
          <Route exact path="/login">
            <Login setToken={setToken}></Login>
          </Route>
          <Route exact path="/signup">
            <Signup setToken={setToken}></Signup>
          </Route>
          <Route>
            <p>Hmmm. I can't seem to find what you want.</p>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  </div>
)
}

export default App;
