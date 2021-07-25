import { FETCH_POSTS_COMMENTS } from '../constants';


const initialState = {

    postComment: null,

};


export default (state = initialState, action) =>{

    if(action.type === FETCH_POSTS_COMMENTS){
        
        return {
            ...state,
            comments: action.data,
        };

    }

    return { ...state };

}