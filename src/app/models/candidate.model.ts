import { Profile } from "./profile.model";

export class Candidate {
    id!: string;
    lastName!: string;
    firstName!: string;
    matricule?: string;
    dateOfBirth?: string;
    biography?: string;
    sexe!: string;
    email!: string;
    profiles!: Profile[];
}