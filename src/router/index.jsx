import { Route, Routes } from "react-router-dom"
import {Home} from "../components/pages/Home"
export const RouterWrapper = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
     )
}