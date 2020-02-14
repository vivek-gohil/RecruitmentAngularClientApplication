import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("ngOnInit() start");
    this.loadEmployees();
    console.log("ngOnInit() end");
  }

  loadEmployees()
  {
    console.log("loadEmployees() start");
    this.employees= this.employeeService.getAllEmployeeList();
    console.log("loadEmployees() end");
  }
}
