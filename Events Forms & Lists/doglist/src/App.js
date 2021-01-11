import React from "react";
import "./App.css";
//import { list } from "./List";
import SearchBox from "./SearchBox";
import Doglist from "./Doglist";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      searchfield: "",
    };
  }
  componentDidMount () {
     fetch("https://dog.ceo/api/breeds/list")
      .then((response) => response.json())
      .then((list) => {
        console.log(list)
        this.setState({ list: list.message });
      });
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredList = this.state.list.filter(list => {
      return list
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.list.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="doglist">
          <h1>My Dog List</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Doglist list={filteredList} />
        </div>
      );
    }
  }
}

export default App;
