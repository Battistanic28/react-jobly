import axios from "axios";

const BASE_API_URL = "http://localhost:3001";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.
  You'll need to add to this class as you build features for the app.
*/

class JoblyApi {

  static async getJobs() {
    const result = await axios.get(`${BASE_API_URL}/jobs`);
    return result.data.jobs;
  }

  static async getCompanies() {
    const result = await axios.get(`${BASE_API_URL}/companies`);
    return result.data.companies;
  }

}

export default JoblyApi;