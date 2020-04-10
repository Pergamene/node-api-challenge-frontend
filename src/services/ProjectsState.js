import ProjectsService from './ProjectsService';

class ProjectsState {
  projectService;

  constructor() {
    this.projectService = ProjectsService;
  }

  async getProjects(setProjects) {
    const result = await this.projectService.getProjects();
    setProjects(result.data);
  }

  async getProject(id, setProject) {
    const result = await this.projectService.getProject(id);
    setProject(result.data);
  }
}

export default new ProjectsState();
