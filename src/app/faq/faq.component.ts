import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  // sparade alla frågor och svar i en array av objektet
  // kommer använda de här i component.html filen för att skapa faq-items
  qas: any[] = [{
    question: 'Vilka frågor ska visas här?',
    answer: 'Vet inte.'
  }, {
    question: 'Frågorna från inlämning 1?',
    answer: 'Vet INTE!!'
  }, {
    question: 'Fråga!',
    answer: 'Svar?'
  }];

  constructor() { }

  ngOnInit(): void {
    
    }
}
