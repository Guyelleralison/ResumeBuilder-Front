import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { Candidate } from "../models/candidate.model";
import { HttpClient } from '@angular/common/http'
import { Experience } from "../models/experience.model";

@Injectable({
    providedIn: 'root'
})
export class CandidateService {

    constructor(private http: HttpClient){}

    getCandidateList(): Observable<Candidate[]> {
        return this.http.get<Candidate[]>('http://localhost:8000/api/candidates');
    }

    getCandidate(id: string): Observable<Candidate> {
        return this.http.get<Candidate>(`http://localhost:8000/api/candidates/${ id }`).pipe(map((jsonObject: any)=>Candidate.fromJson(jsonObject)));
    }

    getCandidateExperiences(id: string): Observable<Experience[]> {
        return this.http.get<Candidate>(`http://localhost:8000/api/candidates/${ id }`).pipe(map((jsonObject: any)=>Candidate.extractExperiences(jsonObject)));
    }
}