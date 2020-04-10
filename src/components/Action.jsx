import React from 'react';

const Action = props => {
  const { data } = props;

  return (
    <>
      <h3>Actions:</h3>
      <p>Description: {data.description}</p>
      <p>Notes: {data.notes}</p>
    </>
  );
};

export default Action;
