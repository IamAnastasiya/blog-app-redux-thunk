import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch} from 'react-router-dom'
import "./index.css"
import {getPosts, getAlbums} from "./store/actions";


import AlbumsPage from "./pages/AlbumsPage";
import AllPostsPage from "./pages/AllPostsPage";
import Navigation from "./components/Navigation";
import PostContent from "./components/PostContent";


function App() {

    const isLoaded = useSelector(state => state.postsReducer.isLoaded);
    const routeParams = useSelector(state => state.routeReducer);
    const dispatch = useDispatch();
    const postsRoute = `https://jsonplaceholder.typicode.com/posts?_page=${routeParams.currentPage}&start=0&_limit=${routeParams.filterLimit}&_sort=id&_order=${routeParams.orderValue}`
    const albumsRoute = `https://jsonplaceholder.typicode.com/albums?_page=${routeParams.currentPage}&start=0&_limit=${routeParams.filterLimit}`

    useEffect(() => {
        dispatch(getPosts(postsRoute))
    }, [postsRoute, dispatch])

    useEffect(() => {
        dispatch(getAlbums(albumsRoute))
    }, [dispatch, albumsRoute]);


    if (!isLoaded) {
    return <div>Загрузка...</div>;
    } else {
        return (
            <div className="App">
                <Navigation/>
                <Switch>
                    <Route path="/" exact>
                        <AllPostsPage/>
                    </Route>
                    <Route path={`/post`}>
                        <PostContent/>
                    </Route>
                    <Route path="/albums">
                        <AlbumsPage/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;
