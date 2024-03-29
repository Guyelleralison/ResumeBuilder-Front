import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { Observable } from 'rxjs';
import { OnCreateForm } from 'src/app/interfaces/on-create-form';
import { Experience } from 'src/app/core/models/experience.model';
import { Profile } from 'src/app/core/models/profile.model';
import { Skills } from 'src/app/core/models/skills.model';
import { ExperienceProfileService } from 'src/app/core/services/experience-profile.service';
import { ExperienceService } from 'src/app/core/services/experience.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { SidebarMenuService } from 'src/app/core/services/sidebar-menu.service';
import { SkillService } from 'src/app/core/services/skills.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnCreateForm {

  experiences$!: Observable<Experience[]>;
  skills!: Skills[];
  candidateId!: string;
  profile$!: Observable<Profile>;
  currentRoute!: string;

  constructor(
    private skillService: SkillService,
    private experienceService: ExperienceService,
    private profileService: ProfileService,
    private experienceProfileService: ExperienceProfileService,
    private sideBarMenuService: SidebarMenuService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      };
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.candidateId = param['id'];
      if (param['profileId']) {
        this.experiences$ = this.experienceService.getExperienceProfile(param['profileId'], param['id']);
      } else {
        this.experiences$ = this.experienceService.getExperiencesByCandidate(param['id']);
      }
      this.profile$ = this.profileService.getProfileDetail(param['profileId']);
    });

    this.skills = this.skillService.getSkillsByProfile('');
  }

  onSubmitForm(): void {
    throw new Error('Method not implemented.');
  }

  onClickNextPage(): void {
    throw new Error('Method not implemented.');
  }

  onClickPreviousPage(currentRoute?:string): void {
        const currentSideBarMenuActive = this.sideBarMenuService.getCurrentActiveSideBar(currentRoute);
        this.router.navigate([`${ currentSideBarMenuActive?.previousLink }`], { queryParams: { id: this.candidateId } });
  }

  addOrRemoveExperience(event: any, experienceId: string, profileId: string): void {
    if (event.currentTarget.checked === true) {
      this.experienceProfileService.addExperienceProfile(profileId, experienceId).subscribe();
    }
    if (event.currentTarget.checked === false) {
      this.experienceProfileService.deleteExperienceProfile(profileId); //to change into the real experienceProfileID
    }
  }

}
