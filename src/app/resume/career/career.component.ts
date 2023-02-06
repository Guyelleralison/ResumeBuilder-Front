import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Career } from 'src/app/models/career.model';
import { CareerService } from 'src/app/services/career.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  careerList!: Career[];
  careerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private careerService: CareerService) { }

  ngOnInit(): void {
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

}
