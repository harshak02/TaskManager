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
    return this.httpClient.get<Project[]>("http://localhost:9090/api/projects",{responseType : "json"});
  }

  insertProject(newProject : Project) : Observable<Project> | any {
    return this.httpClient.post<Project>("http://localhost:9090/api/projects",newProject,{responseType : "json"});
  }

  updateProject(existingProject : Project) : Observable<Project> | any {
    return this.httpClient.put<Project>("http://localhost:9090/api/projects",existingProject,{responseType : "json"});
  }

  deleteProject(ProjectID : number) : Observable<string> | any {
    return this.httpClient.delete<string>("http://localhost:9090/api/projects?ProjectID="+ProjectID);
  }

  SearchProjects(searchBy : string,searchText : string) : Observable<Project[]> | any {
    return this.httpClient.get<Project[]>("http://localhost:9090/api/projects/search/"+searchBy+"/"+searchText,{responseType : "json"});
  }

}