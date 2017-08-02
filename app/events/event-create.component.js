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
var router_1 = require('@angular/router'); //NEED TO IMPORT ROUTER 2 NAVIGATE FROM CODE
var index_1 = require('./shared/index');
var EventCreateComponent = (function () {
    function EventCreateComponent(route, eventService) {
        this.route = route;
        this.eventService = eventService;
        this.isDirty = true;
    }
    EventCreateComponent.prototype.saveEvent = function (formValues) {
        this.eventService.saveNewEvent(formValues);
        this.isDirty = false;
        this.route.navigate(['/events']);
    };
    EventCreateComponent.prototype.cancelCreate = function () {
        this.route.navigate(['/events']);
    };
    EventCreateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/events/event-create.component.html',
            styles: ["\n    em { float:right; color:#E05C65; padding-left:10px; }\n    .error input { background-color: #E3C3C5; }\n    .error ::-webkit-input-placeholder { color: #999 }\n    .error ::-moz-placeholder { color: #999 }\n    .error :-moz-placeholder { color: #999 }\n    .error :ms-input-placeholder { color: #999 }\n  "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.EventService])
    ], EventCreateComponent);
    return EventCreateComponent;
}());
exports.EventCreateComponent = EventCreateComponent;
//# sourceMappingURL=event-create.component.js.map