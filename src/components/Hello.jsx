import React from "react";

const Hello = ({ name }) => {
  return <p>Hello {name}!, this is a simple hello world component</p>;
};

export function IsLoading({ condition }) {
  if (condition) {
    return <p>Currently Loading</p>;
  }
  return <p>Here's your component</p>;
}

export default Hello;
