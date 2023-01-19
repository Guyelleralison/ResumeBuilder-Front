import { Injectable } from "@angular/core";
import { Experience } from "../models/experience.model";

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

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
}