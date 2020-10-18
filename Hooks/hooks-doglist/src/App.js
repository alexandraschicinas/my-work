import React, { useEffect, useState } from "react";
import { list } from "./List";
import SearchBox from "./SearchBox";
import Doglist from "./Doglist";

function App() {
  const [list, setList] = useState(list);
  const [searchfield, setSearchfield] = useState(" ");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  // const onSetList = (event) => {
  //   setList(event.target.list);
  // }
  useEffect(() => {
    const filteredList = list.filter((list) => {
      return list.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
    });
    setList(filteredList);
  });

  return (
    <div>
      <h1>My Dog List</h1>
      <SearchBox searchChange={onSearchChange} />
      <Doglist filteredList={list} />
    </div>
  );
}

export default App;
