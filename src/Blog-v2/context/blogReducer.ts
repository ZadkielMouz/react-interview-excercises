import { BlogState, Post } from ".";

type BlogActionType =
    | { type: '[Post] - Add Post', payload: Post }
    | { type: '[Post] - Refresh Posts', payload: Post[] }


export const blogReducer = (state: BlogState, action: BlogActionType): BlogState => {

    switch (action.type) {
        case '[Post] - Add Post':
            return {
                ...state,
                posts: [ ...state.posts, action.payload ]
            }

        case '[Post] - Refresh Posts':
            return {
                ...state,
                posts: [ ...action.payload ]
            }
    }
}