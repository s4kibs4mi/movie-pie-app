import React, {Component} from "react"
import Nav from "./components/nav";
import MovieBoard from "./components/movie_board";
import MovieService from "./services/movie_service";
import LoginView from "./components/login";

class App extends Component {

    constructor(props) {
        super(props);

        this.onSearchTextChanged = this.onSearchTextChanged.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
    }

    state = {
        movies: [],
        pageCounter: 1
    };

    render() {
        let token = localStorage.getItem("token");
        if (token === null) {
            return (
                <LoginView onLoginSuccess={this.onLoginSuccess}/>
            );
        } else {
            return (
                <div>
                    <Nav onSearchTextChanged={this.onSearchTextChanged}/>
                    <MovieBoard movies={this.state.movies}/>
                </div>
            );
        }
    }

    onSearchTextChanged(event) {
        let searchText = event.target.value;
        if (searchText.length >= 3) {
            MovieService.search(searchText, this.state.pageCounter).then(data => {
                this.setState({movies: data})
            })
        }
    }

    onLoginSuccess(ok) {
        if (ok) {
            console.log("On Login Succeed");
            this.setState(this);
        }
    }
}

export default App;
