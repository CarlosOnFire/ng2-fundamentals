import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'
import { EventListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { EventCreateComponent } from './events/event-create.component'
import { Error404Component } from './error/404.component'

import { EventService } from './events/shared/event.service'
import { EventRouterActivator } from './events/event-details/event-details-activator.service'
import { EventDetailsComponent } from './events/event-details/event-details.component'
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
