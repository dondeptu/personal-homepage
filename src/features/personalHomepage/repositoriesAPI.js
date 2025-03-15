import axios from "axios";

const githubBaseURL = "https://api.github.com";

export const getRepositories = username =>
    axios.get(`${githubBaseURL}/users/${username}/repos`)
        .then(response => response.data)
        .catch(error => console.error(error));