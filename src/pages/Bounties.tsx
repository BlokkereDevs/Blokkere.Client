import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import IBounty from '../interfaces/IBounty';
import { UserAPI } from '../apis/UserAPI';
import BountyCard from '../components/BountyCard';
import { Col, Container, Row } from 'react-bootstrap';
import PreviewBounty from '../components/PreviewBounty';
import { useNavigate } from "react-router-dom"

function Bounties()
{
    const [bounties, setBounties] = useState<IBounty[]>([]);
    const [openPreview, setOpenPreview] = useState<boolean>(false);
    const [currentBounty, setCurrentBounty] = useState<IBounty>();
    const navigate = useNavigate();

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

    const previewBounty = (flag: boolean) =>
    {
        setOpenPreview(flag);
    }

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
                                    onClick={() =>
                                    {
                                        setCurrentBounty(bounty)
                                        previewBounty(true);
                                    }}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            {openPreview &&
                <PreviewBounty title={currentBounty!.title}
                    description={currentBounty!.description}
                    reward={currentBounty!.reward}
                    resources={currentBounty!.resources}
                    evaluation={currentBounty!.evaluation}
                    deadline={currentBounty!.deadline}
                    category={currentBounty!.category}
                    status={currentBounty!.status}
                    previewBounty={previewBounty}
                >
                    <button onClick={() => navigate("/dummypayment")}>Pay</button>
                </PreviewBounty>
            }
        </>
    )
}

export default Bounties