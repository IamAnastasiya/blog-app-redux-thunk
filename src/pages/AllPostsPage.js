import AllPosts from "../components/AllPosts";
import FilteringBar from "../components/FilteringBar";
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import React, { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux";
import {doubleRouteParamsFilter, updateRouteParamsPage} from "../store/actions";


function AllPostsPage () {

    const posts = useSelector(state => state.postsReducer.posts);
    const totalPostsCount = useSelector(state => state.postsReducer.totalCount)
    const filterLimit = useSelector(state => state.routeReducer.filterLimit);
    const currentPage = useSelector(state => state.routeReducer.currentPage);

    const [listClicked, setListClicked] = useState(false);
    const dispatch = useDispatch();

    const onChange = (pageNumber) => {
        dispatch(updateRouteParamsPage(pageNumber))
    }

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);

    return <div  className="uk-section">
        <FilteringBar
            listClicked={listClicked}
            setListClicked={setListClicked}
        />
        <AllPosts
            listClicked={listClicked}
        />
        {posts.length > 0 && <div className="uk-margin">
                <button
                    className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
                    onClick = {()=> dispatch(doubleRouteParamsFilter(filterLimit))}
                >
                    Load more
                    <div
                        className="uk-margin-small-left"
                    > </div>
                </button>
            </div>}

        {posts.length > 0 && <Pagination className="pagination"
                        current={currentPage}
                        onChange={onChange}
                        total={totalPostsCount}
                        showSizeChanger={false}
                        pageSize={filterLimit}
            />}
    </div>

}

export default AllPostsPage;