import { useState } from "react";
import Signup from "./signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/register" element={<Signup/>}></Route>
                <Route path = "/login" element={<Login/>}></Route>

            </Routes>
        </BrowserRouter>
    )
}
export default App; 