import { Routes } from '@angular/router'

import {
  EventListComponent,
  EventDetailsComponent,
  EventCreateComponent,
  EventRouterActivator,
  EventsListResolver
} from './events/index'

import { Error404Component } from './error/404.component'

export const appRoutes:Routes = [
  { path: 'events/new', component: EventCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventListComponent, resolve: {events:EventsListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }

]
