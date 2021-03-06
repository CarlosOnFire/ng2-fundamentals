//ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

//ALL IMPORTS FROM EVENTS FOLDER
import {
  EventListComponent,
  EventThumbnailComponent,
  EventCreateComponent,
  EventDetailsComponent,
  EventService,
  VotesService,
  EventsListResolver,
  EventResolver,
  SessionCreateComponent,
  SessionListComponent,
  SessionToggleComponent,
  UpvoteComponent,
  DurationPipe,
  ValidateLocationDirective
} from './events/index'

import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'
import { Error404Component } from './error/404.component'
import { appRoutes } from './routes'
import { ProfileComponent } from "./user/profile.component";
import { AuthService } from './user/auth.service'
import { TOASTR_TOKEN, Toastr } from './common/toastr.service'
import { JQUERY_TOKEN } from './common/jQuery.service'
import { SimpleModalComponent } from './common/simpleModal.component'
import { ModalTriggerDirective } from './common/modalTrigger.directive'

declare let toastr: Toastr
declare let jQuery: Object

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
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
    DurationPipe,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    ValidateLocationDirective
  ],
  providers: [
    EventService,
    VotesService,
    EventsListResolver,
    EventResolver,
    AuthService,
    { //This is another way to declare providers, but we use it this way because we are guarding with a function and
      //not a service.
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyStateCreateEvent
    },
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQUERY_TOKEN,
      useValue: jQuery
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


