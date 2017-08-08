import { Component, Input } from '@angular/core'

@Component({
    selector: 'session-toggle',
    template: `
    <div class="well pointable" (click)="toggleDataSession()">
        <h4 class="well-title">{{title}}</h4>
        <ng-content *ngIf="visible"></ng-content>
    </div>
    `
})

export class SessionToggleComponent {
    @Input() title: string
    visible: boolean = true

    toggleDataSession(){
        this.visible = !this.visible
    }

}