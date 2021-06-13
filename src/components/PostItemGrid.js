import {useDispatch} from "react-redux"
import {Link} from 'react-router-dom'
import {addToFavorite, removeFromFavorites} from "../store/actions";

function PostItemGrid ({post, getPostData, favorites}) {

    const dispatch = useDispatch()

    function checkIsFavorite (ItemId) {
        return favorites.some(item => item.id === ItemId);
    }
    const itemIsFavorite = checkIsFavorite(post.id);

    const toggleFavoritesHandler = (post) => {
        if (itemIsFavorite) {
            dispatch(removeFromFavorites(post.id))
        } else {
            dispatch(addToFavorite(post))
        }
    }

    return <div>
        <div>
            <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header uk-flex uk-flex-between">
                    <h3 className="uk-text-truncate">{post.title}</h3>
                    <button
                        className="uk-icon-link" data-uk-icon="heart"
                        style={itemIsFavorite ? {color: "red"} : {color: "grey"} }
                        onClick={()=> toggleFavoritesHandler(post)}
                    > </button>
                </div>
                <div className="uk-card-body">
                    <p className="card-text">{post.body}</p>
                </div>
                <div className="uk-card-footer">
                    <Link
                        className="uk-button uk-button-text"
                        to={`/post/${post.id}`}
                        onClick={()=>getPostData(post.title, post.id)}
                    >
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    </div>

}

export default PostItemGrid;