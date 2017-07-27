"use strict";
var profile_component_1 = require('./profile.component');
exports.userRoutes = [
    { path: 'profile', component: profile_component_1.ProfileComponent, canDeactivate: ['canDeactivateEditProfile'] }
];
//# sourceMappingURL=user.routes.js.map