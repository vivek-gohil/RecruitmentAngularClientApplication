import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/employees";

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployeeList(): Observable<any> {
    console.log("in getAllEmployeeList");
    return this.http.get(`${this.baseURL}/getAllEmployees`);
  }

  getEmployee(employeeId: number): Observable<any> {
    console.log("in getEmployee");
    return this.http.get(`${this.baseURL}/${employeeId}`);
  }

  updateEmployee(employeeId: number, value: any): Observable<any> {
    console.log("in updateEmployee");
    return this.http.put(`${this.baseURL}/${employeeId}`, value);
  }

  addNewEmployee(employee: Object): Observable<any> {
    console.log("in addNewEmployee");
    return this.http.post(`${this.baseURL}/`, employee);
  }

  deleteEmployee(employeeId: number): Observable<any> {
    console.log("in deleteEmployee");
    return this.http.delete(`${this.baseURL}/${employeeId}`);
  }
}
