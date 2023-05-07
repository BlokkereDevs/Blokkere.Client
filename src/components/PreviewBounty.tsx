import { ReactNode, useState } from "react"
import IBounty from "../interfaces/IBounty";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import './PreviewBounty.css';
import * as FaIcons from 'react-icons/fa';
import { motion } from "framer-motion";


const StyledPreviewBountyContainer = styled.div`

position: fixed; /* Stay in place */
z-index: 1; /* Sit on top */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */


`

const StyledPreviewBountyContent = styled.div`
background-color: #fefefe;
  margin: 2% auto; /* 15% from the top and centered */
  padding: 50px;
  width: 80%; /* Could be more or less, depending on screen size */
  border-style: solid;
  border-color: black;
`

const PreviewLabel = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 3.5rem;
    background-color: #f3da6a;
    padding: 20px;
    margin-bottom: 15px;
    font-variant-caps: all-petite-caps;
    font-size: 3.5rem;
    color: #115658
`

interface PreviewBountyProps 
{
    title: string,
    description: string,
    reward: number,
    evaluation: string,
    resources: string,
    deadline: Date,
    category: string,
    status: string,
    previewBounty: (flag: boolean) => void,
    children: JSX.Element
}
function PreviewBounty({ title,
    description,
    reward,
    evaluation,
    resources,
    deadline,
    category,
    status,
    previewBounty,
    children }: PreviewBountyProps)
{
    const isPreviewBountyPropsValid = () =>
    {
        if (title === undefined || title === "" || title === null) return false;
        if (description === undefined || title === "" || title === null) return false;
        if (reward === undefined || reward === null) return false;
        if (resources === undefined || title === "" || title === null) return false;
        if (deadline === undefined || title === "" || title === null) return false;
        if (category === undefined || title === "" || title === null) return false;
        if (status === undefined || title === "" || title === null) return false;
        if (previewBounty === undefined || previewBounty === null) return false;
        return true;
    }

    const PreviewExtension = () => { return children; }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}>

                <StyledPreviewBountyContainer>
                    <Container>
                        <StyledPreviewBountyContent>
                            {!isPreviewBountyPropsValid() && (
                                <>
                                    <button onClick={() => { previewBounty(false) }}>Close</button>
                                    Error loading Preview Bounty!!
                                </>

                            )}
                            {isPreviewBountyPropsValid() && (
                                <>
                                    <button onClick={() => { previewBounty(false) }}
                                        style={{ borderStyle: "none" }}>
                                        <FaIcons.FaTimes size={30} />
                                    </button>
                                    <br />
                                    <h1 style={{ marginTop: "10px" }}>{title}</h1>
                                    <h6>Deadline : {deadline.toString()}</h6>
                                    <br />
                                    <div className="labelContainer">
                                        <PreviewLabel>
                                            <h5>Details</h5>
                                        </PreviewLabel>
                                        <h6 className="text">{description}</h6>
                                    </div>

                                    <div className="labelContainer">
                                        <PreviewLabel>
                                            <h5>Rewards </h5>
                                        </PreviewLabel>
                                        <h5 className="text">₹ {reward}</h5>
                                    </div>

                                    <div className="labelContainer">
                                        <PreviewLabel>
                                            <h5>Evaluation Criteria </h5>
                                        </PreviewLabel>
                                        <h6 className="text">{evaluation}</h6>
                                    </div>

                                    <div className="labelContainer">
                                        <PreviewLabel>
                                            <h5>Resources </h5>
                                        </PreviewLabel>
                                        <h6 className="text">{resources}</h6>
                                    </div>

                                    <div className="labelContainer">
                                        <PreviewLabel>
                                            <h5>Category </h5>
                                        </PreviewLabel>
                                        <h6 className="text">{category}</h6>
                                    </div>

                                    <div className="labelContainer">
                                        <PreviewLabel>
                                            <h5>Status</h5>
                                        </PreviewLabel>
                                        <h6 className="text">{status}</h6>
                                    </div>
                                    <br />
                                    <PreviewExtension />
                                </>
                            )}
                        </StyledPreviewBountyContent>
                    </Container>
                </StyledPreviewBountyContainer>

            </motion.div>


        </>
    )
}

export default PreviewBounty