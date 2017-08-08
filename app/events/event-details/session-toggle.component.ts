import { Component } from '@angular/core'

@Component({
    selector: 'session-toggle',
    template: `
    <div class="well pointable" (click)="toggleDataSession()">
        <h4><ng-content select="[session-title]"></ng-content></h4>
        <ng-content *ngIf="visible" select="[session-info]"></ng-content>
    </div>
    `
})

export class SessionToggleComponent {
    visible: boolean = true

    toggleDataSession(){
        this.visible = !this.visible
    }

}