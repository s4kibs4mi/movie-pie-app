import axios from "axios";

const apiUrl = "http://localhost:5005/v1";

class UserService {
    static login(email, password) {
        let queryUrl = apiUrl + "/login";
        return axios.post(queryUrl, {
            "email": email,
            "password": password
        }, {
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer 5d5d3f74a1771d4fcb7dd9c9"
            }
        }).then(resp => resp.data).catch(err => console.log(err));
    }
}

export default UserService;
