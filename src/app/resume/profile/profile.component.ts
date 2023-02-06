import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { Skills } from 'src/app/models/skills.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { SkillService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  experiences!: Experience[];
  skills!: Skills[];

  constructor(private skillService: SkillService, private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experiences = this.experienceService.getExperienceList();
    this.skills = this.skillService.getSkillsByProfile('');
  }

}
