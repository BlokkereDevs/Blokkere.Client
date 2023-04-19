import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import IBounty from '../interfaces/IBounty'
import { Container } from 'react-bootstrap';

function PreviewBounty()
{
    const [bounty, setBounty] = useState<IBounty>();
    return (
        <>
            <Navbar navbarHeader='Preview Bounty' />
            <Container>
                {bounty !== undefined &&
                    <div>
                        <h2>{bounty?.title}</h2>
                        <span>Deadline: {bounty?.deadline.toString()}</span>
                        <h4>About the bounty</h4>
                        <span>{bounty?.description}</span>
                        <h4>Rewards</h4>
                        <span>{bounty?.reward}</span>
                        <h4>Evaluation Criteria</h4>
                        <span>{bounty?.evaluation}</span>
                        <h4>Resources</h4>
                        <span>{bounty?.resources}</span>
                        <h4>Category</h4>
                        <span>{bounty?.category}</span>
                        <h4>Status</h4>
                        <span>{bounty?.status}</span>
                    </div>}
                
                {bounty === undefined &&
                    <div>No Bounty to Preview!</div>}
            </Container>
        </>
    )
}

export default PreviewBounty