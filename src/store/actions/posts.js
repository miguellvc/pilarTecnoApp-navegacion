import { FETCH_POSTS, FETCH_POST, POST_POSTS, DEL_POSTS, UPDATE_POSTS } from '../constants';

import { fetchPosts, fetchPost, postPosts, deletePost, putPost } from '../../api';


const getPostsSucess = (data) => {
    
    return {
        type: FETCH_POSTS,
        data
    }

}

const getPostSucess = (data) => {
    
    return {
        type: FETCH_POST,
        data
    }

}

const createPostSuceess = (data) => {
    return {
        type: POST_POSTS,
        data
    }
}

const delPostSuceess = (data) => {
    return {
        type: DEL_POSTS,
        data
    }
}

const updatePostSuceess = (data) => {
    return {
        type: UPDATE_POSTS,
        data
    }
}


export const getPosts = () => (dispatch) => {

    return fetchPosts()
        .then(([response, json]) => {        
            dispatch(getPostsSucess(json))
            return json
        })
        .catch((error) => console.log(error))

}

export const getPost = (id) => (dispatch) => {

    return fetchPost(id)
    .then(([response, json]) => {        
        dispatch(getPostSucess(json))
        return json
    })
    .catch((error) => console.log(error))  

}

export const createPost = (data) => (dispatch) => {
    const { title, body } = data
    return postPosts(data)
        .then(([response, json]) => {
            if (response.ok === true) {
                fetchPosts()
                .then(([response, json]) => {        
                    dispatch(getPostsSucess(json))
                })
            }
            return json
        })
        .catch((error) => console.log(error))
}

export const delPost = (id) => (dispatch) => {
    return deletePost(id)
        .then(([response, json]) => {
            if (response.ok === true) {

                fetchPosts()
                .then(([response, json]) => {        
                    dispatch(getPostsSucess(json))
                })
            }
            return json
        })
        .catch((error) => console.log(error))
}

export const updatePost = (data) => (dispatch) => {
    // const { id } = data
    return putPost(data)
        .then(([response, json]) => {
           
                fetchPosts()
                .then(([response, json]) => {        
                    dispatch(getPostsSucess(json))
                })
           
            return json
        })
        .catch((error) => console.log(error))
}