import ThemeSelector from "./ThemeSelector"
import TopMarquee from "./TopMarquee"

import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../ThemeContext"

export default function Navigator() {

    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
    const [menuClass, setMenuClass] = useState("menu hidden")
    const [menuClick, setMenuClick] = useState(false)

    const { theme } = useContext(ThemeContext);


    const handleMenuDisplay = () => {
        if (!menuClick) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setMenuClick(!menuClick)
    }

    const handleLinkClick = () => {
        setBurgerClass("burger-bar unclicked");
        setMenuClass("menu hidden");
        setMenuClick(false);
    };

    return (
        <>
            <div className="navigator">

                <TopMarquee />

                <div className={"burger_menu" + " " + theme} onClick={handleMenuDisplay}>
                    <div className={burgerClass + " " + theme}></div>
                    <div className={burgerClass + " " + theme}></div>
                    <div className={burgerClass + " " + theme}></div>
                </div>

                <ThemeSelector />

                <div className={menuClass + " " + theme}>
                    <Link to="/" className={"nav_menu_link" + " " + theme} onClick={handleLinkClick}>Home</Link>
                    <Link to="/music" className={"nav_menu_link" + " " + theme} onClick={handleLinkClick}>Music</Link>
                    <Link to="/web" className={"nav_menu_link" + " " + theme} onClick={handleLinkClick}>Web</Link>
                    <Link to="/about_me" className={"nav_menu_link" + " " + theme} onClick={handleLinkClick}>About Me</Link>
                </div>
            </div>
        </>
    )


}