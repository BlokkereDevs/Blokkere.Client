import IBounty from "./IBounty";
import IUser from "./IUser";


interface IUserBounty
{
    userId: number;
    user: IUser;
    bountyId: number;
    bounty: IBounty;
}

export default IUserBounty;