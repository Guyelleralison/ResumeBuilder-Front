import { Candidate } from "./candidate.model";
import { ExperienceProfile } from "./experience-profile.model";

export class Experience{
    id!: string;
    positionTitle!: string;
    sector!: string;
    startDate!: string;
    endDate!: string;
    isCurrentPosition!: boolean;
    title!: string;
    description!: string;
    idCandidate!: string;
    candidate?: Candidate;
    profileId?: string;
    
    public static extractExperience(experienceProfileJSON: ExperienceProfile[]): Experience[] {
        const experienceList: Experience[] = [];
        for (let exp of experienceProfileJSON) {
            experienceList.push({
                ...exp.experience,
                profileId: exp.profile.id
            })
        }

        
        return experienceList;
    }

    public static joinExperiences(experiencesByProfile: Experience[], allExperience: Experience[]): Experience[] {
        for (let exp of allExperience) {
            for (let expProfile of experiencesByProfile) {
                if (exp.id === expProfile.id) {
                    exp.profileId = expProfile.profileId;
                }
            }
        }
        return allExperience;
    }
}