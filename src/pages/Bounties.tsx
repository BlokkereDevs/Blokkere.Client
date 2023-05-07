import React, { useEffect, useState } from 'react'
import IBounty from '../interfaces/IBounty';
import { UserAPI } from '../apis/UserAPI';
import BountyCard from '../components/BountyCard';
import { Col, Container, Row } from 'react-bootstrap';
import PreviewBounty from '../components/PreviewBounty';
import { useNavigate } from "react-router-dom"
import BlokerreButton from '../components/BlokerreButton';
import Sidebar from '../components/Sidebar';
import * as FaIcons from 'react-icons/fa'
import "./bounties.css";

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
            <Sidebar navbarHeader='Bounties' >
                <FaIcons.FaBriefcase size={25} />
            </Sidebar>
            <Container>
                <Row md={4}>
                    {
                        bounties.map(bounty => (
                            <Col className="col2">
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
                    <BlokerreButton color='info' onClick={() => { }}>Add to List</BlokerreButton>
                </PreviewBounty>
            }
        </>
    )
}

export default Bounties