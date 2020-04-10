import axios from 'axios';

class ProjectsService {

  async getProjects() {
    const response = await this._createBaseRequest().get('/api/projects');
    return response;
  }

  async getProject(id) {
    const response = await this._createBaseRequest().get(`/api/projects/${id}`);
    return response;
  }

  _createBaseRequest() {
    return axios.create({
      baseURL: 'http://localhost:5000',
    });
  }
}

export default new ProjectsService();
