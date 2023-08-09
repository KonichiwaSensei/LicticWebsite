import { useState } from "react"
import { Link } from "react-router-dom"


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

    return (
        <>
            <div className="navigator">
                <div className="burger_menu" onClick={handleMenuDisplay}>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </div>

                <div className={menuClass}>
                    <Link to="/" className="nav_menu_link_1">About Me</Link>
                </div>
            </div>
        </>
    )


}