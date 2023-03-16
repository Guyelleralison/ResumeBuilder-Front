import { Profile } from "./profile.model";

export class CandidateProfile {
    candidateId!: string;
    candidateFirstName!: string;
    candidateLastName!: string;
    profile!: Profile;
    experienceId!: string;
}