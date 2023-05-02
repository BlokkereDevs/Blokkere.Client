interface IBounty
{
    id?: number,
    title: string,
    description: string,
    reward: number,
    evaluation: string,
    resources: string,
    deadline: string,
    authorId: number,
    category: string,
    status: string,
    assignedUsers?: number[] | null
}

export default IBounty;