import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OnCreateForm } from 'src/app/interfaces/on-create-form';
import { Experience } from 'src/app/models/experience.model';
import { CandidateService } from 'src/app/services/candidate.service';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnCreateForm {

  positionTitle!: string;
  sector!: string;
  startDate!: string;
  endDate!: string;
  isCurrentPosition!: boolean;
  title!: string;
  description!: string;
  experiencesList$!: Observable<Experience[]>;
  candidateId!: string;

  constructor(
    private experienceService: ExperienceService,
    private candidateService: CandidateService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.candidateId = param['id'];
      this.experiencesList$ = this.candidateService.getCandidateExperiences(param['id']);
    });
  }

  onClickPreviousPage(): void {
    this.router.navigate(['/info'], { queryParams: { id: this.candidateId }});
  }

  onClickNextPage(): void {
    this.router.navigate(['/skills'], {queryParams: {id: this.candidateId}});
  }

  onSubmitForm(form?: NgForm): void {
    if (form) {
    console.log(form.value);
    //this.experiencesList.push(form.value as Experience);
    }
  }

  onDeleteExperience(idExperience: string): void {
    
  }

}
