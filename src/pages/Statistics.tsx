import React from 'react'
import Sidebar from '../components/Sidebar'
import * as FaIcons from 'react-icons/fa'
import { motion } from 'framer-motion';

function Statistics()
{
    return (
        <>
            <Sidebar navbarHeader='Statistics' >
                <FaIcons.FaChartBar size={25} />
            </Sidebar>
        </>
    )
}

export default Statistics