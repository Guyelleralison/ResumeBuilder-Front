import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  candidates!: Candidate[];
  filterData!: Candidate[];

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidates = this.candidateService.getCandidateList();
    this.filterData = this.candidates;
  }

  onEditProfile(profileId: string): void {

  }

  onShowProfile(profileId: string): void {

  }

  search(event: any): void {
    if(event) {
      this.filterData = this.candidates.filter(x => 
        x.firstName.trim().toLowerCase().includes(event.target.value.trim().toLowerCase()) ||
        x.lastName.trim().toLowerCase().includes(event.target.value.trim().toLowerCase()) ||
        x.profiles.find(profile=>profile.title.trim().toLowerCase().includes(event.target.value.trim().toLowerCase()))
      );
    }
  }

}
