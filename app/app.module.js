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
//ANGULAR IMPORTS
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
//ALL IMPORTS FROM EVENTS FOLDER
var index_1 = require('./events/index');
var events_app_component_1 = require('./events-app.component');
var navbar_component_1 = require('./nav/navbar.component');
var _404_component_1 = require('./error/404.component');
var routes_1 = require('./routes');
var auth_service_1 = require('./user/auth.service');
var toastr_service_1 = require('./common/toastr.service');
var jQuery_service_1 = require('./common/jQuery.service');
var simpleModal_component_1 = require('./common/simpleModal.component');
var modalTrigger_directive_1 = require('./common/modalTrigger.directive');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            declarations: [
                events_app_component_1.EventsAppComponent,
                navbar_component_1.NavbarComponent,
                index_1.EventListComponent,
                index_1.EventThumbnailComponent,
                index_1.EventDetailsComponent,
                index_1.EventCreateComponent,
                _404_component_1.Error404Component,
                index_1.SessionCreateComponent,
                index_1.SessionListComponent,
                index_1.SessionToggleComponent,
                index_1.DurationPipe,
                simpleModal_component_1.SimpleModalComponent,
                index_1.UpvoteComponent,
                modalTrigger_directive_1.ModalTriggerDirective,
                index_1.ValidateLocationDirective
            ],
            providers: [
                index_1.EventService,
                index_1.VotesService,
                index_1.EventsListResolver,
                index_1.EventResolver,
                auth_service_1.AuthService,
                {
                    //not a service.
                    provide: 'canDeactivateCreateEvent',
                    useValue: checkDirtyStateCreateEvent
                },
                {
                    provide: toastr_service_1.TOASTR_TOKEN,
                    useValue: toastr
                },
                {
                    provide: jQuery_service_1.JQUERY_TOKEN,
                    useValue: jQuery
                }
            ],
            bootstrap: [events_app_component_1.EventsAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function checkDirtyStateCreateEvent(component) {
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}
//# sourceMappingURL=app.module.js.map