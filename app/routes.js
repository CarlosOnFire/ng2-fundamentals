"use strict";
var index_1 = require('./events/index');
var _404_component_1 = require('./error/404.component');
exports.appRoutes = [
    { path: 'events/new', component: index_1.EventCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: index_1.EventListComponent, resolve: { events: index_1.EventsListResolver } },
    { path: 'events/:id', component: index_1.EventDetailsComponent, resolve: { event: index_1.EventResolver } },
    { path: 'events/session/new', component: index_1.SessionCreateComponent },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];
//# sourceMappingURL=routes.js.map