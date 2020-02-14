import { Component, OnInit } from '@angular/core';
import { EmployeeRole } from '../EmployeeRole';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeRoleService } from '../employee-role.service';
import { error } from 'protractor';

@Component({
  selector: 'app-update-employee-role',
  templateUrl: './update-employee-role.component.html',
  styleUrls: ['./update-employee-role.component.css']
})
export class UpdateEmployeeRoleComponent implements OnInit {
  roleId: number;
  employeeRole: EmployeeRole;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private employeeRoleService: EmployeeRoleService
  ) { }

  ngOnInit() {
    console.log("ngOnInit() start");
    this.employeeRole = new EmployeeRole();
    this.roleId = this.route.snapshot.params['roleId'];
    this.employeeRoleService.getEmployeeRole(this.roleId).subscribe(data=>{
      this.employeeRole = data;
      console.log(this.employeeRole);
    },error=> console.log(error));
    console.log("ngOnInit() end");
  }

  onSubmit() {
    console.log("onSubmit() start");
    this.updateEmployeeRole();    
    console.log("onSubmit() end");
  }

  updateEmployeeRole()
  {
    console.log("updateEmployeeRole() start");
    this.employeeRoleService.updateEmployeeRole(this.roleId,this.employeeRole).subscribe(data=> console.log(data), error=> console.log(error));
    this.employeeRole = new EmployeeRole();
    this.gotoEployeeRoleList();
    console.log("updateEmployeeRole() end");
  }

  gotoEployeeRoleList() {
    console.log("gotoEployeeRoleList()");
    this.router.navigate(['/roles']);
  }

}
