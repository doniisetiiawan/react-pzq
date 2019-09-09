import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({
  myString,
  myNumber,
  myBool,
  myFunc,
  myArray,
  myObject,
}) => (
  <section>
    <p>{myString}</p>
    <p>{myNumber}</p>

    <p>
      <input type="checkbox" defaultChecked={myBool} />
    </p>

    <p>{myFunc()}</p>

    <ul>
      {myArray.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>

    <p>{myObject.myProp}</p>
  </section>
);

MyComponent.propTypes = {
  myString: PropTypes.string,
  myNumber: PropTypes.number,
  myBool: PropTypes.bool,
  myFunc: PropTypes.func,
  myArray: PropTypes.array,
  myObject: PropTypes.object,
};

export default MyComponent;
