import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { Observable } from 'rxjs';
import { OnCreateForm } from 'src/app/interfaces/on-create-form';
import { Experience } from 'src/app/models/experience.model';
import { CandidateService } from 'src/app/services/candidate.service';
import { SidebarMenuService } from 'src/app/services/sidebar-menu.service';

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
  currentRoute!: string;

  constructor(
    private candidateService: CandidateService,
    private router: Router,
    private route: ActivatedRoute,
    private sideBarMenuService: SidebarMenuService
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
      this.experiencesList$ = this.candidateService.getCandidateExperiences(param['id']);
    });
  }

  onClickPreviousPage(currentRoute?:string): void {
        const currentSideBarMenuActive = this.sideBarMenuService.getCurrentActiveSideBar(currentRoute);
        this.router.navigate([`${ currentSideBarMenuActive?.previousLink }`], { queryParams: { id: this.candidateId } });
  }

  onClickNextPage(currentRoute?:string): void {
        const currentSideBarMenuActive = this.sideBarMenuService.getCurrentActiveSideBar(currentRoute);
        this.router.navigate([`${ currentSideBarMenuActive?.nextLink }`], { queryParams: { id: this.candidateId } });
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
