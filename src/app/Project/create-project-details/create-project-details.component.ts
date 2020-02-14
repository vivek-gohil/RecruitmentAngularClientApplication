import { Component, OnInit } from '@angular/core';
import { ProjectDetails } from '../ProjectDetails';
import { Router } from '@angular/router';
import { ProjectDetailsService } from '../project-details.service';

@Component({
  selector: 'app-create-project-details',
  templateUrl: './create-project-details.component.html',
  styleUrls: ['./create-project-details.component.css']
})
export class CreateProjectDetailsComponent implements OnInit {

  projectDetails : ProjectDetails = new ProjectDetails();
  submitted=false;

  constructor(
    private router: Router,
    private projectDeailsService: ProjectDetailsService
  ) { }

  ngOnInit() {
    console.log("ngOnInit() start");
    console.log("ngOnInit() end");
  }

  newProjectDetails(): void
  {
    console.log("newProjectDetails() start");
    this.submitted = false;
    this.projectDetails = new ProjectDetails();
    console.log("newProjectDetails() end");
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  save()
  {
    console.log("save() start");
    this.projectDeailsService.createProjectDetails(this.projectDetails).subscribe(data => console.log(data) , error=> console.log(error));
    console.log("save() end");
  }
}