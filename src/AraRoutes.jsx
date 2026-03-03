import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AraNotFound from "./components/AraNotFound";
import HowItWorks from "./docs/HowItWorks";


function AraRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/404" element={<AraNotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </BrowserRouter>
    )
};

export default AraRoutes;
