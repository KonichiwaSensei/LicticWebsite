import { ThemeContext } from "./ThemeContext";

import { useContext } from "react";

export default function MainPage() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className="main_page">
            {/* <div className="main_page_back">
                <h1>Welcome</h1>
            </div> */}

            <div className="main_page_front">
                <h1 className={"welcome_message start" + " " + theme}>Welcome to the</h1>
                <h1 className={"welcome_message end" + " " + theme}>website</h1>
            </div>

        </div>
    )
}