import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { CandidateExperiences } from "../models/candidateExperiences.model";
import { Experience } from "../models/experience.model";

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    constructor(private http: HttpClient) { }

    getExperienceList(): Experience[] {
        return [
            {
                'id': '1',
                'position': 'Développeur Low Code',
                'beginDate': '2020-04-12',
                'endDate': '2021-10-30',
                'experienceTitle': 'Application de gestion de caisse',
                'description': 'En charge du développement low code',
                'sector': 'Commerce',
                'isCurrentPosition': false
            },
            {
                'id': '2',
                'position': 'Développeur C#',
                'beginDate': '2019-04-12',
                'endDate': '2020-03-30',
                'experienceTitle': 'Application de transport',
                'description': 'En charge du développement',
                'sector': 'Transport',
                'isCurrentPosition': false
            }
        ];
    }

    getExperiencesByCandidate(idCandidate: string): Observable<Experience[]> {
        return this.http.get<CandidateExperiences>(`http://localhost:8000/api/experiences/candidate/${ idCandidate }`)
            .pipe(
                map(result=>result.experiences),
                tap(result => console.log(result))
            );
    }
}