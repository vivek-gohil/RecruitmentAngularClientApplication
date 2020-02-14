import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {
    private baseURL = "http://localhost:8080/projects";

  constructor(
    private http: HttpClient
  ) { }

  getAllProjectDetails(): Observable<any> {
    console.log("in getAllProjectDetails");
    return this.http.get(`${this.baseURL}/getAllProjects`);
  }

  createProjectDetails(ProjectDetails: Object): Observable<Object> {
    console.log("in createProjectDetails()");
    console.log(ProjectDetails);
    return this.http.post(`${this.baseURL}/project`, ProjectDetails);
  }

  deleteProjectDetails(projectId: number): Observable<any> {
    console.log("in deleteProjectDetails()")
    console.log(projectId);
    return this.http.delete(`${this.baseURL}/${projectId}`);
  }

  updateProjectDetails(projectId: number, value: any): Observable<any> {
    console.log("in updateProjectDetails()");
    return this.http.put(`${this.baseURL}/${projectId}`, value);
  }

  getProjectDetails(projectId: number): Observable<any> {
    console.log("in getProjectDetails()");
    console.log(projectId);
    return this.http.get(`${this.baseURL}/${projectId}`);
  }
}
