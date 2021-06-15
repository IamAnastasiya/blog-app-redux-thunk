import AlbumItem from "../components/AlbumItem";
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {doubleRouteParamsFilter, updateRouteParamsPage} from "../store/actions";

function AlbumsPage () {

    const filterLimit = useSelector(state => state.routeReducer.filterLimit);
    const currentPage = useSelector(state => state.routeReducer.currentPage);
    const albums = useSelector(state => state.albumsReducer.albums);
    const totalAlbumsCount = useSelector(state => state.albumsReducer.totalCount)
    const dispatch = useDispatch();
    console.log(albums)

    const onChange = (pageNumber) => {
        dispatch(updateRouteParamsPage(pageNumber))
    }

    return <div>
        <div className="uk-section">
            <div className="uk-container">
                <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
                        {albums.map((album) => <AlbumItem
                            key={album.id}
                            album={album}
                            id={album.id}
                        />)}
                </div>
            </div>

            <div className="uk-margin">
                <button
                    className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
                    onClick = {()=> dispatch(doubleRouteParamsFilter(filterLimit))}
                >
                    Load more
                </button>
            </div>

            {<Pagination className="pagination"
                         current={currentPage}
                         onChange={onChange}
                         total={totalAlbumsCount}
                         showSizeChanger={false}
                         pageSize={filterLimit}
            />}

        </div>


    </div>
}

export default AlbumsPage;