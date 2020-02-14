import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectDetails } from '../ProjectDetails';
import { ProjectDetailsService } from '../project-details.service';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-list-project-details',
  templateUrl: './list-project-details.component.html',
  styleUrls: ['./list-project-details.component.css']
})
export class ListProjectDetailsComponent implements OnInit {

  projectDetails: Observable<ProjectDetails[]>

  constructor(
    private projectDetailsService: ProjectDetailsService,
    private router:Router
  ) { }

  ngOnInit() {
    console.log("ngOnInit() start");
    this.loadProjectDetails();
    console.log("ngOnInit() end");
  }

  loadProjectDetails()
  {
    console.log("loadProjectDetails() start");
    this.projectDetails = this.projectDetailsService.getAllProjectDetails();
    console.log("loadProjectDetails() end");
  }

  updateProjectDetail(projectId:  number)
  {
    console.log("updateProjectDetail() start");
    this.router.navigate(['projects',projectId]);
    console.log("updateProjectDetail() end");
  }

  deleteProjectDetails(projectId: number)
  {
    console.log("deleteProjectDetails() start");
    this.projectDetailsService.deleteProjectDetails(projectId).subscribe(data=>{console.log(data);this.reloadData();},error=>console.log(error));
    console.log("deleteProjectDetails() end");
  }

  reloadData()
  {
    console.log("reloadData() start");
    this.projectDetails = this.projectDetailsService.getAllProjectDetails();
    console.log("reloadData() end");
  }
}
