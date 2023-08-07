import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;
  CurrentProjectSelected : string = "Project A";
  Today : Date | undefined;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  constructor(private dashboardService : DashboardService){

  }

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
    this.Today = new Date();
    this.Clients = [
      "ABC Infotech Ltd",
      "GHI Industries",
      "DEF Software Solutions"
    ];
    this.Projects = [
      "Project A",
      "Project B",
      "Project C",
      "Project D",
    ];
    for(var i = 2019;i>=2010;i--){
      this.Years.push(i);
    }
    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
    this.TeamMembers = [
      {
        Region : "East",Members : [
          {ID : 1, Name : "Ford", Status : "Available"},
          {ID : 2, Name : "Ford", Status : "Available"},
          {ID : 3, Name : "Ford", Status : "Busy"},
          {ID : 4, Name : "Ford", Status : "Busy"}
        ]
      },
      {
        Region : "West",Members : [
          {ID : 1, Name : "Mustang", Status : "Busy"},
          {ID : 2, Name : "Ford", Status : "Busy"},
          {ID : 3, Name : "Ford", Status : "Available"},
          {ID : 4, Name : "Ford", Status : "Available"}
        ]
      },
      {
        Region : "North",Members : [
          {ID : 1, Name : "Harry", Status : "Available"},
          {ID : 2, Name : "Ford", Status : "Available"},
          {ID : 3, Name : "Ford", Status : "Available"},
          {ID : 4, Name : "Ford", Status : "Available"}
        ]
      },
      {
        Region : "South",Members : [
          {ID : 1, Name : "Jenny", Status : "Available"},
          {ID : 2, Name : "Ford", Status : "Available"},
          {ID : 3, Name : "Ford", Status : "Available"},
          {ID : 4, Name : "Ford", Status : "Available"}
        ]
      }
    ]
  }

  onProjectChange($event : any){
    var year = $event.target.innerHTML;
    this.CurrentProjectSelected = year;
    if(year=="Project A"){
      this.AvailableFunds = 95741,
      this.CurrentExpenditure = 5798,
      this.ProjectCost = 6831
    }
    else if(year=="Project B"){
      this.AvailableFunds = 44131,
      this.CurrentExpenditure = 571498,
      this.ProjectCost = 6841331
    }
    else if(year=="Project C"){
      this.AvailableFunds = 1574141,
      this.CurrentExpenditure = 514798,
      this.ProjectCost = 16831
    }
    else{
      this.AvailableFunds = 595741,
      this.CurrentExpenditure = 5798,
      this.ProjectCost = 5831
    }
  }

}
