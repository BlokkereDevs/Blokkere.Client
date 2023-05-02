import React from 'react'
import * as FaIcons from 'react-icons/fa'

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Create Bounties',
        path: '/createbounties',
        icon: <FaIcons.FaPlusCircle />
    },
    {
        title: 'Bounties',
        path: '/bounties',
        icon: <FaIcons.FaBriefcase />
    },
    {
        title: 'SubmittedBounties',
        path: '/submittedbounties',
        icon: <FaIcons.FaMoneyCheck />
    },
    {
        title: 'Statistics',
        path: '/statistics',
        icon: <FaIcons.FaChartBar />
    }
]

