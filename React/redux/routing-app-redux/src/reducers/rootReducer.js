const initState = {
    todo: [],
    blogs: [
        { id: '1', title: 'Learning Redux', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'},
        { id: '2', title: 'Running is good for health?', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'},
        { id: '3', title: 'Eat Sleep <Code> Repeat!!', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'},
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(state, action);
    if( action.type === 'DELETE_POST'){
        let newBlogs = state.blogs.filter( blog => action.id !== blog.id)
        return({
            ...state,
            blogs: newBlogs
        })
    }
    return state;
}

export default rootReducer;