function Child({state, dispatch}) {
    return (
        <div>
            <p>{state.text}</p>
            <button onClick={() => dispatch({type: 'button pressed'})}>button</button>
        </div>
    )
}

export default Child;