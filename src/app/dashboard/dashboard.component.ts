import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  Designation : string | undefined;
  Username : string | undefined;
  NoOfTeamMembers : number | undefined;
  TotalCostOfAllProjects : number | undefined;
  PendingTasks : number | undefined;
  UpComingProjects : number | undefined;
  ProjectCost : number | undefined;
  CurrentExpenditure : number | undefined;
  AvailableFunds : number | undefined;

  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.Username = "John Smith"
    this.NoOfTeamMembers = 256;
    this.TotalCostOfAllProjects = 2560;
    this.PendingTasks = 25;
    this.UpComingProjects = 2561;
    this.ProjectCost = 1256;
    this.CurrentExpenditure = 2256;
    this.AvailableFunds = 2562;
  }

}
