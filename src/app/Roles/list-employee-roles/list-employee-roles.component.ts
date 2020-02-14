import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeRole } from '../EmployeeRole';
import { Router } from '@angular/router';
import { EmployeeRoleService } from '../employee-role.service';

@Component({
  selector: 'app-list-employee-roles',
  templateUrl: './list-employee-roles.component.html',
  styleUrls: ['./list-employee-roles.component.css']
})
export class ListEmployeeRolesComponent implements OnInit {

  employeeRoles: Observable<EmployeeRole[]>

  constructor(
    private employeeRoleService: EmployeeRoleService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("ngOnInit() start");
    this.loadEmployeeRoles();
    console.log("ngOnInit() end");
  }


  loadEmployeeRoles()
  {
    console.log("loadEmployeeRoles() start");
    this.employeeRoles = this.employeeRoleService.getAllEmployeeRoles();
    console.log("loadEmployeeRoles() end");
  }

  addNewEmployeeRole()
  {
    console.log("addNewEmployeeRole() start");
    this.router.navigate(['role']);
    console.log("addNewEmployeeRole() end");  
  }

  deleteEmployeeRole(roleId: number)
  {
    console.log("deleteEmployeeRole() start");
    this.employeeRoleService.deleteEmployee(roleId).subscribe(data=>{console.log(data);this.reloadData();},error=> console.log(error));
    console.log("deleteEmployeeRole() end");
  }

  reloadData()
  {
    console.log("reloadData() start");
    this.employeeRoles = this.employeeRoleService.getAllEmployeeRoles();
    console.log("reloadData() end");
  }

  updateEmployeeRole(roleId:number)
  {
    console.log("updateEmployeeRole() start");
    this.router.navigate(['roles',roleId]);
    console.log("updateEmployeeRole() end");
  }

}
