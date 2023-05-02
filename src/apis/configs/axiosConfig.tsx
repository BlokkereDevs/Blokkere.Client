import axios from "axios";

export const api = axios.create({
    //withCredentials: true,
    //baseURL: 'https://localhost:7018',
    baseURL: "https://blokkere.azurewebsites.net",
    headers: {
        Accept: 'text/plain',
        "Content-Type": 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

const errorHandler = (error: any) =>
{
    const statusCode = error.response?.status;
    if (statusCode && statusCode !== 401)
    {
        console.error(error);
    }
    return Promise.reject(error);
};
api.interceptors.response.use(undefined, (error) =>
{
    return errorHandler(error);
});