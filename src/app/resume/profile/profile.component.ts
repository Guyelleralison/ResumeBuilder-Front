import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { Observable } from 'rxjs';
import { OnCreateForm } from 'src/app/interfaces/on-create-form';
import { Experience } from 'src/app/models/experience.model';
import { Skills } from 'src/app/models/skills.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { SidebarMenuService } from 'src/app/services/sidebar-menu.service';
import { SkillService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnCreateForm {

  experiences!: Observable<Experience[]>;
  skills!: Skills[];
  candidateId!: string;
  currentRoute!: string;

  constructor(
    private skillService: SkillService,
    private experienceService: ExperienceService,
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
    });
    this.experiences = this.experienceService.getExperienceList();
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

}
