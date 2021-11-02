import {useReducer} from "react";
import Child from "./Child";

const defaultInitialState = {text: 'data', childText: 'child component text'};
const defaultReducer = (state, action) => {
    switch (action.type) {
        case 'button pressed':
            return {...state, childText: 'child button clicked'}
        default:
            return {...state, text: action.payload};
    }
}
export const createAction = payload => ({
    type: 'action type',
    payload: payload
});

function uiSlice(initialState) {
    if (initialState.text) {
        return initialState;
    }
    return initialState.ui;
}

function App({initialState = defaultInitialState, reducer = defaultReducer}) {
    const [state, dispatch] = useReducer(reducer, initialState, uiSlice);

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
            <Child state={{text: state.childText}} dispatch={dispatch}/>
        </div>
    );
}

export default App;
