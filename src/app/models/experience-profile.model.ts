import { Experience } from "./experience.model";
import { Profile } from "./profile.model";

export class ExperienceProfile {
    id!: string;
    profile!: Profile;
    experience!: Experience;
}