import React from 'react'
import BountySubmitForm from '../components/BountySubmitForm'
import Sidebar from '../components/Sidebar'
import * as FaIcons from 'react-icons/fa';
import { motion } from 'framer-motion';


function CreateBounties()
{
    return (
        <>
            <Sidebar navbarHeader='Create Bounty'>
                <FaIcons.FaPlusCircle size={25} />
            </Sidebar>
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6 }}>

                <BountySubmitForm></BountySubmitForm>

            </motion.div>

        </>
    )
}

export default CreateBounties