import { Experience } from "./experience.model";
import { Skills } from "./skills.model";

export class Profile {
    id!: string;
    title!: string;
    idCandidate!: string;
    experiences!: Experience[];
    skills!: Skills[];
}