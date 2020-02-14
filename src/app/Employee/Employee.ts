import { Address } from '../Address/Address';
import { ProjectDetails } from '../Project/ProjectDetails';
import { EmployeeRole } from '../Roles/EmployeeRole';

export class Employee
{
    employeeId: number;
    firstName: string;
    lastName: string;
    address: Address;
    projectDetails: ProjectDetails;
    employeeRole: EmployeeRole;
    email: string;
    password: string;
    active: number;
    salary: number;
}