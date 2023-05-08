import { Component, OnInit } from '@angular/core';
import { SkillsCategory } from 'src/app/core/models/skills-category.model';
import { SkillsTechnology } from 'src/app/core/models/skills-technology.model';
import { SkillService } from 'src/app/core/services/skills.service';
import {Observable, switchMap} from "rxjs";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  skillsCategory$!: Observable<SkillsCategory[]>;
  skillsTechnology$!: Observable<SkillsTechnology[]>;
  categoryName!: string;
  technologyName!: string;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillsCategory$ = this.skillService.getSkillCategoryList();
    this.skillsTechnology$ = this.skillService.getSkillTechnologyList();
  }

  onEditCategory(category: SkillsCategory): void {
    if (category) {
      category.name = (<HTMLInputElement> document.getElementById(`cname${ category.id }`)).value;
      this.skillsCategory$ = this.skillService.updateNewSkillCategory(category).pipe(
        switchMap(() => this.skillService.getSkillCategoryList())
      );
    }
  }

  onDeleteCategory(categoryId?: string): void {
    if (categoryId) {
      this.skillsCategory$ = this.skillService.deleteSkillCategory(categoryId).pipe(
        switchMap(() => this.skillService.getSkillCategoryList())
      );
    }
  }

  addNewSkillCategory(form?: NgForm): void {
    if (form) {
      console.log(form.value.categoryName);
      this.skillsCategory$ = this.skillService.addNewSkillCategory({ name: form.value.categoryName }).pipe(
        switchMap(()=>this.skillService.getSkillCategoryList())
      );
    }
  }

  addNewSkillTechnology(formV?: NgForm): void {
    if (formV) {
      console.log(formV.value.technologyName);
      this.skillsTechnology$ = this.skillService.addNewSkillTechnology({ name: formV.value.technologyName }).pipe(
        switchMap(()=>this.skillService.getSkillTechnologyList())
      );
    }
  }

  onDeleteTechnology(id?: string): void {
    if (id) {
      this.skillsTechnology$ = this.skillService.deleteSkillTechnology(id).pipe(
        switchMap(() => this.skillService.getSkillTechnologyList())
      );
    }
  }

  onEditTechnology(technology?: SkillsTechnology): void {
    if (technology) {
      const inputValue = (<HTMLInputElement> document.getElementById(`tname${ technology.id }`)).value.trimEnd();
      const inputSplit = inputValue.split(' ');
      technology.version = inputSplit && inputSplit[inputSplit.length - 1];
      technology.name = technology.version ? inputSplit[0] : inputValue;
      this.skillsTechnology$ = this.skillService.updateNewSkillTechnology(technology).pipe(
        switchMap(() => this.skillService.getSkillTechnologyList())
      );
    }
  }
}
