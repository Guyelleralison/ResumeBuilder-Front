import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  candidateId!: string;

  constructor(
    private experienceService: ExperienceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.experiencesList = this.experienceService.getExperienceList();
    this.route.queryParams.subscribe(param => {
      this.candidateId = param['id'];
    });
  }

  onClickPreviousPage(idCandidate?: string): void {
    this.router.navigate(['/info'], { queryParams: { id: idCandidate }});
  }

  onClickNextPage(): void {
    this.router.navigate(['/skills'], {queryParams: {id: this.candidateId}});
  }

  onSubmitForm(form?: NgForm): void {
    if (form) {
    console.log(form.value);
    this.experiencesList.push(form.value as Experience);
    }
  }

  onDeleteExperience(idExperience: string): void {
    
  }

}
