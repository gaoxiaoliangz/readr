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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb3JlL2Zyb250ZW5kL2NvbnRhaW5lcnMvQ29udGFpbmVyVGVtcGxhdGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBYSxNQUFNLE9BQU87T0FDNUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhO09BRTlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZTtBQU16QyxtQkFBbUIsU0FBUztJQU0xQixZQUFZLEtBQUs7UUFDZixNQUFNLEtBQUssQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQU5ELE9BQU8sU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQztRQUM5QixxQ0FBcUM7SUFDdkMsQ0FBQztJQU1ELE1BQU07UUFDSixNQUFNLENBQUMsQ0FDTCxxQkFBQyxHQUFHLFFBQ0UsQ0FDUCxDQUFBO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxlQUFlLE9BQU8sQ0FDcEIsS0FBSyxJQUFJLENBQUM7SUFDUixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7Q0FDakIsQ0FBQyxFQUNGLEVBQUUsU0FBUyxFQUFTLENBQ3JCLENBQUMsSUFBVyxDQUFDLENBQUEifQ==