import {useDispatch} from "react-redux"
import {Link} from 'react-router-dom'
import {addToFavorite, removeFromFavorites} from "../store/actions";

function PostItemList({post, favorites}) {

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
        <div className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
             data-uk-grid>
        <div className="uk-card-media-left uk-cover-container">
            <img src="https://picsum.photos/600/400" alt="" data-uk-cover/>
            <canvas width="600" height="400"> </canvas>
        </div>
        <div>

            <div className="uk-card-body">
                <div className="uk-flex uk-flex-between">
                    <h3 className="uk-text-truncate">{post.title}</h3>
                    <button
                        className="uk-icon-link" data-uk-icon="heart"
                        style={itemIsFavorite ? {color: "red"} : {color: "grey"} }
                        onClick={()=> toggleFavoritesHandler(post)}
                    > </button>
                </div>
                <p className="card-text">{post.body}</p>
                <Link
                    className="uk-button uk-button-text"
                    to={`/post/${post.id}`}
                >
                    Read more
                </Link>
            </div>

            </div>

        </div>
    </div>

}

export default PostItemList;