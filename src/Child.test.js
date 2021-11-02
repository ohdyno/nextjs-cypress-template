import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Child from "./Child";

describe('Child component could be rendered simply as well', () => {
    it('renders the data', () => {
        const state = {text: "some data"};

        render(<Child state={state}/>);

        const renderedData = screen.getByText(new RegExp(`${state.text}`, 'i'));
        expect(renderedData).toBeInTheDocument();
    });

    it('dispatches the action when user clicks button', () => {
        const state = {text: "some data"};
        const dispatch = jest.fn();
        render(<Child state={state} dispatch={dispatch}/>);

        const button = screen.getByText(/button/i);
        userEvent.click(button);

        expect(dispatch).toBeCalledWith({type: 'button pressed'});
    });
})