"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var event_service_1 = require('../shared/event.service');
var EventRouterActivator = (function () {
    function EventRouterActivator(eventService, router) {
        this.eventService = eventService;
        this.router = router;
    }
    EventRouterActivator.prototype.canActivate = function (route) {
        var eventExist = !!this.eventService.getEvent(+route.params['id']); //!! CAST TO BOOLEAM
        //IF EXIST OR NOT IN OUR EVENTLIST SERVICE
        if (!eventExist)
            this.router.navigate(['/404']);
        return eventExist;
    };
    EventRouterActivator = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [event_service_1.EventService, router_1.Router])
    ], EventRouterActivator);
    return EventRouterActivator;
}());
exports.EventRouterActivator = EventRouterActivator;
//# sourceMappingURL=event-details-activator.service.js.map