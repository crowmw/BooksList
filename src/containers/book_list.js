import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">{book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //cokolwiek zwroci pokaze to jako props w BookList
  return {
    books: state.books
  }
}

//cokolwiek bedzie zwrocone z tej funkcji skończy jako props BookList containera
function mapDispatchToProps(dispatch) {
  //gdy selectBook jest wołany, rezultatem bedzie przesłanie
  //jej do wszystkich reducerow

  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//awansuje BookList z komponentu do kontenera - trzeba wiedziec o nowej
//przeslanej metodzie, selectBook. zapodaje ja jako prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
