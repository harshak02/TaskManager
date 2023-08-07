import { Injectable } from '@angular/core';


// spcifies the scope of service
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getTeamMembersSummary() {
    var TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 10, TemporarilyUnavailableMembers: 7 },
      { Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8 },
      { Region: "North", TeamMembersCount: 18, TemporarilyUnavailableMembers: 5 },
      { Region: "South", TeamMembersCount: 20, TemporarilyUnavailableMembers: 7 }
    ]
    return TeamMembersSummary;
  }
}
