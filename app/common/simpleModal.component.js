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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var jQuery_service_1 = require('./jQuery.service');
var SimpleModalComponent = (function () {
    function SimpleModalComponent($) {
        this.$ = $;
    }
    SimpleModalComponent.prototype.closeModal = function () {
        if (this.closeOnClickElement.toLocaleLowerCase() === "true")
            this.$(this.container.nativeElement).modal('hide');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SimpleModalComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SimpleModalComponent.prototype, "elementId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SimpleModalComponent.prototype, "closeOnClickElement", void 0);
    __decorate([
        core_1.ViewChild('modalContainer'), 
        __metadata('design:type', core_1.ElementRef)
    ], SimpleModalComponent.prototype, "container", void 0);
    SimpleModalComponent = __decorate([
        core_1.Component({
            selector: 'simple-modal',
            templateUrl: 'app/common/simpleModal.component.html',
            styles: ["\n        .modal-body {\n            height: 500px;\n            overflow-y: scroll;\n        }\n    "]
        }),
        __param(0, core_1.Inject(jQuery_service_1.JQUERY_TOKEN)), 
        __metadata('design:paramtypes', [Object])
    ], SimpleModalComponent);
    return SimpleModalComponent;
}());
exports.SimpleModalComponent = SimpleModalComponent;
//# sourceMappingURL=simpleModal.component.js.map