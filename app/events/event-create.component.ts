import { Component } from '@angular/core'
import { Router } from '@angular/router' //NEED TO IMPORT ROUTER 2 NAVIGATE FROM CODE

@Component({
  template:`
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>CREATE EVENT FORM HERE</h3>
      <br>
      <br>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default" (click)="cancelCreate()">Cancel</button>
    </div>
  `
})

export class EventCreateComponent {
  constructor(private route:Router){

  }

  cancelCreate(){
    this.route.navigate(['/events'])
  }

}
