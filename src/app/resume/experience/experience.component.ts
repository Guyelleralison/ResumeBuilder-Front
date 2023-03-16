import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { OnCreateForm } from 'src/app/interfaces/on-create-form';
import { Experience } from 'src/app/core/models/experience.model';
import { CandidateService } from 'src/app/core/services/candidate.service';
import { ExperienceService } from 'src/app/core/services/experience.service';
import { SidebarMenuService } from 'src/app/core/services/sidebar-menu.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnCreateForm {

  idExperience!: string;
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
  experienceAdded$!: Observable<Experience>;

  constructor(
    private candidateService: CandidateService,
    private router: Router,
    private route: ActivatedRoute,
    private sideBarMenuService: SidebarMenuService,
    private experienceService: ExperienceService
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
      if (!form.value['isCurrentPosition']) form.value['isCurrentPosition'] = false;
      this.experiencesList$ = this.experienceService.saveOrUpdate({
        ...form.value,
        idCandidate: this.candidateId
      }, form.value['idExperience']).pipe(
        switchMap(()=>this.candidateService.getCandidateExperiences(this.candidateId))
      );
    //this.experiencesList.push(form.value as Experience);
    }
  }

  onDeleteExperience(idExperience: string): void {

  }

  expandExperience(idExperience: string): void {
    this.experienceService.getExperienceDetail(idExperience).pipe(
      tap((experience) => {
        this.positionTitle = experience.positionTitle;
        this.sector = experience.sector;
        this.startDate = experience.startDate;
        this.title = experience.title;
        this.description = experience.description;
        this.endDate = experience.endDate;
        this.isCurrentPosition = experience.isCurrentPosition;
        this.idExperience = experience.id;
      })
    ).subscribe();
  }

}
