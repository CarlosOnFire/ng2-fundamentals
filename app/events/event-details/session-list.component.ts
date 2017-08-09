import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared/index'

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html',
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    filteredSessions: ISession[]

    ngOnChanges(){
        
        if(this.sessions){
            this.filterSession(this.filterBy)
        }

    }

    filterSession(filter){
        if(filter === "all"){
            this.filteredSessions = this.sessions.slice(0)
        }else{
            this.filteredSessions = this.sessions.filter(session => {
                return session.level.toLowerCase() === filter
            })
        }
    }

}