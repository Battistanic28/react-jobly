import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar.js";
import Login from "./Login";
import Signup from "./Signup";
import Form from "./Form.js";
import TileList from "./TileList.js";
import JoblyApi from "./JoblyApi.js";
import './styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState();
  const [jobs, setJobs] = useState();

  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
      setIsLoading(false)
    }
    getJobs();
  }, []);

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
      setIsLoading(false)
    }
    getCompanies();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }


  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/jobs">
            <TileList values={jobs} title="jobs"></TileList>
          </Route>
          <Route exact path="/companies">
            <TileList values={companies} title="companies"></TileList>
          </Route>
          <Route exact path="/jobs/:id">
          </Route>
          <Route exact path="/companies/:id">
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
  );
}

export default App;
