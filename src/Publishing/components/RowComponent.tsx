import { useNavigate } from "react-router-dom"

type Props = {
    id: number,
    title: string,
    body: string
}

export const RowComponent = ({ id, title, body }: Props) => {

    const navigate = useNavigate();

    const onClick = () => {
        navigate(`posts/${id}`)
    }

    return (
        <tr
            className="hover:bg-gray-100 hover:cursor-pointer"
            onClick={onClick}
        >
            <td className="p-[10px] truncate max-w-xs">{title}</td>
            <td className="p-[10px] mx-8 truncate max-w-sm">{body}</td>
        </tr>
    )
}
