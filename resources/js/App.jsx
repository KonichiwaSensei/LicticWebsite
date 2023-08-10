import LicticLogoModel from "./ThreejsModels/LicticLogoModel"
import Navigator from "./Constants/Navigator"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"



export default function App() {
    return (
        <>
            <BrowserRouter>

                <Navigator />

                <LicticLogoModel />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}