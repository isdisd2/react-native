import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Flex from "./flex";
import Card from "./cardTemplate";
import Help from "./help";
import Employee from "./employee";

function RouteMainApp(props) {
    return (
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route path="/flex" element={<Employee />} />
                <Route path="/flex/:search" element={<Employee />} />
                <Route path="/card" element={<Card />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteMainApp;
