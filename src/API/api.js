import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;
  
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

/** Get details on a company by handle. */
  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }
// Get all jobs.
  static async getJobs() {
    const res = await this.request(`jobs`);
    return res.jobs;
  }

// Get all companies.
  static async getCompanies(query="") {
    const res = await this.request(`companies/${query}`);
    return res.companies;
  }

// Register new user
  static async registerUser(data) {
    try {
      const res = await this.request("auth/register/", data, "post");
      console.log(res)
      return res;
    } catch (err) {
      return err;
    }
  }

  // Login existing user
  static async loginUser(data) {
    try {
      const res = await this.request("auth/token/", data, "post");
      return res;
    } catch (err) {
      return err;
    }
  }

  // Get user info
  static async fetchUserData(username) {
    try {
      const res = await this.request(`users/${username}`);
      return res;
    } catch (err) {
      return err;
    }
  }

  // Patch user info
  static async updateUser(username, data) {
    try {
      const res = await this.request(`users/${username}`, data, "patch");
      return res;
    } catch (err) {
      return err;
    }
  }

  // Apply for job
  static async apply(username, jobId) {
    try {
      const res = await this.request(`users/${username}/jobs/${jobId}`,{} ,"post");
      return res;
    } catch (err) {
      return err;
    }
  }

}

export default JoblyApi;