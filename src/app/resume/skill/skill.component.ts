import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { OnCreateForm } from 'src/app/interfaces/on-create-form';
import { SkillsCategory } from 'src/app/models/skills-category.model';
import { Skills } from 'src/app/models/skills.model';
import { SkillService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit, OnCreateForm {

  skillForm!: FormGroup;
  skills$!: Observable<Skills[]>;
  candidateId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private skillService: SkillService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
      category: [null],
      technology: [null],
      version: [null]
    });

    this.route.queryParams.subscribe(param => {
      this.candidateId = param['id'];
      this.skills$ = this.skillService.getSkillsByCandidate(param['id']);
    });

  }

  onSubmitForm() {
    // const newSkill: Skills = {
    //   id: (this.skills.length+1).toString(),
    //   category: {
    //     id: '5',
    //     name: this.skillForm.value.category
    //   },
    //   technology: {
    //     id: '5',
    //     name: this.skillForm.value.technology,
    //     version: this.skillForm.value.version
    //   }
    // };
    
    // this.skills.push(newSkill);
  }

  onDeleteSkill(idSkill: string): void {
    //this.skills = this.skills.filter((skill) => skill.id !== idSkill);
  }

  onClickNextPage(): void {
    this.router.navigate(['/education'], {queryParams: {id: this.candidateId}});
  }

  onClickPreviousPage(): void {
    this.router.navigate(['/experiences'], {queryParams: {id: this.candidateId}});
  }

}
