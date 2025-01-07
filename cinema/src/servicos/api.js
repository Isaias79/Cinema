import axios from "axios";

// URL_BASE https://api.themoviedb.org/3/
// URL_CONSULTA movie/11?api_key=ce2c1fc6ee322eeefa520085c8f3880a

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});




export default api;