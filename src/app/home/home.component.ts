import { Component, OnInit } from '@angular/core';
import { Candidate } from '../models/candidate.model';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
