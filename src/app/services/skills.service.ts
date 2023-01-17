import { Injectable } from "@angular/core";
import { SkillsCategory } from "../models/skills-category.model";
import { SkillsTechnology } from "../models/skills-technology.model";

@Injectable({
    providedIn: 'root'
})
export class SkillService {

    getSkillCategoryList(): SkillsCategory[] {
        return [
            {
                'id': '1',
                'name': 'Programmation'
            },
            {
                'id': '2',
                'name': 'Framework & library'
            },
            {
                'id': '3',
                'name': 'Database'
            }
        ]
    }

    getSkillTechnologyList(): SkillsTechnology[] {
        return [
            {
                'id': '1',
                'name': 'Java',
                'version': '8'
            },
            {
                'id': '2',
                'name': 'Angular',
                'version': '13'
            },
            {
                'id': '3',
                'name': 'ReactJS'
            }
        ]
    }
}