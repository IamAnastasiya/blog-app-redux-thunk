import PostItemGrid from "./PostItemGrid";
import PostItemList from "./PostItemList";
import {useSelector} from "react-redux";

function AllPosts ({listClicked, getPostData}) {

    const posts = useSelector(state => state.postsReducer.posts);
    const favorites = useSelector(state => state.favoritesReducer.posts);

    if (posts.length === 0) {
        return <div className="search-message">We found no results that closely match your search.</div>
    } else {
        return (<div className="uk-container">
            <div className={listClicked ?
                "uk-grid uk-child-width-1-2@s uk-child-width-1-2@m"
                : "uk-grid uk-child-width-1-2@s uk-child-width-1-3@m"}
            >
                {listClicked ?
                    posts.map((post) => <PostItemList
                            key={post.id}
                            post={post}
                            getPostData={getPostData}
                            favorites={favorites}
                        />)
                    :
                    posts.map((post) => <PostItemGrid
                            key={post.id}
                            post={post}
                            getPostData={getPostData}
                            favorites={favorites}
                        />
                )}
            </div>
        </div>)
    }
}

export default AllPosts;