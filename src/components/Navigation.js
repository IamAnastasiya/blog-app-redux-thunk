import {NavLink, useHistory} from 'react-router-dom'
import { useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {removeFromFavoriteAlbums, removeFromFavorites, setInitialRoute} from "../store/actions";

function Navigation () {

    const favoriteAlbums = useSelector(state => state.favoritesReducer.albums);
    const favoritePosts = useSelector(state => state.favoritesReducer.posts);
    const dispatch = useDispatch();

    const updateAlbumsRoute = () => {
        dispatch(setInitialRoute())
    }

    const updatePostRoute = () => {
        dispatch(setInitialRoute())
    }

    const [isActiveLink, setActiveLink] = useState(true)

    const removeHandler = (title) => {
        favoritePosts.forEach((post) => {
            if (post.title === title) {
                console.log("found")
                dispatch(removeFromFavorites(post.id))
            }
        })
        favoriteAlbums.forEach ((album) => {
            if (album.title === title) {
                dispatch(removeFromFavoriteAlbums(album.id))
            }
        })
    }

    const allFavorites = [].concat(favoritePosts, favoriteAlbums);
    console.log(allFavorites)


    return <header>
        <nav className="uk-navbar uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">

                <ul className="uk-navbar-nav">
                    <li
                        className={isActiveLink ? "uk-active" : ""}
                        onClick={()=>setActiveLink(true)}
                    >
                        <NavLink
                            exact to="/"
                            onClick = {updatePostRoute}
                        >
                            Posts
                        </NavLink>
                    </li>
                    <li
                        className={isActiveLink ? "" : "uk-active"}
                        onClick={()=>setActiveLink(false)}
                    >
                        <NavLink
                            to="/albums"
                            onClick = {updateAlbumsRoute}
                        >
                            Albums
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className="uk-navbar-right">
                <div className="uk-navbar-item">
                    <button className="uk-button" type="button" data-uk-icon="icon: heart; ratio: 2"> </button>
                    <div className="uk-width-large" data-uk-dropdown="mode: click">
                        <div className="uk-dropdown-grid uk-child-width-1-1@m" data-uk-grid>
                            <div>
                                <table className="uk-table uk-table-divider uk-table-justify">
                                    <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th className="uk-text-right">Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {allFavorites.map((favorite, index) => <tr key={index}>
                                        <td >{favorite.title}</td>
                                        <td className="uk-text-right">
                                        <button
                                         className="uk-button"
                                         type="button"
                                         data-uk-icon="icon: close;"
                                         onClick={()=>removeHandler(favorite.title)}
                                         >
                                        </button>
                                        </td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
}

export default Navigation;