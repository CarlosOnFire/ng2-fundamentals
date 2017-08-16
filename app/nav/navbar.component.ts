import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service'
import { EventService } from '../events/shared/event.service'
import { IEvent, ISession } from "../events/shared/event.model";


@Component({
  selector: 'navbar',
  templateUrl: 'app/nav/navbar.component.html',
  styles: [`
    li > a.active { color: #F97924; }
  `]
})

export class NavbarComponent {
  searchTerm:string = ""
  foundSessions: ISession[]

  constructor(private auth:AuthService, private event:EventService){
    
  }

  searchSessions(searchTerm){
    //We will have to subscrite to our returned Observable for asyncrounous data in the EventService 
    //Note: This is because we are gonna get later our data with in HttpRequest instead of searching locally the sessions
    this.event.searchSession(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions
    })
  }
}
