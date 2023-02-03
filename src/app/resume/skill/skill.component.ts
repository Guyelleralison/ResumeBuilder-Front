import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { SkillsCategory } from 'src/app/models/skills-category.model';
import { Skills } from 'src/app/models/skills.model';
import { SkillService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skillForm!: FormGroup;
  skills!: Skills[];

  constructor(private formBuilder: FormBuilder, private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
      category: [null],
      technology: [null],
      version: [null]
    });

    this.skills = this.skillService.getSkillsByProfile('');
  }

  onSubmitForm() {
    const newSkill: Skills = {
      id: (this.skills.length+1).toString(),
      category: {
        id: '5',
        name: this.skillForm.value.category
      },
      technology: {
        id: '5',
        name: this.skillForm.value.technology,
        version: this.skillForm.value.version
      }
    };
    
    this.skills.push(newSkill);
  }

  onDeleteSkill(idSkill: string): void {
    this.skills = this.skills.filter((skill) => skill.id !== idSkill);
  }

}
