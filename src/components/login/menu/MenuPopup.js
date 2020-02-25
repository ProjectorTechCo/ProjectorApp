import React from "react";
import "./menuPopup.scss"

const MenuPopup = (props) => {
    return (
        <div className={`menuPopup ${props.show ? `menuPopup_show` : ''}`}>
            <ul className={"menuPopup_list"}>
                {
                    ["פרויקטים", "promotions", "מי אנחנו", "הרשימה שלי", "אינדקס", "שאלות ותשובות", "צור קשר", "עזרה", "שפה"].map((item, index) => {
                        return <li className={"menuPopup_list_item"} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
};

export default MenuPopup;