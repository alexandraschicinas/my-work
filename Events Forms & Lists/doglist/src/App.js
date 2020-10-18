import React from "react";
import "./App.css";
import { list } from "./List";
import SearchBox from "./SearchBox";
import Doglist from "./Doglist";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: list,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredList = this.state.list.filter((list) => {
      return list.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div clasName="doglist">
        <h1>My Dog List</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Doglist list={filteredList} />
      </div>
    );
  }
}

export default App;
