import React from 'react'
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { UserDetails } from './pages/UserDetails';


export function Router(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:userName" element={<UserDetails />} />
        </Routes>
    )
}