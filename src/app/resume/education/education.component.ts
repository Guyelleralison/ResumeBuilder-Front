import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formation } from 'src/app/models/formation.model';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  formationList!: Formation[];
  formationForm!: FormGroup;

  constructor(private formationService: FormationService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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
}
