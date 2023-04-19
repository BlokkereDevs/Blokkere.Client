import { api } from "./configs/axiosConfig";
import user from "../interfaces/IUser";

export const UserAPI = {
    getUserById: async function (id: number, cancel = false)
    {
        const response = await api.request({
            url: `/api/User/${id}`,
            method: 'GET',
        });
        return response.data;
    },
    putUserById: async function (id: number, user: user, cancel = false)
    {
        const response = await api.request({
            url: `/api/User/${id}`,
            method: 'PUT',
            data: user
        });
        return response.data;
    },
    deleteUserById: async function (id: number, cancel = false)
    {
        const response = await api.request({
            url: `/api/User/${id}`,
            method: 'DELETE'
        });
        return response.data;
    },
    postUser: async function (user: user, cancel = false)
    {
        const response = await api.request({
            url: `/api/User`,
            method: 'POST',
            data: user
        });
        return response.data;
    }
};