//ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

//ALL IMPORTS FROM EVENTS FOLDER
import {
  EventListComponent,
  EventThumbnailComponent,
  EventCreateComponent,
  EventDetailsComponent,
  EventService,
  EventRouterActivator,
  EventsListResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'
import { Error404Component } from './error/404.component'
import { appRoutes } from './routes'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventCreateComponent,
    Error404Component],
  providers: [
    EventService,
    EventRouterActivator,
    EventsListResolver,
    { //This is another way to declare providers, but we use it this way because we are guarding with a function and
      //not a service.
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule {

}

function checkDirtyState(component:EventCreateComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really wan to cancel?')
  return true
}
