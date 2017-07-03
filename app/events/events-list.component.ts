import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router'


@Component({
  template: `
  <div>
    <h1>Upcoming Event Angular 2 Stuff</h1>
    <hr>
    <div class="row">
      <div class="col-md-6" *ngFor="let eventList of events">
        <event-thumbnail [event]="eventList"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})

export class EventListComponent implements OnInit{
  events: any
  constructor(private eventService:EventService, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.events = this.route.snapshot.data['events'];
  }

}
