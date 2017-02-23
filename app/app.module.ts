import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'
import { EventListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'

import { EventService } from './events/shared/event.service'

@NgModule({
  imports: [BrowserModule],
  declarations: [EventsAppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})

export class AppModule {

}
