import React from "react";
import "./menu.scss";
import MenuPopup from "./MenuPopup";

class Menu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: true
        }
    }

    togglePopup() {
        this.setState({showPopup: !this.state.showPopup});
    }

    render() {
        return (
            <div className={"menu"}>
                <p className={"menu_signLabel"}>הרשם/הכנס</p>
                <nav role="navigation">
                    <div className={"menu_menuToggle"}>
                        <input type="checkbox" onChange={this.togglePopup.bind(this)}/>
                        <span />
                        <span />
                        <span />
                        <MenuPopup show={this.state.showPopup}/>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu;
