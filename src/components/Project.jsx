import React from 'react';
import { Link } from 'react-router-dom';

const Project = props => {
  const { data } = props;

  return (
    <Link to={`/project/${data.id}`}>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </Link>
  );
};

export default Project;
