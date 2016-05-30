function handleInitialState() {
    let initialState;
    if (typeof window.__INITIAL_STATE__ !== 'undefined') {
        initialState = window.__INITIAL_STATE__;
    }
    return initialState;
}
export default handleInitialState;
