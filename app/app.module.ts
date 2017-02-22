import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'
import { EventListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [EventsAppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent],
  bootstrap: [EventsAppComponent]
})

export class AppModule {

}
