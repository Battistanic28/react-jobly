import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar.js";
import Form from "./Form.js";
import TileList from "./TileList.js";
import JoblyApi from "./JoblyApi.js";
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState();

  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
      setIsLoading(false)
    }
    getJobs();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  // async function getJobs() {
  //   const jobs = await JoblyApi.getJobs();
  //   setJobs(jobs);
  // }
  // getJobs()


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
          <Route exact path="/jobs/:id">
            <TileList jobs={jobs.jobs}></TileList>
          </Route>
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
