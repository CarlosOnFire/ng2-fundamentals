import { Injectable } from '@angular/core'
import { ISession } from '../shared/event.model'

@Injectable()
export class VotesService {

    userHasVoted(session: ISession, userName: string){

        return session.voters.some(voter => voter === userName)

    }

    deleteVote(session: ISession, userName: string){
        session.voters = session.voters.filter( voter => voter !== userName)
    }

    addVote(session: ISession, userName: string){
        session.voters.push(userName)
    }

}