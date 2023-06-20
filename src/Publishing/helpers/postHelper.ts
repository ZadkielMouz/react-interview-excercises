
import { postsApi } from "../api/postsApi";
import { PostsResponse } from "../pages/PublishinPage";


export const getAllPosts = async (page: number) => {
    const { data } = await postsApi.get<PostsResponse[]>(`/posts?_page=${page}&_limit=10`);
    return data.map((post) => ({
        id: post.id,
        title: post.title,
        body: post.body
    }));
}

export const getPost = async (id: number) => {
    const { data } = await postsApi.get<PostsResponse>(`/posts/${id}`);
    return {
        id: data.id,
        title: data.title,
        body: data.body
    }
}