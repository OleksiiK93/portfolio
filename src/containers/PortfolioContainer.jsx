import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import ErrorPage from '../components/ErrorPage';

const PortfolioContainer = () => {
    return ( 
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/portfolio" element={<Home/>}/>
                <Route path="/portfolio/projects" element={<Projects/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Router>
     );
}
 
export default PortfolioContainer;