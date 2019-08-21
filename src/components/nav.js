import React, {Component} from "react"

class Nav extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={"navbar navbar-default"}>
                <div className={"container-fluid"}>
                    <div className={"navbar-header"}>
                        <a className={"navbar-brand"} href="#">Movie Pie</a>
                    </div>
                    <ul className={"nav navbar-nav"}>
                        <li><a href="">Home</a></li>
                        <li><a href={"#"}>Profile</a></li>
                    </ul>

                    <div className={"form-group navbar-form navbar-left"}>
                        <input type={"text"} className={"form-control"} placeholder={"Search"}
                               onChange={this.props.onSearchTextChanged}/>
                    </div>
                </div>
            </nav>
        );
    }
    
}

export default Nav;
