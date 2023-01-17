import { Component, OnInit } from '@angular/core';
import { SkillsCategory } from 'src/app/models/skills-category.model';
import { SkillsTechnology } from 'src/app/models/skills-technology.model';
import { SkillService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  skillsCategory!: SkillsCategory[];
  skillsTechnology!: SkillsTechnology[];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillsCategory = this.skillService.getSkillCategoryList();
    this.skillsTechnology = this.skillService.getSkillTechnologyList();
  }

  onEditCategory(categoryId: string): void {

  }

  onDeleteCategory(categoryId: string): void {

  }

  addNewSkillCategory(categoryName: string): void {

  }

  addNewSkillTechnology(technologyId: string): void {
    
  }
}
