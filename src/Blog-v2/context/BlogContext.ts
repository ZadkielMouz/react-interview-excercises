import { createContext } from "react";
import { Post } from ".";

interface ContextProps {
    posts: Post[];

    //Methods

    addPost: ( post: Post ) => void;
    updatePost: (post: Post) => void
}

export const BlogContext = createContext({} as ContextProps)