import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core'
import { JQUERY_TOKEN } from './jQuery.service'

@Component({
    selector: 'simple-modal',
    templateUrl: 'app/common/simpleModal.component.html',
    styles: [`
        .modal-body {
            height: 500px;
            overflow-y: scroll;
        }
    `]
})

export class SimpleModalComponent {
    @Input() title:string
    @Input() elementId:string
    @Input() closeOnClickElement:string
    @ViewChild('modalContainer') container: ElementRef

    constructor(@Inject(JQUERY_TOKEN) private $: any){

    }

    closeModal(){
        if(this.closeOnClickElement.toLocaleLowerCase() === "true")
        this.$(this.container.nativeElement).modal('hide')
    }

}