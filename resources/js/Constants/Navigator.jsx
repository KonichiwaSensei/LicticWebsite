import ThemeSelector from "./ThemeSelector"
import TopMarquee from "./TopMarquee"
import BottomMarquee from "./BottomMarquee"

import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Lottie from 'lottie-react'
import LottieArrowRightPurple from '../../../public/images/LottieJsons/LottieArrowRightPurple.json'

import { ThemeContext } from "../Contexts/ThemeContext"
import { ModelTransformContext } from "../Contexts/ModelTransformContext"



export default function Navigator() {

    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
    const [menuClass, setMenuClass] = useState("menu hidden")
    const [menuClick, setMenuClick] = useState(false)

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if (theme === "red") {
            document.body.style.backgroundColor = "#D6003D";
        } else if (theme === "purple") {
            document.body.style.backgroundColor = "#2E1E3A";
        }
    }, [theme]);

    // const { modelTransformation, setModelTransformation } = useContext(ModelTransformContext);

    // const transformationMapping = {
    //     "/": { rotationX: 0, rotationY: 0 },
    //     "/music": { rotationX: Math.PI / 2, rotationY: 0 },
    //     "/web": { rotationX: 0, rotationY: Math.PI / 2 },
    //     "/about-me": { rotationX: Math.PI / 4, rotationY: Math.PI / 4 },
    // };

    const handleMenuDisplay = () => {
        const newBurgerClass = menuClick ? "burger-bar unclicked" : "burger-bar clicked";
        const newMenuClass = menuClick ? "menu hidden" : "menu visible";
    
        setTimeout(() => {
            setBurgerClass(newBurgerClass);
            setMenuClass(newMenuClass);
            setMenuClick(!menuClick);
        }, 0);
    };
    
    const handleLinkClick = () => {
        const newBurgerClass = "burger-bar unclicked";
        const newMenuClass = "menu hidden";
    
        setTimeout(() => {
            setBurgerClass(newBurgerClass);
            setMenuClass(newMenuClass);
            setMenuClick(false);
        }, 0);
    }

    return (
        <>
            <div className="navigator">

                <TopMarquee />

                <div className={"burger_menu" + " " + theme} onClick={handleMenuDisplay}>
                    <div className={burgerClass + " " + theme}></div>
                    <div className={burgerClass + " " + theme}></div>
                    <div className={burgerClass + " " + theme}></div>
                </div>

                {/* <Lottie className={"burger_click_me" + " " + theme} animationData={LottieArrowRightPurple} /> */}
                
                <ThemeSelector />

                <div className={menuClass + " " + theme}>
                    <Link to="/" className={"nav_menu_link" + " " + theme} onClick={handleLinkClick}>Home</Link>
                    <Link to="/music" className={"nav_menu_link" + " " + theme} onClick={handleLinkClick}>Music</Link>
                    <Link to="/web" className={"nav_menu_link" + " " + theme} onClick={handleLinkClick}>Web</Link>
                    <Link to="/about-me" className={"nav_menu_link" + " " + theme} onClick={handleLinkClick}>About Me</Link>
                </div>

                <BottomMarquee />
            </div>
        </>
    )


}