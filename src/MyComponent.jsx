import React from 'react';

function First() {
  return <p>First...</p>;
}

function Second() {
  return <p>Second...</p>;
}

function MyComponent(props) {
  const { children } = props;
  return <section>{children}</section>;
}

MyComponent.First = First;
MyComponent.Second = Second;

export default MyComponent;

export { First, Second };
