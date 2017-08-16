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
var event_service_1 = require('../shared/event.service');
var router_1 = require('@angular/router');
var EventDetailsComponent = (function () {
    function EventDetailsComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
        this.filterBy = 'all';
        this.sortBy = 'votes';
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //We implemented this because the last configuration was only prepared to route only once, this was because we
        //were using snapshot instead of waiting for a Observable to receive multipe routes and refresh the EventDetailsComponent
        this.route.params.forEach(function (params) {
            _this.event = _this.eventService.getEvent(+params['id']);
            _this.addMode = false;
            _this.filterBy = 'all';
            _this.sortBy = 'votes';
        });
    };
    EventDetailsComponent.prototype.addSession = function () {
        this.addMode = true;
    };
    EventDetailsComponent.prototype.saveNewSession = function (session) {
        var nextID = Math.max.apply(null, this.event.sessions.map(function (s) { return s.id; }));
        session.id = nextID + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    };
    EventDetailsComponent.prototype.cancelNewSession = function () {
        this.addMode = false;
    };
    EventDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/events/event-details/event-details.component.html',
            styles: ["\n    .container{\n      padding: 0 20px;\n    }\n    .event-image{\n      height: 100px;\n    }\n    a {\n      cursor: pointer;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, router_1.ActivatedRoute])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map