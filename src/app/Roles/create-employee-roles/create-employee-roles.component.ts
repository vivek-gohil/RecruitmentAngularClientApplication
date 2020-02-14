import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeRoleService } from '../employee-role.service';
import { EmployeeRole } from '../EmployeeRole';

@Component({
  selector: 'app-create-employee-roles',
  templateUrl: './create-employee-roles.component.html',
  styleUrls: ['./create-employee-roles.component.css']
})
export class CreateEmployeeRolesComponent implements OnInit {

  employeeRole: EmployeeRole = new EmployeeRole();
  submitted=false;

  constructor(
    private router: Router,
    private employeeRoleService: EmployeeRoleService
  ) { }

  ngOnInit() {
    console.log("ngOnInit() start");
    console.log("ngOnInit() end");
  }

  newEmployeeRole(): void
  {
    console.log("newEmployeeRole() start");
    this.submitted = false;
    this.employeeRole = new EmployeeRole();
    console.log("newEmployeeRole() end");
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  save()
  {
    console.log("save() start");
    this.employeeRoleService.createEmployeeRole(this.employeeRole).subscribe(data => console.log(data) , error=> console.log(error));
    console.log("save() end");
  }

}
