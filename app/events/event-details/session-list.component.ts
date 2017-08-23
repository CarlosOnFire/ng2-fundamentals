import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared/index'
import { AuthService } from '../../user/auth.service'
import { VotesService } from './votes.service'

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html',
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    @Input() sortBy: string
    filteredSessions: ISession[]

    constructor(private auth:AuthService, private voteService: VotesService){

    }

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

    toggleVote(session: ISession){
        if(this.userHasVoted(session)){
            this.voteService.deleteVote(session, this.auth.currentUser.userName)
        }else{
            this.voteService.addVote(session, this.auth.currentUser.userName)
        }

        if(this.sortBy === 'votes'){
            this.filteredSessions.sort(sortByVotesAsc)
        }
    }

    userHasVoted(session: ISession){
        return this.voteService.userHasVoted(session, this.auth.currentUser.userName)
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