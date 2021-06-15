import SelectNumber from "./SelectNumber";
import SelectOrder from "./SelectOrder";
import useDebounce from "./useDebounce";
import { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../store/actions";


function FilteringBar ({ listClicked, setListClicked}) {
    const [input, setSearchInput] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const debouncedSearchTerm = useDebounce(input, 1500);
    const routeParams = useSelector(state => state.routeReducer);
    const dispatch = useDispatch();
    const postsRoute = `https://jsonplaceholder.typicode.com/posts?_page=${routeParams.currentPage}&start=0&_limit=${routeParams.filterLimit}&_sort=id&_order=${routeParams.orderValue}`
    const searchRoute = `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`

    useEffect(() => {
        setSearchTerm( debouncedSearchTerm);
    }, [debouncedSearchTerm])

    useEffect(() => {
        searchTerm !== "" ?
            dispatch(getPosts(searchRoute)) : dispatch(getPosts(postsRoute))
    }, [postsRoute, searchRoute, searchTerm, dispatch])

    useEffect(() => {
        setSearchTerm ("")
    }, [postsRoute])

    return <div className="uk-container">
    <div className="uk-margin-medium-bottom uk-flex uk-flex-between">

        <form className="uk-search uk-search-default uk-width-large ">
            <div className="uk-inline">
                <button className="uk-form-icon" data-uk-icon="icon: search" />
                <input
                    className="uk-input"
                    type="search"
                    placeholder="Search..."
                    onChange={(e) => setSearchInput (e.currentTarget.value)}
                />
            </div>
        </form>

        <div className="uk-flex">
            <SelectOrder/>
            <SelectNumber/>


            <div className="uk-button-group uk-margin-left">
                <button
                    className={listClicked ?
                        "uk-button uk-button-default" :
                        "uk-button uk-button-default uk-active"}
                    onClick={()=> setListClicked(false)}
                >
                    <span data-uk-icon="icon:  grid"> </span>
                </button>
                <button
                    className={listClicked ?
                        "uk-button uk-button-default uk-active"  :
                        "uk-button uk-button-default"}
                    onClick={()=> setListClicked(true)}
                >
                    <span data-uk-icon="icon:  list"> </span>
                </button>
            </div>
        </div>


        </div>
    </div>

}

export default FilteringBar;