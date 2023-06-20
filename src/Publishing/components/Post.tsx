import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getPost } from "../helpers/postHelper";
import { Post as IPost } from "../pages/PublishinPage";
import { Loader } from "./Loader";

const initialPost: IPost = {
    id: 0,
    body: '',
    title: ''
}


export const Post = () => {

    const { postId } = useParams();
    const [post, setPost] = useState<IPost>(initialPost)
    const { title, body } = post;

    useEffect(() => {
        getPost(Number(postId)).then(post => {
            setPost(post);
        })
    }, []);

    return (
        <main className="flex flex-col gap-11 font-inter mt-32 mx-28">
            <header className="flex justify-between items-start px-4">
                <div>
                    <h1 className="pb-3">Mis publicaciones</h1>
                    <h2 className="">En este apartado se muestra el detalle de las publicaciones consumidas de la API</h2>
                </div>

                <Link className="button" to={'/'}>
                    <button type="button">Volver a Inicio</button>
                </Link>


            </header>

            <hr />

            <section className="flex flex-col gap-5 mx-[60px]">
                {
                    title === '' || body === ''
                        ?
                        <Loader />
                        :
                        <article className="flex flex-col bg-white gap-5 py-12 px-11 rounded-xl shadow-md">
                            <h3 className="font-semibold text-xl">{title}</h3>
                            <p className="font-medium text-clockGrey break-words">{body}</p>
                        </article>
                }
            </section>
        </main>
    )
}
