import React from "react";
import DogCard from "./DogCard";

const Doglist = ({ list }) => {
  return (
    <div>
      {list.map((dog, i) => {
        return <DogCard key={i} name={list[i]} />;
      })}
    </div>
  );
};
export default Doglist;
