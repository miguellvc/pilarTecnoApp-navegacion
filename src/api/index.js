// const BASE_URL = 'https://jsonplaceholder.typicode.com'

const BASE_URL = 'https://pilar-final-task-backend.herokuapp.com/api'

///LIST POSTS
export const fetchPosts = () => {
    return fetch(BASE_URL + '/touristSite')
        .then(Response => {
            return Promise.all([Response, Response.json()])
        })
}


export const fetchPost = (id) => {
    return fetch(BASE_URL + '/touristSite' + id)
        .then(Response => {
            return Promise.all([Response, Response.json()])
        })

}




///LIST COMMENTS'S POST
export const fetchComments = ({ id }) => {
    return fetch(`${BASE_URL}/posts/${id}/comments`)
        .then(Response => {
            return Promise.all([Response, Response.json()])
        })
}

///CREATE POST
export const postPosts = (data) => {

    console.log("data desde la api", data)
    return fetch(BASE_URL + '/touristSite', {
        method: 'POST',
        body: JSON.stringify({...data}),
        headers: {
            'Content-type': 'application/json',
        },
    }).then(Response => {
        console.log('json create: ' + JSON.stringify(Response))
        return Promise.all([Response, Response.json()])
    })
}

///EDIT POST
export const putPost = (data) => {
    const { _id } = data
    const id = _id;
    console.log("valor del id", id);
    return fetch(`${BASE_URL}/touristSite/${id}`, {
        method: 'PUT',
        body: JSON.stringify({...data}),
        headers: {
            'Content-type': 'application/json',
        }
    })
        .then(Response => {
            console.log('json create: ' + JSON.stringify(Response))
            return Promise.all([Response, Response.json()])
        })
}

///DELETE POST
export const deletePost = ( id ) => {
    return fetch(`${BASE_URL}/touristSite/${id}`, {
        method: 'DELETE'
    })
        .then(Response => {
            console.log('json create: ' + JSON.stringify(Response))
            return Promise.all([Response, Response.json()])
        })
}

///SHOW POST
export const showPost = ({ title, body, id }) => {
    return fetch(`${BASE_URL}/posts/${id}${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id,
            title,
            body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(Response => {
            console.log('json create: ' + JSON.stringify(Response))
            return Promise.all([Response, Response.json()])
        })
}