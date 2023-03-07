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
    
    public static extractExperience(experienceProfileJSON: ExperienceProfile[]): Experience[] {
        const experienceList: Experience[] = [];
        for (let exp of experienceProfileJSON) {
            experienceList.push( exp.experience)
        }
        return experienceList;
    }
}