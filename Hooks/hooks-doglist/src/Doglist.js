import React from "react";
import DogCard from "./DogCard";

const Doglist = ({ filteredList }) => {
  return (
    <div>
      {filteredList.map((dog, i) => {
        return <DogCard key={i} name={dog} />;
      })}
    </div>
  );
};
export default Doglist;
