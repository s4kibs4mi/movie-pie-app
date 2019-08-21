import axios from "axios";

const apiUrl = "http://localhost:5005/v1/movies/search";

class MovieService {
    static search(name, page) {
        let queryUrl = apiUrl + "?title=" + name + "&page=" + page;
        return axios.get(queryUrl).then(resp => resp.data);
    }
}

export default MovieService;
