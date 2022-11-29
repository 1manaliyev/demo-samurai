import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { required, maxLengtCreator } from '../../../utils/validators/validator';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengtCreator(10);

const MyPosts = React.memo((props) => {

    //shouldComponentUpdate(nextProps, nextState) {
    //    return nextProps != this.props || nextState != this.state;
    //}

    console.log('Render');
    let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostReduxForm onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" placeholder={'Post message'} component={Textarea} validate={[ required, maxLength10 ]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'profileAddNewPostForm'}) (AddNewPostForm)

export default MyPosts;