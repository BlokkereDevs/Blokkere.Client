import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';
import Home from '../pages/Home';
import Bounties from '../pages/Bounties';
import CreateBounties from '../pages/CreateBounties';
import Statistics from '../pages/Statistics';
import YourProfile from '../pages/YourProfile';
import BountyCard from '../components/BountyCard';
import IBounty from '../interfaces/IBounty';
import PreviewBounty from '../pages/PreviewBounty';
// import PreviewBounty from '../components/PreviewBounty';


function RootLayout()
{
    return (
        <>
            <Router>
                <Sidebar />
                <Routes>
                    <Route path='/home' index element={<Home />} />
                    <Route path='/createbounties' element={<CreateBounties />} />
                    <Route path='/bounties' element={<Bounties />} />
                    <Route path='/statistics' element={<Statistics />} />
                    <Route path='/yourprofile' element={<YourProfile />} />
                    <Route path='/previewbounty' element={<PreviewBounty />} />
                </Routes>
            </Router>
        </>
    )
}

export default RootLayout