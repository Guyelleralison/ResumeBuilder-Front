import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OnCreateForm } from 'src/app/interfaces/on-create-form';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnCreateForm {

  position!: string;
  sector!: string;
  beginDate!: string;
  endDate!: string;
  isCurrentPosition!: boolean;
  experienceTitle!: string;
  description!: string;
  experiencesList!: Experience[];

  constructor(private experienceService: ExperienceService, private router: Router) { }

  onClickNextPage(): void {
    this.router.navigate(['/skills']);
  }

  ngOnInit(): void {
    this.experiencesList = this.experienceService.getExperienceList();
  }

  onSubmitForm(form?: NgForm): void {
    if (form) {
    console.log(form.value);
    this.experiencesList.push(form.value as Experience);
    }
  }

}
