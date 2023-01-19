import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  position!: string;
  sector!: string;
  beginDate!: string;
  endDate!: string;
  isCurrentPosition!: boolean;
  experienceTitle!: string;
  description!: string;
  experiencesList!: Experience[];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experiencesList = this.experienceService.getExperienceList();
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.experiencesList.push(form.value as Experience);
  }

}
