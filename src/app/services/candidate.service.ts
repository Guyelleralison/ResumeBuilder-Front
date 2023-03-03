import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { Candidate } from "../models/candidate.model";
import { HttpClient } from '@angular/common/http'
import { Experience } from "../models/experience.model";
import { CandidateProfile } from "../models/candidate-profile.model";

@Injectable({
    providedIn: 'root'
})
export class CandidateService {

    constructor(private http: HttpClient){}

    getCandidateList(): Observable<Candidate[]> {
        return this.http.get<Candidate[]>('http://localhost:8000/api/candidates')
    }

    getCandidate(id: string): Observable<Candidate> {
        return this.http.get<Candidate>(`http://localhost:8000/api/candidates/${ id }`).pipe(
            map((jsonObject: any) => Candidate.fromJson(jsonObject))
        );
    }

    getCandidateExperiences(id: string): Observable<Experience[]> {
        return this.http.get<Candidate>(`http://localhost:8000/api/candidates/${ id }`).pipe(
            map((jsonObject: any) => Candidate.extractExperiences(jsonObject))
        );
    }

    getCandidateProfiles(id: string): Observable<CandidateProfile[]> {
        return this.http.get(`http://localhost:8000/api/profiles/candidate/${ id }`).pipe(
            map((jsonObject: any) => Candidate.extractCandidateProfiles(jsonObject))
        );
    }

    getAllCandidateProfile(): Observable<Candidate[]> {
        return this.http.get(`http://localhost:8000/api/candidates/profiles/list`).pipe(
            map((jsonObject: any) => Candidate.extractCandidateProfiles(jsonObject)),
            switchMap(candidateProfiles => this.getCandidateList().pipe(
                map((allCandidate)=>Candidate.fillCandidateProfiles(candidateProfiles, allCandidate))
            ))
        );
    }
}