import React, { useState, useEffect } from 'react';
import IUser from '../interfaces/IUser';
import { UserAPI } from '../apis/UserAPI';
import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';


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
            <Navbar navbarHeader='Home' />
            <Container>
                <h1>Welcome back {user?.userName}</h1>
                <Container>
                    <h3>Metrics</h3>
                    {user?.userMetric.openBounty} Open
                    {user?.userMetric.closedBounty} Closed
                </Container>
                <Container>
                    <h3>Bounty Stats</h3>
                    {user?.userMetric.pointsEarned} INR
                </Container>
                <Container>
                    <h3>Categories</h3>
                    *!Not implemented
                </Container>
            </Container>
        </>
    )
}

export default Home