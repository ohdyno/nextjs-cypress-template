import './App.css';
import {useReducer} from "react";

const defaultInitialState = {text: 'data'};
const defaultReducer = (state, action) => ({text: action.payload})
export const createAction = payload => ({
    type: 'action type',
    payload: payload
});

function App({initialState = defaultInitialState, reducer = defaultReducer}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const selectAll = e => {
        e.target.select();
    };

    const updateState = (event) => {
        dispatch(createAction(event.target.value))
        event.preventDefault();
    };

    return (
        <div>
            <label>Input:
                <input value={state.text} onFocus={selectAll} onChange={updateState}/>
            </label>
        </div>
    );
}

export default App;
