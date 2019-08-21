import axios from "axios";

const apiUrl = "http://localhost:5005/v1/movies/search";

class MovieService {
    static search(name, page) {
        let queryUrl = apiUrl + "?title=" + name + "&page=" + page;
        let token = localStorage.getItem("token");

        return axios.get(queryUrl, {
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + token
            }
        }).then(resp => resp.data).catch(err => console.log(err));
    }
}

export default MovieService;
