import React, { useState, useEffect } from 'react';

import ProjectsState from '../services/ProjectsState';

import Project from './Project';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    ProjectsState.getProjects(setProjects);
  }, []);

  return (
    <>
      <h2>Projects:</h2>
      {projects && projects.map(data => {
        return <Project data={data} key={data.id} />;
      })}
    </>
  );
};

export default Projects;
