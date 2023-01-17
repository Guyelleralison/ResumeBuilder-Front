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

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidates = this.candidateService.getCandidateList();
  }

  onEditProfile(profileId: string): void {

  }

  onShowProfile(profileId: string): void {

  }

}
