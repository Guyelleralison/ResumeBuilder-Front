import { CandidateProfile } from "./candidate-profile.model";
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

    public static extractExperiences(jsonObject: any): Experience[] {
        return jsonObject['experiences'];
    }

    public static extractCandidateProfiles(jsonObject: any[]): CandidateProfile[] {
        const candidateProfiles: CandidateProfile[] = [];

        for (let i = 0; i < jsonObject.length; i++) {

            candidateProfiles.push({
                candidateId: jsonObject[i]['candidate_id'],
                candidateFirstName: jsonObject[i]['first_name'],
                candidateLastName: jsonObject[i]['last_name'],
                profiles: [{
                    id: jsonObject[i]['profile_id'],
                    title: jsonObject[i]['profile_title']
                }],
                experiences: [jsonObject[i]['experience_id']]
            })
        }
        return Array.from(new Set(candidateProfiles));
    }
}