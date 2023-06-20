
interface Props {
    title: string;
    message: string;
}

export const Post = ({ title, message }: Props) => {
    return (
        <article className="flex flex-col bg-white gap-5 py-12 px-11 rounded-xl shadow-md">
            <h3 className="font-semibold text-xl">{ title }</h3>
            <p className="font-medium text-clockGrey break-words">{ message }</p>
        </article>
    )
}
