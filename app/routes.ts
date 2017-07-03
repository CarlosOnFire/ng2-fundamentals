import { Routes } from '@angular/router'
import { EventListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { EventCreateComponent } from './events/event-create.component'
import { Error404Component } from './error/404.component'
import { EventRouterActivator } from './events/event-details/event-details-activator.service'
import { EventsListResolver } from './events/events-list-resolver.service'

export const appRoutes:Routes = [
  { path: 'events/new', component: EventCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventListComponent, resolve: {events:EventsListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator]},
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full'}
]
