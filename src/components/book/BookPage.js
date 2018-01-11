// ./src/components/book/BookPage.js
import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../styles/book-page.css';

class Book extends React.Component{
    constructor(props){
        super(props);
        /*var input = {title: 'ffff'};
        var descr = 'ddd';
        this.submitBook(input,descr);*/
    }

    submitBook(input,descr){
        console.log(1);
        console.log(descr);
        this.props.createBook(input,descr);
    }

    render(){
        let titleInput,descrInput;
        return(
            <div>
                <h3>Books</h3>

                <ul>
                    <ReactCSSTransitionGroup transitionAppearTimeout={2500} transitionAppear={true} transitionName="example" transitionEnterTimeout={2500} transitionLeaveTimeout={300}>
                    {this.props.books.map((b, i) => <li key={i}>{b.title}</li> )}
                    </ReactCSSTransitionGroup>
                </ul>

                <div>
                    <h3>Books Form</h3>
                    <form onSubmit={e => {
                        e.preventDefault();
                        var input = {title: titleInput.value};
                        var descr = descrInput.value;
                        this.submitBook(input,descr);
                        e.target.reset();
                    }}>
                        <input type="text" name="title" ref={node => titleInput = node}/>
                        <input type="text" name="descr" ref={node => descrInput = node}/>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        )
    }
}

// Maps state from store to props
const mapStateToProps = (state) => {
    console.log(state);
    return {
        // You can now say this.props.books
        books: state.books
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        createBook: (book,descr) => dispatch(bookActions.createBook(book,descr))
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);