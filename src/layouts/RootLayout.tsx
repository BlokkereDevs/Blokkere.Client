import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import { AnimatePresence } from 'framer-motion';


function RootLayout()
{
    return (
        <>
            <Router>
                <>
                    <AnimatePresence>
                        <Routes>
                            <Route path='/' index element={<Home />} />
                            <Route path='/home' index element={<Home />} />
                            <Route path='/createbounties' element={<CreateBounties />} />
                            <Route path='/bounties' element={<Bounties />} />
                            <Route path='/statistics' element={<Statistics />} />
                            <Route path='/yourprofile' element={<YourProfile />} />
                            <Route path='/submittedbounties' element={<SubmittedBounties />} />
                        </Routes>
                    </AnimatePresence>
                </>
                <Routes>
                    <Route path='/dummypayment' element={<DummyPayment />} />
                </Routes>

            </Router>
        </>
    )
}

export default RootLayout