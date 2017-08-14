import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared/index'

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html',
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    @Input() sortBy: string
    filteredSessions: ISession[]

    ngOnChanges(){
        
        if(this.sessions){
            this.filterSession(this.filterBy)
            this.sortBy === 'votes' ? this.filteredSessions.sort(sortByVotesAsc) : this.filteredSessions.sort(sortByNamesDesc)
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

    function sortByVotesAsc(s1:ISession, s2:ISession){
        return s2.voters.length - s1.voters.length
    }

    function sortByNamesDesc(s1:ISession, s2:ISession){
        if(s1.name > s2.name) return 1
            else if (s1.name === s2.name) return 0
                else return -1
    }