import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { CandidateSkills } from "../models/candidateSkills.model";
import { SkillsCategory } from "../models/skills-category.model";
import { SkillsTechnology } from "../models/skills-technology.model";
import { Skills } from "../models/skills.model";

@Injectable({
    providedIn: 'root'
})
export class SkillService {

    constructor(private http: HttpClient){}

    getSkillCategoryList(): SkillsCategory[] {
        return [
            {
                'id': '1',
                'name': 'Programmation'
            },
            {
                'id': '2',
                'name': 'Framework & library'
            },
            {
                'id': '3',
                'name': 'Database'
            }
        ]
    }

    getSkillTechnologyList(): SkillsTechnology[] {
        return [
            {
                'id': '1',
                'name': 'Java',
                'version': '8'
            },
            {
                'id': '2',
                'name': 'Angular',
                'version': '13'
            },
            {
                'id': '3',
                'name': 'ReactJS'
            }
        ]
    }

    getSkillsByProfile(profileId: string): Skills[] {
        return [
            {
                'id': '1',
                'category': {
                    'id': '1',
                    'name': 'Programmation'
                },
                'technology': {
                    'id': '1',
                    'name': 'JAVA',
                    'version': '8'
                }
            },
            {
                'id': '2',
                'category': {
                    'id': '1',
                    'name': 'Programmation'
                },
                'technology': {
                    'id': '2',
                    'name': 'JavaScript'
                }
            },
            {
                'id': '3',
                'category': {
                    'id': '2',
                    'name': 'Framework & Library'
                },
                'technology': {
                    'id': '3',
                    'name': 'Angular',
                    'version': '8'
                }
            }
        ]
    }

    getSkillsByCandidate(idCandidate: string): Observable<Skills[]> {
        return this.http.get<CandidateSkills>(`http://localhost:8000/api/skills/candidate/${ idCandidate }`)
            .pipe(
                map(result=>result.skills),
                tap(result => console.log(result))
            );
    }
}