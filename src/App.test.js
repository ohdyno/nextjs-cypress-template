import {render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

function spyOnReducerAction(reducer) {
    const captured = {result: undefined};
    return {
        captured,
        reducer: (state, action) => {
            captured.result = action;
            return reducer(state, action);
        }
    };
}

describe('Simplify UI into two responsibilities using reducers', () => {
    it('renders data from props', () => {
        const initialState = {text: "some data"};

        render(<App initialState={initialState}/>);

        const renderedData = screen.getByDisplayValue(new RegExp(`${initialState.text}`, 'i'));
        expect(renderedData).toBeInTheDocument();
    });

    it('dispatches the correct action when button is clicked', () => {
        const {captured, reducer} = spyOnReducerAction((state, action) => ({text: action.payload}));
        render(<App reducer={reducer} initialState={{text: 'data'}}/>);

        const input = screen.getByLabelText(/input/i);
        userEvent.type(input, 'some new data');

        expect(captured.result).toEqual({type: 'correct action name', payload: 'some new data'});
    });
})
