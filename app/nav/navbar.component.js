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
var auth_service_1 = require('../user/auth.service');
var event_service_1 = require('../events/shared/event.service');
var NavbarComponent = (function () {
    function NavbarComponent(auth, event) {
        this.auth = auth;
        this.event = event;
        this.searchTerm = "";
    }
    NavbarComponent.prototype.searchSessions = function (searchTerm) {
        var _this = this;
        //We will have to subscrite to our returned Observable for asyncrounous data in the EventService 
        //Note: This is because we are gonna get later our data with in HttpRequest instead of searching locally the sessions
        this.event.searchSession(searchTerm).subscribe(function (sessions) {
            _this.foundSessions = sessions;
            console.log(_this.foundSessions);
        });
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: 'app/nav/navbar.component.html',
            styles: ["\n    li > a.active { color: #F97924; }\n  "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, event_service_1.EventService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map