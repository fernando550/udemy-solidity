import React from 'react';

export default (props) => {
  return (
    <div>
      <h1> im a header </h1>
      {props.children}
      <h1> im a footer </h1>
    </div>
  )
}
