import LicticLogoModel from "./ThreejsModels/LicticLogoModel"
import Navigator from "./navigation/Navigator"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"



export default function App() {
    return (
        <>
            <BrowserRouter>
            <Navigator />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes> 
                <LicticLogoModel />
            </BrowserRouter>
        </>
    )
}