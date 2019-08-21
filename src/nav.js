import React, {Component} from "react"

class Nav extends Component {

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
                        <input type={"text"} className={"form-control"} placeholder={"Search"}/>
                    </div>
                </div>
            </nav>
        );
    }

    onSearchTextChange() {

    }
}

export default Nav;