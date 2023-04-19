import IUserBounty from "./IUserBounty";
import IUserMetric from "./IUserMetric";
import IUserProfile from "./IUserProfile";
import IBounty from "./IBounty"

interface IUser
{
    id: number;
    userName: string;
    firstName: string;
    lastName?: string;
    email: string;
    contact?: string;
    userMetric: IUserMetric;
    userProfile: IUserProfile;
    bounties?: IBounty[];
    assignedBounties?: IUserBounty;
}

export default IUser;