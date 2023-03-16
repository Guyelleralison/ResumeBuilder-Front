import { Component, OnInit } from '@angular/core';
import { Candidate } from '../core/models/candidate.model';
import { CandidateService } from '../core/services/candidate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
  }

}
