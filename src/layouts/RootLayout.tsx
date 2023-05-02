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
import SubmittedBounties from '../pages/SubmittedBounties';
import DummyPayment from '../pages/DummyPayment';


function RootLayout()
{
    return (
        <>
            <Router>
                <>
                    <Sidebar />
                    <Routes>
                        <Route path='/home' index element={<Home />} />
                        <Route path='/createbounties' element={<CreateBounties />} />
                        <Route path='/bounties' element={<Bounties />} />
                        <Route path='/statistics' element={<Statistics />} />
                        <Route path='/yourprofile' element={<YourProfile />} />
                        <Route path='/submittedbounties' element={<SubmittedBounties />} />
                    </Routes>
                </>
                <Routes>
                    <Route path='/dummypayment' element={<DummyPayment />} />
                </Routes>

            </Router>
        </>
    )
}

export default RootLayout