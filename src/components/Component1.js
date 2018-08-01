import React from 'react';

const component1 = props => {
  return (
    <div>
      <h1>{props.foo}</h1>
      <h1>{props.bar}</h1>
      <h1>{props.baz}</h1>
    </div>
  );
};

export default component1;
