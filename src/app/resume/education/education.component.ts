import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationEnd, Event, ActivatedRoute } from '@angular/router';
import { OnCreateForm } from 'src/app/interfaces/on-create-form';
import { Formation } from 'src/app/models/formation.model';
import { FormationService } from 'src/app/services/formation.service';
import { SidebarMenuService } from 'src/app/services/sidebar-menu.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnCreateForm {

  formationList!: Formation[];
  formationForm!: FormGroup;
  candidateId!: string;
  currentRoute!: string;

  constructor(
    private formationService: FormationService,
    private formBuilder: FormBuilder,
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
    });
    this.formationList = this.formationService.getFormationsByProfile('');

    this.formationForm = this.formBuilder.group({
      id: [null],
      diploma: [null],
      institute: [null],
      location: [null],
      startDate: [null],
      endDate: [null],
      title: [null]
    });
  }

  onDeleteFormation(idFormation: string): void {
    this.formationList = this.formationList.filter(formation => formation.id !== idFormation);
  }

  onSubmitForm(): void {
    const newFormation: Formation = {
      ...this.formationForm.value,
      id: this.formationList.length + 1
    };
    this.formationList.push(newFormation);
  }

  onClickNextPage(currentRoute?:string): void {
      const currentSideBarMenuActive = this.sideBarMenuService.getCurrentActiveSideBar(currentRoute);
      this.router.navigate([`${ currentSideBarMenuActive?.nextLink }`], { queryParams: { id: this.candidateId } });
  }

  onClickPreviousPage(currentRoute?:string): void {
      const currentSideBarMenuActive = this.sideBarMenuService.getCurrentActiveSideBar(currentRoute);
      this.router.navigate([`${ currentSideBarMenuActive?.previousLink }`], { queryParams: { id: this.candidateId } });
  }
}
