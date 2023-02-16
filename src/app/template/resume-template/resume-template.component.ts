import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.scss']
})
export class ResumeTemplateComponent implements OnInit {

  title = 'htmlToPDF';

  constructor() { }

  ngOnInit(): void {
  }
   
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
   
  public downloadAsPDF() {
    // const doc = new jsPDF();
    // const pdfTable = this.pdfTable.nativeElement;
    
    // var html = htmlToPdfmake(pdfTable.innerHTML);
      
    // const documentDefinition = { content: html };
    // pdfMake.createPdf(documentDefinition).open(); 
      
  }

}
