// ./src/components/book/BookPage.js
import React from 'react';
import { connect } from 'react-redux';


class TestBookPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h3>Books</h3>
            </div>
        )
    }
}

// Maps state from store to props
const mapStateToProps = (state) => {
    return {

    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {

    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(TestBookPage);