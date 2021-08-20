import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar.js";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import CompanyDetail from "./companies/CompanyDetail";
import CardList from "./common/CardList.js";
import JoblyApi from './API/api.js';
import './styles/App.css';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState();
  const [jobs, setJobs] = useState();

  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
      setIsLoading(false);
    }
    getJobs();
  },[]);

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
      setIsLoading(false);
    }
    getCompanies();
  },[]); 

  async function search(query) {
    let results = await JoblyApi.getCompany(query)
    setCompanies(results);
}

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return(
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/companies">
            <CardList values={companies} title="companies"></CardList>
          </Route>
          <Route exact path="/jobs">
            <CardList values={jobs} title="jobs"></CardList>
          </Route>
          <Route exact path="/companies/:handle">
              <CompanyDetail />
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
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
