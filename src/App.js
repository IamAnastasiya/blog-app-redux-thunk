import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch} from 'react-router-dom'
import "./index.css"
import {getPosts, getAlbums} from "./store/actions";


import AlbumsPage from "./pages/AlbumsPage";
import AllPostsPage from "./pages/AllPostsPage";
import Navigation from "./components/Navigation";
import PostContent from "./components/PostContent";
import {useHistory} from "react-router-dom";


function App() {
    const history = useHistory();
    const [filterLimit, setFilterLimit] = useState (6);
    const [orderValue, setOrderValue] = useState ("asc")
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState ("");
    const [postData, setPostData] = useState ("");
    const [currentPostId, setCurrentPostId] = useState ("");

    const initialRoute = `posts?_page=${currentPage}&start=0&_limit=${filterLimit}&_sort=id&_order=${orderValue}`
    const [route, setRoute] = (useState(initialRoute));
    const isLoaded = useSelector(state => state.postsReducer.isLoaded);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAlbums(`https://jsonplaceholder.typicode.com/albums?_page=${currentPage}&start=0&_limit=${filterLimit}`))
    }, [dispatch, currentPage, filterLimit]);

    useEffect(() => {
        dispatch(getPosts(`https://jsonplaceholder.typicode.com/${route}`))
    }, [route, dispatch])


    function filterByNumber (filterNumberValue)  {
        setFilterLimit(filterNumberValue)
    }

    const sortOrder = (sortOrderValue) => {
        setOrderValue (sortOrderValue);
    }

    const setPage = (pageNumber) => {
        setCurrentPage (pageNumber);
    }


    useEffect(() => {
        setCurrentPage(1)
    }, [filterLimit, orderValue])


    const loadMoreData = () => {
        setFilterLimit(filterLimit * 2)
    }

    const searchTerm =  (searchValue) => {
        setSearchInput(searchValue);
    }

    useEffect(() => {
        searchInput !== "" ?
            setRoute (`posts?q=${searchInput}`) :
            setRoute(`posts?_page=${currentPage}&start=0&_limit=${filterLimit}&_sort=id&_order=${orderValue}`)
    }, [currentPage, filterLimit, orderValue, searchInput])

    const updatePostRoute = useCallback(() => {
        setFilterLimit(6)
        setOrderValue("asc")
        setRoute(initialRoute)
        setCurrentPage(1)
        history.replace("/");
    }, [initialRoute, history ])

    useEffect(() => {
        setSearchInput ("")
    }, [updatePostRoute])

    const updateAlbumsRoute = () => {
        setCurrentPage(1)
        setFilterLimit(6)
    }

    const getPostData = (value, id) => {
        setPostData(value)
        setCurrentPostId (id)
    }


    if (!isLoaded) {
    return <div>Загрузка...</div>;
    } else {
        return (
            <div className="App">
                <Navigation
                    updatePostRoute={updatePostRoute}
                    updateAlbumsRoute={updateAlbumsRoute}
                />
                <Switch>
                    <Route path="/" exact>
                        <AllPostsPage
                            sortOrder={sortOrder}
                            filterByNumber={filterByNumber}
                            setPage={setPage}
                            currentPage={currentPage}
                            filterLimit={filterLimit}
                            loadMore={loadMoreData}
                            searchTerm={searchTerm}
                            isLoaded={isLoaded}
                            getPostData={getPostData}
                        />
                    </Route>
                    <Route path={`/post/${currentPostId}`}>
                        <PostContent title={postData} id={currentPostId}/>
                    </Route>
                    <Route path="/albums">
                        <AlbumsPage
                        filterLimit={filterLimit}
                        setPage={setPage}
                        currentPage={currentPage}
                        loadMoreAlbums={loadMoreData}
                        />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;
