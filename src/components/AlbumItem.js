import {useDispatch, useSelector} from "react-redux";
import {addToFavoriteAlbums, removeFromFavoriteAlbums} from "../store/actions";

function AlbumItem ({album}) {
    const dispatch = useDispatch()

    const favorites = useSelector(state => state.favoritesReducer.albums);

    function checkIsFavorite (ItemId) {
        return favorites.some(item => item.id === ItemId);
    }

    const itemIsFavorite = checkIsFavorite(album.id);

    const toggleFavoritesHandler = (album) => {
        if (itemIsFavorite) {
            dispatch(removeFromFavoriteAlbums(album.id))
        } else {
            dispatch(addToFavoriteAlbums(album))
        }
    }

    return <div>
    <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
        <img src="https://picsum.photos/600/400" className="uk-overlay-primary uk-position-cover" alt="img"/>
        <canvas width="600" height="400"> </canvas>
        <div className="uk-overlay-primary uk-position-cover"> </div>
        <div className="uk-overlay uk-overlay-primary uk-position-bottom">
            <p>
                {album.title}
            </p>
        </div>

        <div className="uk-position-top-right uk-overlay">
            <button
                data-uk-icon="icon: heart; ratio: 2"
                style={itemIsFavorite ? {color: "white"} : {color: "grey"} }
                onClick={()=> toggleFavoritesHandler(album)}
            >
            </button>
        </div>
    </div>
    </div>
}

export default AlbumItem;