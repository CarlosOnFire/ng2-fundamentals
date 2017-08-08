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
var SessionToggleComponent = (function () {
    function SessionToggleComponent() {
        this.visible = true;
    }
    SessionToggleComponent.prototype.toggleDataSession = function () {
        this.visible = !this.visible;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SessionToggleComponent.prototype, "title", void 0);
    SessionToggleComponent = __decorate([
        core_1.Component({
            selector: 'session-toggle',
            template: "\n    <div class=\"well pointable\" (click)=\"toggleDataSession()\">\n        <h4 class=\"well-title\">{{title}}</h4>\n        <ng-content *ngIf=\"visible\"></ng-content>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SessionToggleComponent);
    return SessionToggleComponent;
}());
exports.SessionToggleComponent = SessionToggleComponent;
//# sourceMappingURL=session-toggle.component.js.map