import { Component } from '@angular/core'
import { Router } from '@angular/router' //NEED TO IMPORT ROUTER 2 NAVIGATE FROM CODE
import { EventService } from './shared/index'

@Component({
  templateUrl: 'app/events/event-create.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error :-moz-placeholder { color: #999 }
    .error :ms-input-placeholder { color: #999 }
  `] 
})

export class EventCreateComponent {
  isDirty:boolean = true
  constructor(private route:Router, private eventService:EventService){

  }

  saveEvent(formValues){
    this.eventService.saveNewEvent(formValues)
    this.isDirty = false
    this.route.navigate(['/events'])
  }

  cancelCreate(){
    this.route.navigate(['/events'])
  }

}
