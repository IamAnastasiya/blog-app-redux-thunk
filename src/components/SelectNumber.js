import {useDispatch} from "react-redux";
import {updateRouteParamsFilter} from "../store/actions";
import {FilterValue} from "../utils/enams";

function SelectNumber () {

    const dispatch = useDispatch();

    return <div>
        <select
            className="uk-select uk-width-small uk-margin-left"
            onChange={(e) => dispatch(updateRouteParamsFilter(e.target.value))}
        >
            <option value={FilterValue.six}>6</option>
            <option value={FilterValue.twelve}>12</option>
            <option value={FilterValue.twentyFour}>24</option>
        </select>
    </div>

}

export default SelectNumber;