import axios from "axios";

/** base url to make requests to the mobie database*/
const instance = axios.create ({
    baseURL: "https://api.themovieDB.org/3",
});

export default instance;