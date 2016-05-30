import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBook } from 'actions/index';
class Comp extends Component {
    constructor(props) {
        super(props);
    }
    static fetchData({ store, params }) {
        // return store.dispatch(fetchBook())
    }
    render() {
        return (React.createElement("div", null));
    }
}
export default connect(state => ({
    data: state.data,
}), { fetchBook })(Comp);
