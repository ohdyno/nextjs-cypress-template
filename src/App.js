import './App.css';
import {useReducer} from "react";

const defaultInitialState = {text: 'data'};
const defaultReducer = (state, action) => ({text: action.payload})


function App({initialState = defaultInitialState, reducer = defaultReducer}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function selectAll(e) {
        e.target.select();
    }

    return (
        <div>
            <label>input
                <input value={state.text} onFocus={selectAll} onChange={(event) => {
                    dispatch({
                        type: 'correct action name',
                        payload: event.target.value
                    })
                    event.preventDefault();
                }}/>
            </label>
        </div>
    );
}

export default App;
