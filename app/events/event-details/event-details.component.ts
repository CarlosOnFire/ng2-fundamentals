import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, ISession } from '../shared/index'

@Component({
  templateUrl: '/app/events/event-details/event-details.component.html',
  styles:[`
    .container{
      padding: 0 20px;
    }
    .event-image{
      height: 100px;
    }
    a {
      cursor: pointer;
    }
  `]
})

export class EventDetailsComponent {
  event:IEvent
  addMode:boolean
  filterBy: string = 'all'
  sortBy: string = 'votes'

  constructor(private eventService:EventService, private route:ActivatedRoute){

  }

  ngOnInit(){
    //We implemented this because the last configuration was only prepared to route only once, this was because we
    //were using snapshot instead of waiting for a Observable to receive multipe routes and refresh the EventDetailsComponent
    this.route.data.forEach(data => {
        this.event = data['event']
        this.addMode = false        
        this.filterBy = 'all'
        this.sortBy = 'votes'
    })
  }

  addSession(){
    this.addMode = true
  }

  saveNewSession(session:ISession){
    const nextID = Math.max.apply(null, this.event.sessions.map(s => s.id))
    session.id = nextID + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false
  }

  cancelNewSession(){
    this.addMode = false
  }

}
