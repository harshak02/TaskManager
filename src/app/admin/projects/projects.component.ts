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

  projects : Project[] = [];
  constructor(private projectsService : ProjectsService){
    //must for initalizing
  }

  newProject : Project = new Project();
  editProject : Project = new Project();
  editIndex : any = null;

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

  openModal2() {
    $('#newModal').modal('show'); // Use jQuery to show the modal
  }

  closeFun2() : any {
    $('#newModal').modal('hide'); // Use jQuery to show the modal
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

  onEditClick(event:any,index:number){
    $('#newModal').modal('show');
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }

  onUpdateClick(){
    this.projectsService.updateProject(this.editProject).subscribe((Response : Project)=>{

      var p : Project = new Project();
      p.projectID = Response.projectID;
      p.projectName = Response.projectName;
      p.dateOfStart = Response.dateOfStart;
      p.teamSize = Response.teamSize;
      this.projects[this.editIndex] = p;

      this.editProject.projectID = null;
      this.editProject.projectName = null;
      this.editProject.dateOfStart = null;
      this.editProject.teamSize = null;
      $('#newModal').modal('hide');

    },(error:any)=> {
      console.log(error);
    })
  }


}