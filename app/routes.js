"use strict";
var events_list_component_1 = require('./events/events-list.component');
var event_details_component_1 = require('./events/event-details/event-details.component');
var event_create_component_1 = require('./events/event-create.component');
var _404_component_1 = require('./error/404.component');
var event_details_activator_service_1 = require('./events/event-details/event-details-activator.service');
var events_list_resolver_service_1 = require('./events/events-list-resolver.service');
exports.appRoutes = [
    { path: 'events/new', component: event_create_component_1.EventCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: events_list_component_1.EventListComponent, resolve: { events: events_list_resolver_service_1.EventsListResolver } },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent, canActivate: [event_details_activator_service_1.EventRouterActivator] },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map