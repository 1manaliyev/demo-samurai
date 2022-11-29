import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});  

it('message of new post should be `it-kamasutra.com`', () => {
    let action = addPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe('it-kamasutra.com');
});  

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1); 
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3); 
});  

it('after deleting length shouldn`t be decrement if id is incorrected', () => {
    let action = deletePost(1000); 
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4); 
}); 