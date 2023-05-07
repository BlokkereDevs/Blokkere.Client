import React from 'react'
import BountySubmitForm from '../components/BountySubmitForm'
import Sidebar from '../components/Sidebar'
import * as FaIcons from 'react-icons/fa';



function CreateBounties()
{
    return (
        <>
            <Sidebar navbarHeader='Create Bounty'>
                <FaIcons.FaPlusCircle size={25} />
            </Sidebar>
            <BountySubmitForm></BountySubmitForm>
        </>
    )
}

export default CreateBounties