import IUser from "./IUser";


interface IUserMetric
{
    id: number;
    openBounty: number;
    closedBounty: number;
    pointsEarned: number;
    user: IUser;
}

export default IUserMetric;