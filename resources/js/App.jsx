import LicticLogoModel from "./ThreejsModels/LicticLogoModel"
import Navigator from "./Constants/Navigator"
import MainPage from "./MainPage/MainPage"
import AboutMe from "./AboutMe"

import { ThemeContext } from "./Contexts/ThemeContext"
import { ModelTransformContext } from "./Contexts/ModelTransformContext"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"



export default function App() {

    const [theme, setTheme] = useState("red")

    // const [modelTransformation, setModelTransformation] = useState({rotationX: 0, rotationY: 0 });


    useEffect(() => {
        if (theme === "red") {
            document.body.style.backgroundColor = "#D6003D";
        } else if (theme === "purple") {
            document.body.style.backgroundColor = "#2E1E3A";
        }
    }, [theme]);

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {/* <ModelTransformContext.Provider value={{modelTransformation, setModelTransformation}}> */}
                    <BrowserRouter>

                        <Navigator />

                        <LicticLogoModel />

                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/about-me" element={<AboutMe />} />
                        </Routes>

                    </BrowserRouter>
                {/* </ModelTransformContext.Provider> */}
            </ThemeContext.Provider>
        </>
    )
}