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
var EventCreateComponent = (function () {
    function EventCreateComponent(route) {
        this.route = route;
    }
    EventCreateComponent.prototype.cancelCreate = function () {
        this.route.navigate(['/events']);
    };
    EventCreateComponent = __decorate([
        //NEED TO IMPORT ROUTER 2 NAVIGATE FROM CODE
        core_1.Component({
            template: "\n    <h1>New Event</h1>\n    <hr>\n    <div class=\"col-md-6\">\n      <h3>CREATE EVENT FORM HERE</h3>\n      <br>\n      <br>\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelCreate()\">Cancel</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], EventCreateComponent);
    return EventCreateComponent;
}());
exports.EventCreateComponent = EventCreateComponent;
//# sourceMappingURL=event-create.component.js.map