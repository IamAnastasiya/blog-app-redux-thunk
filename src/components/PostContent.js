import {useState} from "react";
import CommentItem from "./CommentItem";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addNewComment} from "../store/actions";

const PostContent = () => {

    const history = useHistory();
    const dispatch = useDispatch()
    const comments = useSelector(state => state.commentsReducer.comments)

    const [newComment, setNewComment] = useState({name: "", email: "", text: ""});

    const handleGoBack = () => {
           history.goBack();
    }

    const handleSubmit = ( (e) => {
        e.preventDefault();
        const form = e.target;
        form.reset();
        dispatch(addNewComment(newComment));
    })

    return (
        <div className="uk-section">
            <div className="uk-container">
                <h1 className="uk-heading-bullet uk-margin-medium-bottom">
                    <button
                        data-uk-icon="icon:  arrow-left; ratio: 2"
                        className=".uk-button-link"
                        onClick = {handleGoBack}
                    >
                    </button>
                    <span className="uk-margin-right">Title</span>
                    <a className="uk-text-small" href="#">Author</a>
                </h1>
                <div className="uk-article uk-dropcap uk-margin-large-bottom">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga adipisci facere natus
                        quas, corporis assumenda provident perferendis commodi odio ea vel saepe, numquam reiciendis
                        tenetur rerum. Assumenda, quae, eius!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga adipisci facere natus
                        quas, corporis assumenda provident perferendis commodi odio ea vel saepe, numquam reiciendis
                        tenetur rerum. Assumenda, quae, eius!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga adipisci facere natus
                        quas, corporis assumenda provident perferendis commodi odio ea vel saepe, numquam reiciendis
                        tenetur rerum. Assumenda, quae, eius!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga adipisci facere natus
                        quas, corporis assumenda provident perferendis commodi odio ea vel saepe, numquam reiciendis
                        tenetur rerum. Assumenda, quae, eius!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga adipisci facere natus
                        quas, corporis assumenda provident perferendis commodi odio ea vel saepe, numquam reiciendis
                        tenetur rerum. Assumenda, quae, eius!</p>
                </div>
                <hr></hr>
                    <h3 className="uk-margin-remove-top">Comments:</h3>
                <div className="uk-comments">
                    {comments.map((comment) =>
                            <CommentItem
                                key = {comment.content.id}
                                comment = {comment.content}
                            />
                    )}
                </div>

                    <form
                        className="uk-comment-form uk-margin-medium-top"
                        onSubmit={ (e) => handleSubmit(e)}
                    >
                        <fieldset className="uk-fieldset">
                            <legend className="uk-legend">Add Comment</legend>
                            <div className="uk-margin">
                                <input
                                    className="uk-input"
                                    type="text"
                                    placeholder="Name"
                                    required
                                    name="name"
                                    onChange={(e) => setNewComment(
                                        {...newComment, name: e.target.value})}
                                />
                            </div>
                            <div className="uk-margin">
                                <input
                                    className="uk-input"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    name="email"
                                    onChange={(e)=> setNewComment(
                                        {...newComment, email: e.target.value})}
                                />
                            </div>
                            <div className="uk-margin">
                                <textarea
                                    className="uk-textarea"
                                    rows="5"
                                    placeholder="Comment"
                                    required
                                    name="textarea"
                                    onChange={(e)=> setNewComment(
                                        {...newComment, text: e.target.value})}
                                >
                                </textarea>
                            </div>
                            <div className="uk-margin">
                                <button
                                    className="uk-button uk-button-primary"
                                    type="submit"
                                >
                                    Post Comment
                                </button>
                            </div>
                        </fieldset>
                    </form>
            </div>
        </div>
        )
}

export default PostContent;
