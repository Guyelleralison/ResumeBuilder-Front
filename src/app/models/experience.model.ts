import { Candidate } from "./candidate.model";

export class Experience{
    id!: string;
    positionTitle!: string;
    sector!: string;
    startDate!: string;
    endDate!: string;
    isCurrentPosition!: boolean;
    title!: string;
    description!: string;
    candidateId!: string;
    candidate?:Candidate;
}