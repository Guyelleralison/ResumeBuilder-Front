import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { map, Observable } from 'rxjs';
import { OnCreateForm } from 'src/app/interfaces/on-create-form';
import { SkillsCategory } from 'src/app/core/models/skills-category.model';
import { Skills } from 'src/app/core/models/skills.model';
import { SidebarMenuService } from 'src/app/core/services/sidebar-menu.service';
import { SkillService } from 'src/app/core/services/skills.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit, OnCreateForm {

  skillForm!: FormGroup;
  skills$!: Observable<Skills[]>;
  candidateId!: string;
  currentRoute!: string;

  constructor(
    private formBuilder: FormBuilder,
    private skillService: SkillService,
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
    this.skillForm = this.formBuilder.group({
      category: [null],
      technology: [null],
      version: [null]
    });

    this.route.queryParams.subscribe(param => {
      this.candidateId = param['id'];
      this.skills$ = this.skillService.getSkillsByCandidate(param['id']);
    });

  }

  onSubmitForm() {
    // const newSkill: Skills = {
    //   id: (this.skills.length+1).toString(),
    //   category: {
    //     id: '5',
    //     name: this.skillForm.value.category
    //   },
    //   technology: {
    //     id: '5',
    //     name: this.skillForm.value.technology,
    //     version: this.skillForm.value.version
    //   }
    // };

    // this.skills.push(newSkill);
  }

  onDeleteSkill(idSkill: string): void {
    //this.skills = this.skills.filter((skill) => skill.id !== idSkill);
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
