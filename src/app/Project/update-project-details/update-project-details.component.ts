import { Component, OnInit } from '@angular/core';
import { ProjectDetails } from '../ProjectDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetailsService } from '../project-details.service';
import { error } from 'protractor';

@Component({
  selector: 'app-update-project-details',
  templateUrl: './update-project-details.component.html',
  styleUrls: ['./update-project-details.component.css']
})
export class UpdateProjectDetailsComponent implements OnInit {
  projectId: number;
  projectDetails: ProjectDetails;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private projectDetailsService: ProjectDetailsService
  ) { }

  ngOnInit() {
    console.log("ngOnInit() start");
    this.projectDetails = new ProjectDetails();
    this.projectId = this.route.snapshot.params['projectId'];
    this.projectDetailsService.getProjectDetails(this.projectId).subscribe(data=>{
      this.projectDetails = data;
      console.log(this.projectDetails);
    },error=>console.log(error));
    console.log("ngOnInit() end");
  }

  onSubmit()
  {
    console.log("onSubmit() start");
    this.updateProjectDetails();
    console.log("onSubmit() end");

  }

  updateProjectDetails()
  {
    console.log("updateProjectDetails() start");
    this.projectDetailsService.updateProjectDetails(this.projectId,this.projectDetails).subscribe(data=>{console.log(data)},error=>console.log(error));
    this.projectDetails = new ProjectDetails();
    this.goToProjectList();
    console.log("updateProjectDetails() end");
  }

  goToProjectList()
  {
    console.log("goToProjectList()");
    this.router.navigate(['/projects']);
  }

}
