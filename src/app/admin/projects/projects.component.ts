import { Component } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';
declare var $: any; 


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {

  projects : Project[] | undefined;
  constructor(private projectsService : ProjectsService){
    //must for initalizing
  }

  newProject : Project = new Project();

  ngOnInit() {
    this.projectsService.getAllProjects().subscribe(
      (Response : Project[] | any) => {
        console.log("response"+Response);
        this.projects = Response;
      }
    );
  }

  openModal() {
    $('#exampleModalCenter').modal('show'); // Use jQuery to show the modal
  }

  closeFun() : any {
    $('#exampleModalCenter').modal('hide'); // Use jQuery to show the modal
  }

  onSaveClick(){
    this.projectsService.insertProject(this.newProject).subscribe((Response : any)=>{
      this.newProject = Response; //imp again to get from backend the same response
      this.projects?.push(this.newProject); // pushes in frontend
    },(error : any)=>{
      console.log(error);
    });
    this.newProject.projectID = 0;
    this.newProject.projectName = null;
    this.newProject.teamSize = 0;
    this.newProject.dateOfStart = null;
    $('#exampleModalCenter').modal('hide'); // Use jQuery to show the modal
  }
}
