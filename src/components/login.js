import React, {Component} from "react";
import UserService from "../services/user_service";

class LoginView extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        email: "",
        password: ""
    };

    render() {
        return (
            <div className={"container centered"}>
                <div className={"form-group"}>
                    <label htmlFor={"usr"}>Email : </label>
                    <input type={"text"} className={"form-control"} id={"usr"}
                           onChange={this.onEmailChange.bind(this)}/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor={"pass"}>Password : </label>
                    <input type={"text"} className={"form-control"} id={"pass"}
                           onChange={this.onPasswordChange.bind(this)}/>
                </div>
                <button type="button" className="btn btn-info" onClick={this.onLogin.bind(this)}>Login</button>
            </div>
        );
    }

    onEmailChange(event) {
        this.state.email = event.target.value;
    }

    onPasswordChange(event) {
        this.state.password = event.target.value;
    }

    onLogin() {
        let e = this.state.email;
        let p = this.state.password;
        if (e !== "" && p !== "") {
            UserService.login(e, p).then(data => {
                if (data === undefined || data.data === undefined) {
                    return
                }

                let token = data.data.access_token;
                localStorage.setItem("token", token);
                this.props.onLoginSuccess(true);
            })
        }
    }
}

export default LoginView;
