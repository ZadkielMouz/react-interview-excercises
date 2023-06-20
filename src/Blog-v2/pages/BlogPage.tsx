import { Link } from "react-router-dom"
import { Post } from "../components"
import { useContext } from "react"
import { BlogContext } from "../context"


export const BlogPage = () => {

    const { posts } = useContext( BlogContext );
    
    return (
        <main className="container flex flex-col gap-11 font-inter mt-32 mx-28">
            <header className="flex justify-between items-start px-4">
                <div>
                    <h1 className="pb-3">Mis publicaciones</h1>
                    <h2 className="">En este apartado se muestran todas las publicaciones que se han creado</h2>
                </div>
                <Link className="button" to={'/newPost'}>
                    <button type="button">Agregar una publicación</button>
                </Link>
            </header>

            <hr />

            <section className="flex flex-col gap-5 mx-[60px]">
                {
                    posts.map((post) => (
                        <Link key={ post.id } to={`/edit/${post.id}`}>
                            <Post title={ post.title } message={ post.message } />
                        </Link>
                    ))
                }
            </section>
        </main>
    )
}
