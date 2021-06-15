import {useDispatch} from "react-redux";
import {updateRouteParamsOrder} from "../store/actions";
import {OrderValue} from "../utils/enams";

function SelectOrder () {

    const dispatch = useDispatch();

    return <div>
        <select
            className="uk-select uk-width-small uk-margin-auto-left"
            onChange={(e) => dispatch(updateRouteParamsOrder(e.target.value))}
        >
            <option value={OrderValue.asc}>ASC</option>
            <option value={OrderValue.desc}>DESC</option>
        </select>
    </div>



}

export default SelectOrder;