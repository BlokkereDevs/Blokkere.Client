import IUser from "./IUser";


interface IUserProfile
{
    id: number;
    notificationSettings?: string
    timeZone?: string;
    language?: string;
    theme?: string;
    user: IUser;
}

export default IUserProfile;