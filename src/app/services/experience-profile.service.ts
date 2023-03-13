import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap, tap } from "rxjs";
import { Candidate } from "../models/candidate.model";
import { ExperienceProfile } from "../models/experience-profile.model";
import { Experience } from "../models/experience.model";

@Injectable({
    providedIn: 'root'
})
export class ExperienceProfileService {

    constructor(private http: HttpClient) { }

    addExperienceProfile(idProfile: string, idExperience: string): Observable<ExperienceProfile> {
        return this.http.post<ExperienceProfile>(`http://localchost:8000/api/experience/profiles`, { idProfile, idExperience });
    }

    deleteExperienceProfile(id: string): void {
        this.http.delete(`http://localhost:8000/api/experience/profiles/${ id }`);
    }
}