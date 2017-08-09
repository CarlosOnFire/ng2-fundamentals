//ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//ALL IMPORTS FROM EVENTS FOLDER
import {
  EventListComponent,
  EventThumbnailComponent,
  EventCreateComponent,
  EventDetailsComponent,
  EventService,
  EventRouterActivator,
  EventsListResolver,
  SessionCreateComponent,
  SessionListComponent,
  SessionToggleComponent,
  DurationPipe
} from './events/index'

import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'
import { Error404Component } from './error/404.component'
import { appRoutes } from './routes'
import { ProfileComponent } from "./user/profile.component";
import { AuthService } from './user/auth.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventCreateComponent,
    Error404Component,
    SessionCreateComponent,
    SessionListComponent,
    SessionToggleComponent,
    DurationPipe
  ],
  providers: [
    EventService,
    EventRouterActivator,
    EventsListResolver,
    AuthService,
    { //This is another way to declare providers, but we use it this way because we are guarding with a function and
      //not a service.
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyStateCreateEvent
    }
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule {

}

function checkDirtyStateCreateEvent(component:EventCreateComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true
}


