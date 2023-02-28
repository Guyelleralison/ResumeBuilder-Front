import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { OnCreateForm } from 'src/app/interfaces/on-create-form';
import { Career } from 'src/app/models/career.model';
import { CareerService } from 'src/app/services/career.service';
import { SidebarMenuService } from 'src/app/services/sidebar-menu.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit, OnCreateForm {

  careerList!: Career[];
  careerForm!: FormGroup;
  candidateId!: string;
  currentRoute!: string;

  constructor(
    private formBuilder: FormBuilder,
    private careerService: CareerService,
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
    this.careerList = this.careerService.getCareersByProfile('');

    this.careerForm = this.formBuilder.group({
      position: [null],
      startDate: [null],
      endDate: [null],
      company: [null],
      isCurrentPosition: [null]
    });
  }

  onSubmitForm(): void {
    const newCareer: Career = {
      ...this.careerForm.value,
      id: this.careerList.length+1
    } 
    this.careerList.push(newCareer);
  }

  onDeleteCareer(careerId: string): void {
    this.careerList = this.careerList.filter(career => career.id !== careerId);
  }

  onClickPreviousPage(currentRoute?:string): void {
      const currentSideBarMenuActive = this.sideBarMenuService.getCurrentActiveSideBar(currentRoute);
      this.router.navigate([`${ currentSideBarMenuActive?.previousLink }`], { queryParams: { id: this.candidateId } });
  }

  onClickNextPage(currentRoute?:string): void {
      const currentSideBarMenuActive = this.sideBarMenuService.getCurrentActiveSideBar(currentRoute);
      this.router.navigate([`${ currentSideBarMenuActive?.nextLink }`], { queryParams: { id: this.candidateId } });
  }

}
