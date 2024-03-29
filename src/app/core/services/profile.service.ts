import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable} from "rxjs";
import { Profile } from "../models/profile.model";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpClient) { }

    getProfileDetail(idProfile: string): Observable<Profile> {
        return this.http.get<Profile>(`http://localhost:8000/api/profiles/${ idProfile }`).pipe(
            map((p)=>Profile.fromJSON(p))
        );
    }

}
