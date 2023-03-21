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

    getSkillCategoryList(): Observable<SkillsCategory[]> {
        return this.http.get<SkillsCategory[]>('http://localhost:8000/api/skill/category');
    }

    addNewSkillCategory(skillsCategory: SkillsCategory): Observable<SkillsCategory> {
      return this.http.post<SkillsCategory>('http://localhost:8000/api/skill/category', skillsCategory);
    }

    deleteSkillCategory(id: string): Observable<void>{
        return this.http.delete<void>(`http://localhost:8000/api/skill/category/${id}`);
    }

    updateNewSkillCategory(skillsCategory: SkillsCategory): Observable<SkillsCategory> {
      return this.http.put<SkillsCategory>(`http://localhost:8000/api/skill/category/${skillsCategory.id}`, skillsCategory);
    }

    getSkillTechnologyList(): Observable<SkillsTechnology[]> {
        return this.http.get<SkillsTechnology[]>('http://localhost:8000/api/skill/technology');
    }

    addNewSkillTechnology(skillsTechnology: SkillsTechnology): Observable<SkillsTechnology> {
      return this.http.post<SkillsTechnology>('http://localhost:8000/api/skill/technology', skillsTechnology);
    }

    deleteSkillTechnology(id: string): Observable<void>{
        return this.http.delete<void>(`http://localhost:8000/api/skill/technology/${id}`);
    }

    updateNewSkillTechnology(skillsTechnology: SkillsTechnology): Observable<SkillsTechnology> {
      return this.http.put<SkillsTechnology>(`http://localhost:8000/api/skill/technology/${skillsTechnology.id}`, skillsTechnology);
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
