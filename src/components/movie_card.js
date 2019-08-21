import React, {Component} from "react";

class MovieCard extends Component {

    render() {
        return (
            <div className={"col-sm-4"} key={this.props.id}>
                <span className={"label label-default"}>{this.props.title}</span><br/>
                <img src={this.props.poster}/>
            </div>
        );
    }
}

export default MovieCard;
