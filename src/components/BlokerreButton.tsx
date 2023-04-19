


interface BlokerreButtonProps
{
    children: string;
    color?: 'primary' | 'info' | 'secondary';
    onClick?: () => void;
}

const BlokerreButton = ({ children, color = 'primary', onClick }: BlokerreButtonProps) =>
{
    return (
        <button
            type="button"
            className={"btn btn-" + color}
            onClick={onClick}>{children}
        </button>
    )
}

export default BlokerreButton