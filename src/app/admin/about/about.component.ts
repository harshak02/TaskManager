import { Component } from '@angular/core';
declare var $: any; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  openModal() {
    $('#exampleModalCenter').modal('show'); // Use jQuery to show the modal
  }

  closeFun() : any {
    $('#exampleModalCenter').modal('hide'); // Use jQuery to show the modal

  }
}
