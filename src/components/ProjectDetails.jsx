import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProjectsState from '../services/ProjectsState';

import Action from './Action';

const ProjectDetails = props => {
  const [project, setProject] = useState(null);
  const params = useParams();

  useEffect(() => {
    ProjectsState.getProject(params.id, setProject);
  }, [params]);

  return (
    <>
      {project ? (
        <>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          {project.actions.map(data => {
            return <Action data={data} key={data.id} />;
          })}
        </>
      ) : (
        <div>Loading Project...</div>
      )}
    </>
  );
};

export default ProjectDetails;
