import AllPosts from "../components/AllPosts";
import FilteringBar from "../components/FilteringBar";
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import React, { useEffect, useState } from "react"
import {useSelector} from "react-redux";


function AllPostsPage (
    {sortOrder, filterByNumber, setPage, currentPage, filterLimit, loadMore, searchTerm, getPostData}) {

    const posts = useSelector(state => state.postsReducer.posts);
    const totalPostsCount = useSelector(state => state.postsReducer.totalCount)
    console.log(posts)

    const [listClicked, setListClicked] = useState(false);

    const setDisplayList = (value) => {
        setListClicked(value)
    }

    const onChange = (pageNumber) => {
        setPage (pageNumber)
    }

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);

    return <div  className="uk-section">
        <FilteringBar
            sortOrder={sortOrder}
            filterByNumber={filterByNumber}
            filterLimit={filterLimit}
            searchTerm={searchTerm}
            setDisplayList={setDisplayList}
        />
        <AllPosts
            listClicked={listClicked}
            getPostData={getPostData}
        />
        {posts.length > 0 && <div className="uk-margin">
                <button
                    className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
                    onClick = {loadMore}
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