import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./common/NavBar.js";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import CompanyDetail from "./companies/CompanyDetail";
import CompanyList from "./companies/CompanyList.js";
import JobList from "./jobs/JobList.js";
import Homepage from "./common/Homepage.js";
import Profile from "./common/Profile.js";
import UserContext from "./auth/UserContext";
import JoblyApi from "./API/api.js";
import './styles/App.css';


function App() {

  
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState();
  const [userData, setUserData] = useState();
  JoblyApi.token = token;

  return(
    <div className="App">
    <BrowserRouter>
      <UserContext.Provider
          value={{token, user, userData, setUserData}}>
        <NavBar setToken={setToken}/>
        <main>
          <Switch>
            <Route exact path="/">
              <Homepage token={token} />
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
              <Login setToken={setToken} setUser={setUser} setUserData={setUserData} userData={userData}></Login>
            </Route>
            <Route exact path="/signup">
              <Signup setToken={setToken} setUser={setUser}></Signup>
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
        </UserContext.Provider>
    </BrowserRouter>
  </div>
)
}

export default App;
