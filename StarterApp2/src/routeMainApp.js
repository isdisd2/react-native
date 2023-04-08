import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Flex from "./flex";
import Card from "./cardTemplate";

function RouteMainApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/flex" element={<Flex />} />
                <Route path="/card" element={<Card />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteMainApp;
