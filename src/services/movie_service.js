import axios from "axios";

const apiUrl = "http://localhost:5005/v1/movies/search";

class MovieService {
    static search(name, page) {
        let queryUrl = apiUrl + "?title=" + name + "&page=" + page;
        return axios.get(queryUrl, {
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer 5d5d3f74a1771d4fcb7dd9c9"
            }
        }).then(resp => resp.data).catch(err => console.log(err));
    }
}

export default MovieService;
