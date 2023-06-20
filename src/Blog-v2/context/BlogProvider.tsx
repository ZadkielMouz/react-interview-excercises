import { useReducer } from "react";
import { BlogContext, blogReducer } from ".";

interface Props {
    children: JSX.Element | JSX.Element[];
}

export interface Post {
    id: string;
    title: string;
    message: string;
}

export interface BlogState {
    posts: Post[];
}

const BLOG_INITIAL_STATE: BlogState = {
    posts: [] 
}

const init = (): BlogState => {

    return {
        posts: JSON.parse(localStorage.getItem("posts") || "[]")
    }
}

export const BlogProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer( blogReducer, BLOG_INITIAL_STATE, init );

    const addPost = (post: Post) => {

        localStorage.setItem("posts", JSON.stringify([...state.posts, post]));

        dispatch({ type: '[Post] - Add Post', payload: post });   
    }

    const updatePost = (post: Post) => {
        let posts: Post[] = JSON.parse(localStorage.getItem('posts') || '');

        posts = posts.map((value) => {

            if( post.id === value.id ) return post;

            return value;
        });

        localStorage.setItem('posts', JSON.stringify(posts));
        refreshPosts();
        
    }

    const refreshPosts = () => {
        const posts: Post[] = JSON.parse(localStorage.getItem('posts') || '');
        dispatch({ type: '[Post] - Refresh Posts', payload: posts });
    }


    return (
        <BlogContext.Provider value={{
            ...state,

            addPost,
            updatePost,

        }}>
            { children }
        </BlogContext.Provider>
    )
}
