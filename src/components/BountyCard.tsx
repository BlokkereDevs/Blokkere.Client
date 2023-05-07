import { useState } from "react"
import IBounty from "../interfaces/IBounty";
import "./BountyCard.css"

interface BountyCardProps
{
    id?: number,
    title: string,
    description: string,
    reward: number,
    evaluation: string,
    resources: string,
    deadline: Date,
    authorId: number,
    category: string,
    status: string,
    assignedUsers?: number[] | null,
    onClick: () => void,
}

function BountyCard({ id,
    title,
    description,
    reward,
    evaluation,
    resources,
    deadline,
    authorId,
    category,
    status,
    assignedUsers,
    onClick,
}: BountyCardProps)
{
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <>
            <div className="card bountyCard" onClick={() => onClick()}>
                {status === "Open" && <div className="card-header" style={{ backgroundColor: "#12cd26" }}>
                    {status}
                </div>}

                {status === "CLOSED" && <div className="card-header" style={{ backgroundColor: "red" }}>
                    {status}
                </div>}

                <div className="card-body">
                    <h5 className="card-title cardTitle">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary cardCat">{category}</h6>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{deadline.toLocaleString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</li>
                    </ul>
                </div>
                <div className="card-footer text-body-secondary cardReward">
                    ₹{reward}
                </div>
            </div>
        </>
    )
}

export default BountyCard