import { SkillsCategory } from "./skills-category.model";
import { SkillsTechnology } from "./skills-technology.model";

export class Skills {
    id!: string;
    category!: SkillsCategory;
    technology!: SkillsTechnology;
}