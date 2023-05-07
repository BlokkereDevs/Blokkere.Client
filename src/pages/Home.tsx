import React, { useState, useEffect } from 'react';
import IUser from '../interfaces/IUser';
import { UserAPI } from '../apis/UserAPI';
import { Container } from 'react-bootstrap';
import './Home.css';
import Sidebar from '../components/Sidebar';
import * as FaIcons from 'react-icons/fa';
import { motion } from 'framer-motion';

function Home()
{
    const [user, setUser] = useState<IUser>();
    useEffect(() =>
    {
        UserAPI.getUserById(4)
            .then((responseUser) =>
            {
                setUser(responseUser);
            })
    }, []);

    return (
        <>

            <Sidebar navbarHeader='Home'>
                <FaIcons.FaHome size={25} />
            </Sidebar>
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6 }}>

                <Container className="metricPage">
                    <h2>Welcome back, {user?.userName}</h2>
                    <Container >
                        <div className='metricContainer'>
                            <h3><FaIcons.FaBalanceScale /> Metrics</h3>
                            <h4>
                                <span style={{
                                    fontSize: '2.0rem',
                                    fontWeight: 'bolder',
                                    color: '#115658'
                                }}>
                                    {user?.userMetric.openBounty}
                                </span> Open
                            </h4>
                            <h4>
                                <span style={{
                                    fontSize: '2.0rem',
                                    fontWeight: 'bolder',
                                    color: '#115658'
                                }}>
                                    {user?.userMetric.closedBounty}
                                </span> Closed
                            </h4>
                        </div>
                    </Container>
                    <Container >
                        <div className='metricContainer'>
                            <h3><FaIcons.FaChartBar /> Bounty Stats</h3>
                            <h4>
                                <span style={{
                                    fontSize: '2.0rem',
                                    fontWeight: 'bolder',
                                    color: '#115658'
                                }}>
                                    {user?.userMetric.pointsEarned}
                                </span>
                            </h4>
                            <h4>
                                INR
                            </h4>
                        </div>
                    </Container>
                    <Container >
                        <div className='metricContainer'>
                            <h3><FaIcons.FaFileSignature /> Categories</h3>
                            <h4>
                                <span style={{
                                    fontSize: '2.0rem',
                                    fontWeight: 'bolder',
                                    color: '#115658'
                                }}>
                                    2
                                </span> explored out of

                                <span style={{
                                    fontSize: '2.0rem',
                                    fontWeight: 'bolder',
                                    color: '#115658'
                                }}> 5
                                </span> categories
                            </h4>
                        </div>
                    </Container>
                </Container>

            </motion.div>

        </>
    )
}

export default Home