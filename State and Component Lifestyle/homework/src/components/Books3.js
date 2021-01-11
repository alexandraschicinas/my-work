import React from "react";
import booksMockData from "../mocks/books";
import BookFilter from "./BookFilter";
import BookList from "./BookList";

class Books3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksMockData,
      selectedFilter: "All",
    };
  }

  selectFilter = (filter) => {
    this.setState({
      selectedFilter: filter,
      books:
        filter === "All"
          ? booksMockData
          : booksMockData.filter((book) => book.category === filter),
    });
  };

  render() {
    return (
      <section id="books">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Books</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <BookFilter
            selectedFilter={this.selectedFilter}
            selectFilter={this.selectFilter}
          />

          <BookList books={this.state.books} />
        </div>
      </section>
    );
  }
}
export default Books3;
