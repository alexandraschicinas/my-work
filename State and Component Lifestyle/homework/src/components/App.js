import React, { Component } from "react";
import About from "./About"
import Menu from "./Navigations/Menu";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Books from "./Books";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // books: booksMockData,
      isMenuOpen: false,
      // selectedFilter: "All",
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

//   selectFilter = (filter) => {
//     this.setState({
//       selectedFilter: filter,
//       books:
//         filter === "All"
//           ? booksMockData
//           : booksMockData.filter((book) => book.category === filter),
//     });
//   };

  render() {
//     const filters = ["All", "Design", "Mobile", "DevOps", "Essentials"];
//     const tabItems = filters.map((filter) => (
//       <li
//         className={filter === this.state.selectedFilter ? "active" : ""}
//         key={filter}
//         onClick={() => this.selectFilter(filter)}
//       >
//         <a href="#0">{filter}</a>
//       </li>
//     ));

    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={this.state.isMenuOpen}
          toggleMenu={this.toggleMenu}
        />

        <Navbar toggleMenu = {this.toggleMenu} />

        <Header title="By FastTrackIT" />

        <Books />

        <About />
        
        <Footer />
      </div>
    );
  }
}

export default App;
