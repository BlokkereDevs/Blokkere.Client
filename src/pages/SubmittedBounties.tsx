import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { UserAPI } from '../apis/UserAPI';
import IBounty from '../interfaces/IBounty';
import BountyCard from '../components/BountyCard';
import PreviewBounty from '../components/PreviewBounty';
import Sidebar from '../components/Sidebar';
import * as FaIcons from 'react-icons/fa'
import { motion } from 'framer-motion';

function SubmittedBounties()
{
    const [bounties, setBounties] = useState<IBounty[]>([]);
    const [openPreview, setOpenPreview] = useState<boolean>(false);
    const [currentBounty, setCurrentBounty] = useState<IBounty>();

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
    }

    const previewBounty = (flag: boolean) =>
    {
        setOpenPreview(flag);
    }

    return (
        <>
            <Sidebar navbarHeader='Submitted Bounties' >
                <FaIcons.FaMoneyCheck size={25} />
            </Sidebar>
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6 }}>

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
                        <button>Pay</button>
                    </PreviewBounty>
                }
            </motion.div>
        </>
    )
}

export default SubmittedBounties