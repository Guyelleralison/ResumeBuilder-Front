import { Injectable } from "@angular/core";
import { Candidate } from "../models/candidate.model";

@Injectable({
    providedIn: 'root'
})
export class CandidateService {

    getCandidateList(): Candidate[] {
        return [
            {
                'id': 'id1',
                'lastName': 'Merlet',
                'firstName': 'Jean',
                'sexe': 'Masculin',
                'email': 'j.merlet@etechconsulting-mg.com',
                'profiles': [
                    {
                        'id': 'pro1',
                        'title': 'Developpeur Senior JAVA'
                    },
                    {
                        'id': 'pro2',
                        'title': 'Tech Lead JAVA'
                    }
                ]
            },
            {
                'id': 'id2',
                'lastName': 'Obispo',
                'firstName': 'Ruth',
                'sexe': 'Feminin',
                'email': 'r.obispo@etechconsulting-mg.com',
                'profiles': [
                    {
                        'id': 'pro2',
                        'title': 'Developpeur Junior ASP.NET'
                    },
                    {
                        'id': 'pro2',
                        'title': 'Developpeur Junior NodeJS'
                    }
                ]
            }
        ];
    }
}