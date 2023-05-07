import { api } from "./configs/axiosConfig"
import bounty from "../interfaces/IBounty";
import IBountyApiRequest from "../interfaces/IBountyApiRequest";
import IBountyAssignApiRequest from "../interfaces/IBountyAssignApiRequest";
//import { defineCancelApiObject } from "./configs/axiosUtils";

const bountyApiHeader = {
    'Accept': 'text/plain',
    'Content-Type': 'application/json'
};

export const BountyAPI = {
    getBountyById: async function (id: number, cancel = false)
    {
        const response = await api.request({
            url: `/api/Bounty/${id}`,
            method: 'GET',
            headers: bountyApiHeader
            //signal: cancel ? cancelApiObject[this.getById.name].handleRequestCancellation().signal : undefined
        });
        return response.data;
    },
    putBountyById: async function (id: number, bounty: bounty, cancel = false)
    {
        const response = await api.request({
            url: `/api/Bounty/${id}`,
            method: 'PUT',
            data: bounty
        });
        return response.data;
    },
    deleteBountyById: async function (id: number, cancel = false)
    {
        const response = await api.request({
            url: `/api/Bounty/${id}`,
            method: 'DELETE',
        });
        return response.data;
    },
    postBountyByFilter: async function (bounty: bounty, cancel = false)
    {
        console.log("Post Bounty Log");
        console.log(bounty);
        const response = await api.request({
            url: `/api/Bounty/filter`,
            method: 'POST',
            headers: bountyApiHeader,
            data: bounty
        });
        return response.data;
    },
    postBounty: async function (bounty: IBountyApiRequest, cancel = false)
    {
        const response = await api.request({
            url: `/api/Bounty`,
            method: 'POST',
            data: bounty
        });
        console.log("Post Bounty :");
        console.log(response);
        return response.data;
    },

    postAssignBountyById: async function (assignBountyRequest: IBountyAssignApiRequest)
    {
        const response = await api.request({
            url: `/api/User/${assignBountyRequest.userId}/assign?bountyId=${assignBountyRequest.bountyId}`,
            method: 'POST'
        });
        console.log("Post Bounty :");
        console.log(response);
        return response.data;
    }
};
//const cancelApiObject = defineCancelApiObject(BountyAPI)