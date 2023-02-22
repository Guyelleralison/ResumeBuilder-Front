import { Experience } from "./experience.model";
import { Profile } from "./profile.model";

export class Candidate {
    id!: string;
    lastName!: string;
    firstName!: string;
    matricule!: string;
    dateOfBirth!: Date;
    biography?: string;
    gender!: string;
    email!: string;
    profiles!: Profile[];
    status!: string;
    experiences!: Experience[];
    
    public static fromJson(jsonObject: any): Candidate {
        return {
            id: jsonObject['id'],
            lastName: jsonObject['lastName'],
            firstName: jsonObject['firstName'],
            gender: jsonObject['sexe'],
            email: jsonObject['email'],
            profiles: jsonObject['profiles'],
            dateOfBirth: jsonObject['dateOfBirth'],
            matricule: jsonObject['matricule'],
            status: jsonObject['status'],
            experiences: jsonObject['experiences']
        } as Candidate;
    }
}