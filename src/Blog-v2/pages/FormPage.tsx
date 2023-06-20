import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { BlogContext } from "../context"
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';


interface Props {
    type: | 'new' | 'edit',
}

const formType = {
    new: { title: 'Agregar una nueva publicación', subtitle: 'Para agregar una nueva publicación complete este formulario' },
    edit: { title: 'Editar una publicación', subtitle: 'Edite los campos que desea cambiar y guarde los cambios ' }
}

export const FormPage = ({ type }: Props) => {

    const navigate = useNavigate();
    const { postId } = useParams();

    const [form, setForm] = useState({
        title: '',
        message: ''
    })

    const { addPost, updatePost, posts } = useContext(BlogContext);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        type === 'new'
            ?
            addPost({
                ...form,
                id: uuidv4()
            })
            :
            updatePost({
                ...form,
                id: postId!
            })

        navigate("/")
    }

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    }

    useEffect(() => {
        if (type !== 'edit') return;

        const post = posts.find((post) => {
            if (post.id === postId) return post
        });

        if (!post) {
            navigate('/');
            return;
        };

        setForm({
            title: post!.title,
            message: post!.message
        })

    }, [])
    return (
        <main className="flex justify-center pt-48 font-inter">
            <form className="flex flex-col gap-5 px-12 py-11 bg-white rounded-xl shadow-2xl" onSubmit={onSubmit}>
                <h1>{formType[type].title}</h1>
                <h2>{formType[type].subtitle}</h2>

                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <label className="text-[#3C3C3C]" htmlFor="">Titulo</label>
                        <input
                            name="title"
                            value={form.title}
                            className="border-2 rounded-lg py-2 px-4"
                            type="text"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[#3C3C3C]" htmlFor="message">Mensaje</label>
                        <textarea
                            className="border-2 rounded-lg py-2 px-4"
                            name="message"
                            value={form.message}
                            id="message"
                            cols={30}
                            rows={10}
                            onChange={onInputChange}
                            required
                            style={{ resize: 'none' }}
                        >
                        </textarea>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        className="button"

                    >
                        Publicar
                    </button>
                </div>
            </form>
        </main>
    )
}
