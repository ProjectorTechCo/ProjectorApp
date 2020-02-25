import React from "react";
import Menu from "./menu/Menu";
import "./login.scss";

class Login extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"login"}>
                <div className={"login_split"}>
                    <div className={"login_split_buttons"}>
                        <h2 className={"login_split_buttons_header"}>Projector</h2>
                        <div className={"login_split_buttons_actual"}>
                            <button className={"login_split_buttons_actual_button"}>מצא את הבית שלך</button>
                            <p className={"login_split_buttons_actual_or"}>OR</p>
                            <button className={"login_split_buttons_actual_button"}>הזדמנות במחיר</button>
                        </div>
                    </div>
                    <div className={"login_split_menu"}>
                        <Menu />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
