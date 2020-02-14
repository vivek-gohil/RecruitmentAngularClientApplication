import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRoleService {

  private baseURL = "http://localhost:8080/roles";

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployeeRoles(): Observable<any> {
    console.log("in getAllEmployeeRoles");
    return this.http.get(`${this.baseURL}/getAllRoles`);
  }

  createEmployeeRole(employeeRole: Object): Observable<Object> {
    console.log("in createEmployeeRole()");
    console.log(employeeRole);
    return this.http.post(`${this.baseURL}/role`, employeeRole);
  }

  deleteEmployee(roleId: number): Observable<any> {
    console.log("in deleteEmployee()")
    console.log(roleId);
    return this.http.delete(`${this.baseURL}/${roleId}`);
  }

  updateEmployeeRole(roleId: number, value: any): Observable<any> {
    console.log("in updateEmployeeRole()");
    return this.http.put(`${this.baseURL}/${roleId}`, value);
  }

  getEmployeeRole(roleId: number): Observable<any> {
    console.log("in getEmployeeRole()");
    console.log(roleId);

    return this.http.get(`${this.baseURL}/${roleId}`);
  }
}
