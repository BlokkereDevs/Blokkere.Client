import { useState } from "react"
import IBounty from "../interfaces/IBounty";

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
    assignedUsers
}: IBounty)
{
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">
                    {status}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{deadline.toString()}</li>

                    </ul>
                </div>
                <div className="card-footer text-body-secondary">
                    {reward}
                </div>
            </div>
        </>
    )
}

export default BountyCard