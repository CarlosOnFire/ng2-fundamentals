import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router'
import { EventService } from '../shared/event.service'

@Injectable()

export class EventRouterActivator implements CanActivate{

  constructor(private eventService:EventService, private router:Router){

  }

  canActivate(route:ActivatedRouteSnapshot){

    const eventExist = !!this.eventService.getEvent(+route.params['id'])//!! CAST TO BOOLEAM
                                                                      //IF EXIST OR NOT IN OUR EVENTLIST SERVICE

    if(!eventExist)
        this.router.navigate(['/404'])

    return eventExist

  }
}
