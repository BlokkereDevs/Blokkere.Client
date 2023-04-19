import React from 'react'
import BountySubmitForm from '../components/BountySubmitForm'
import Navbar from '../components/Navbar'


function CreateBounties()
{
    return (
        <>
            <Navbar navbarHeader='Create Bounty' />
            <BountySubmitForm></BountySubmitForm>
        </>
    )
}

export default CreateBounties