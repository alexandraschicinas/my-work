import React, { useEffect, useState } from "react";
//import { list} from "./List";
import SearchBox from "./SearchBox";
import Doglist from "./Doglist";

function App() {
  const [list, setList] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (search) => {
    setSearchfield(search);
  };

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list")
      .then((response) => response.json())
      .then((list) => {
        console.log(list.message)
        setList(list.message);
      });
  }, []);

  const filteredList = list.filter((list) => {
    return list.toLowerCase().includes(searchfield.toLocaleLowerCase());
  });

  return (
    <div>
      <h1>My Dog List</h1>
      <SearchBox searchChange={onSearchChange} />
      <Doglist filteredList={filteredList} />
    </div>
  );
}

export default App;
