import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import IBounty from '../interfaces/IBounty';
import { UserAPI } from '../apis/UserAPI';
import BountyCard from '../components/BountyCard';
import { Col, Container, Row } from 'react-bootstrap';

function Bounties()
{
    const [bounties, setBounties] = useState<IBounty[]>([]);

    useEffect(() =>
    {
        getBountyByUserId(76);

    }, []);

    const getBountyByUserId = (id: number) =>
    {
        UserAPI.getUserById(id).then((response) =>
        {
            setBounties(response.bounties.$values)
            console.log("User API Response : ");
            console.log(response);
        })
    };

    return (
        <>
            <Navbar navbarHeader='Bounties' />
            <Container>
                <Row md={4}>
                    {
                        bounties.map(bounty => (
                            <Col>
                                <BountyCard title={bounty.title}
                                    description={bounty.description}
                                    reward={bounty.reward}
                                    evaluation={bounty.evaluation}
                                    resources={bounty.resources}
                                    deadline={bounty.deadline}
                                    authorId={bounty.authorId}
                                    category={bounty.category}
                                    status={bounty.status}
                                    assignedUsers={bounty.assignedUsers}
                                />
                            </Col>
                        ))
                    }
                </Row>

            </Container>

        </>
    )
}

export default Bounties