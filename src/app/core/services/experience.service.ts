import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap, tap } from "rxjs";
import { Candidate } from "../models/candidate.model";
import { ExperienceProfile } from "../models/experience-profile.model";
import { Experience } from "../models/experience.model";

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    constructor(private http: HttpClient) { }

    getExperienceList(): Observable<Experience[]> {
        return this.http.get<Experience[]>(`http://localhost:8000/api/experiences`);
    }

    getExperiencesByCandidate(idCandidate: string): Observable<Experience[]> {
        return this.http.get<Candidate>(`http://localhost:8000/api/candidates/${ idCandidate }`)
            .pipe(
                map(result=>result.experiences)
            );
    }

    getExperienceDetail(idExperience: string): Observable<Experience> {
        return this.http.get<Experience>(`http://localhost:8000/api/experiences/${ idExperience }`);
    }

    getExperienceProfile(idProfile: string, idCandidate:string): Observable<Experience[]> {
        return this.http.get<ExperienceProfile[]>(`http://localhost:8000/api/experience/profiles/${ idProfile }`).pipe(
                map((res) => Experience.extractExperience(res)),
                switchMap((experiencesProfiles: Experience[]) => this.getExperiencesByCandidate(idCandidate).pipe(
                    map(allExperience=>Experience.joinExperiences(experiencesProfiles, allExperience))
            ))
        );
    }

    saveOrUpdate(experience: Experience, idExperience?: string): Observable<Experience> {
        console.log('experience added', experience);
        
        if (idExperience) {
            return this.http.put<Experience>(`http://localhost:8000/api/experiences/${ idExperience }`, experience);
        }
        return this.http.post<Experience>(`http://localhost:8000/api/experiences`, JSON.stringify(experience));
    }
}