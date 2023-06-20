import { useEffect, useState } from "react";
import { getAllPosts } from "../helpers/postHelper";
import { RowComponent, Loader } from "../components";

export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface PostsResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const PublishinPage = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        getAllPosts(page).then((posts) => {
            setPosts(posts);
        });
    }, [page]);


    return (
        <main className='flex flex-col gap-10 font-inter my-32 px-28 justify-center'>
            <header className='flex flex-col gap-11'>
                <div className='flex flex-col gap-3'>
                    <h1>Mis publicaciones</h1>
                    <h2>En este apartado se muestran todas las publicaciones consumidas de la API</h2>
                </div>

                <hr />
            </header>

            <section className="bg-[#F9F9F9] px-8 py-3 rounded-lg shadow-sm">
                {
                    posts.length === 0
                        ?
                        <Loader />
                        :
                        <table className="table-auto w-full border-separate border-spacing-y-4 border-spacing-x-px">
                            <thead>
                                <tr className="text-left">
                                    <th className="border-b-2 p-[10px]">Title</th>
                                    <th className="border-b-2 p-[10px]">Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.map(({ id, body, title }) => (
                                        <RowComponent key={id} id={id} title={title} body={body} />
                                    ))
                                }
                            </tbody>
                        </table>
                }
            </section>

            <section className="flex mx-auto w-[245px] justify-between">
                <button type="button" onClick={() => setPage(page - 1)}>
                    <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#939598] hover:fill-[#3C3C3C]">
                        <path d="M11.67 2.46165L9.89996 0.69165L-3.91006e-05 10.5917L9.89996 20.4916L11.67 18.7216L3.53996 10.5917L11.67 2.46165Z" />
                    </svg>
                </button>
                <div className="flex gap-4 justify-between">
                    <span>{page}</span>
                    of
                    <span>{page * 10}</span>
                </div>
                <button type="button" onClick={() => setPage(page + 1)}>
                    <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#939598] hover:fill-[#3C3C3C]">
                        <path d="M0 2.81165L7.88 10.6917L0 18.5716L2.12 20.6917L12.12 10.6917L2.12 0.69165L0 2.81165Z" />
                    </svg>
                </button>
            </section>

        </main>
    )
}
