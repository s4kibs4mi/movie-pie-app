import React, {Component} from "react";
import MovieCard from "./movie_card";

class MovieBoard extends Component {

    render() {
        return (
            <div className={"panel-group"}>
                {this.getMovies()}
            </div>
        );
    }

    getMovies() {
        if (this.props.movies === undefined) {
            return <h3>Server unreachable!</h3>
        }

        let movies = this.props.movies.data;
        if (movies !== undefined && movies !== null) {
            return movies.map(movie => <MovieCard title={movie.Title} poster={movie.Poster}
                                                  id={movie.imdbID}/>);
        }
        return <h3>No data found</h3>
    }
}

export default MovieBoard;
