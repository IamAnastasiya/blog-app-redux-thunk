import AlbumItem from "../components/AlbumItem";
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import {useSelector} from "react-redux";

function AlbumsPage ({ setPage, filterLimit, currentPage, loadMoreAlbums}) {

    const totalAlbumsCount = useSelector(state => state.albumsReducer.totalCount)

    const onChange = (pageNumber) => {
        setPage (pageNumber)
    }

    return <div>
        <div className="uk-section">
            <div className="uk-container">
                <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
                        {useSelector(state => state.albumsReducer.albums).map((album) => <AlbumItem
                            key={album.id}
                            album={album}
                            id={album.id}
                        />)}
                </div>
            </div>

            <div className="uk-margin">
                <button
                    className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
                    onClick = {loadMoreAlbums}
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