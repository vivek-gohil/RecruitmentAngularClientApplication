import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeRolesComponent } from './Roles/list-employee-roles/list-employee-roles.component';
import { CreateEmployeeRolesComponent } from './Roles/create-employee-roles/create-employee-roles.component';
import { UpdateEmployeeRoleComponent } from './Roles/update-employee-role/update-employee-role.component';
import { ListProjectDetailsComponent } from './Project/list-project-details/list-project-details.component';
import { CreateProjectDetailsComponent } from './Project/create-project-details/create-project-details.component';
import { UpdateProjectDetailsComponent } from './Project/update-project-details/update-project-details.component';
import { ListAddressesComponent } from './Address/list-addresses/list-addresses.component';
import { CreateAddressComponent } from './Address/create-address/create-address.component';
import { UpdateAddressComponent } from './Address/update-address/update-address.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  
  { path: 'roles', component: ListEmployeeRolesComponent },
  { path: 'roles/addrole', component: CreateEmployeeRolesComponent},
  { path: 'roles/:roleId', component:UpdateEmployeeRoleComponent},

  { path: 'projects', component: ListProjectDetailsComponent},
  { path: 'projects/project', component: CreateProjectDetailsComponent},
  { path: 'projects/:projectId',component: UpdateProjectDetailsComponent},

  { path: 'addresses', component:ListAddressesComponent},
  { path: 'addresses/address', component:CreateAddressComponent},
  { path: 'addresses/:addressId', component:UpdateAddressComponent},

  { path: 'employees', component:EmployeeListComponent},
  { path: 'employees/employee', component:CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
