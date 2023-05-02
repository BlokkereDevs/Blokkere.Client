import { ReactNode, useState } from "react"
import IBounty from "../interfaces/IBounty";
import { Container } from "react-bootstrap";
import styled from "styled-components";


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
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`

const PreviewLabel = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 3.5rem;
    background-color: #f3da6a;
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
                                <button onClick={() => { previewBounty(false) }}>Close</button>
                                <h1>Preview Bounty</h1>
                                <h1>{title}</h1>
                                <h6>Deadline : {deadline.toString()}</h6>
                                <PreviewLabel>
                                    <h5>About Bounty </h5>
                                </PreviewLabel>
                                <h5>{description}</h5>
                                <PreviewLabel>
                                    <h5>Rewards </h5>
                                </PreviewLabel>
                                <h5>{reward}</h5>
                                <PreviewLabel>
                                    <h5>Evaluation Criteria </h5>
                                </PreviewLabel>
                                <h5>{evaluation}</h5>
                                <PreviewLabel>
                                    <h5>Resources </h5>
                                </PreviewLabel>
                                <h5>{resources}</h5>
                                <PreviewLabel>
                                    <h5>Category </h5>
                                </PreviewLabel>
                                <h5>{category}</h5>
                                <PreviewLabel>
                                    <h5>Status</h5>
                                </PreviewLabel>
                                <h5>{status}</h5>
                                <PreviewExtension />
                            </>
                        )}
                    </StyledPreviewBountyContent>
                </Container>
            </StyledPreviewBountyContainer>

        </>
    )
}

export default PreviewBounty