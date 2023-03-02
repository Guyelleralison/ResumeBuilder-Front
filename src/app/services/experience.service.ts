import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
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
                map(result=>result.experiences),
                tap(result => console.log(result))
            );
    }

    getExperienceProfile(idProfile: string): Observable<any> {
        console.log('service', idProfile);
        
        return this.http.get(`http://localhost:8000/api/experience/profiles/${ idProfile }`).pipe(
            tap((res)=>console.log(res)
            )
        );
    }
}