import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient : HttpClient) { 

  }

  getAllProjects() : Observable<Project[]> | any {
    return this.httpClient.get<Project[]>("http://localhost:9090/api/projects");
  }

  insertProject(newProject : Project) : Observable<Project> | any {
    return this.httpClient.post<Project>("http://localhost:9090/api/projects",newProject);
  }

  updateProject(existingProject : Project) : Observable<Project> | any {
    return this.httpClient.put<Project>("http://localhost:9090/api/projects",existingProject);
  }

}