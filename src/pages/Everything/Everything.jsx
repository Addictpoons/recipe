import Home from "../Home/Home";
import React from "react";
import Cuisine from "../Cuisine/Cuisine"
import Searched from "../Searched/Searched"
import { Route, Routes } from "react-router-dom"
import Recipe from "../Recipe/Recipe";

const Pages = () => {

    return (
        <Routes basename="/recipe">
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
    )
};

export default Pages;