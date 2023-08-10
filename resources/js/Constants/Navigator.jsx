import { useState } from "react"
import { Link } from "react-router-dom"
import ThemeSelector from "./ThemeSelector"
import TopMarquee from "./TopMarquee"

export default function Navigator() {

    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
    const [menuClass, setMenuClass] = useState("menu hidden")
    const [menuClick, setMenuClick] = useState(false)

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

                <div className="burger_menu" onClick={handleMenuDisplay}>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </div>

                <ThemeSelector />

                <div className={menuClass}>
                    <Link to="/" className="nav_menu_link" onClick={handleLinkClick}>Home</Link>
                    <Link to="/music" className="nav_menu_link" onClick={handleLinkClick}>Music</Link>
                    <Link to="/web" className="nav_menu_link" onClick={handleLinkClick}>Web</Link>
                    <Link to="/about_me" className="nav_menu_link" onClick={handleLinkClick}>About Me</Link>
                </div>
            </div>
        </>
    )


}