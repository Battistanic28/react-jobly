import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar.js";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import CompanyDetail from "./companies/CompanyDetail";
import CompanyList from "./companies/CompanyList.js";
import JobList from "./jobs/JobList.js";
import Homepage from "./common/Homepage.js";
import Profile from "./common/Profile.js";
import JoblyApi from "./API/api.js";
import './styles/App.css';


function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState();

  JoblyApi.token = token;

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
          <Route exact path="/profile/:username">
            <Profile token={token} user={user}></Profile>
          </Route>
          <Route exact path="/jobs">
            <JobList user={user}></JobList>
          </Route>
          <Route exact path="/companies/:handle">
            <CompanyDetail />
          </Route>
          <Route exact path="/login">
            <Login setToken={setToken} setUser={setUser}></Login>
          </Route>
          <Route exact path="/signup">
            <Signup setToken={setToken} setUser={setUser}></Signup>
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
