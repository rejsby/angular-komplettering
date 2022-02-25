import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.css']
})
export class FaqItemComponent implements OnInit {
  // man kan använda @Input och @Output för att skicka upp eller ner 
  // mellan komponenter, här skickas en varibel ner från faq-list.component.html
  @Input()
  question: string = '';

  // man kan använda @Input och @Output för att skicka upp eller ner 
  // mellan komponenter, här skickas en varibel ner från faq-list.component.html
  @Input()
  answer: string = '';

  constructor() {}
  // ngOnInit är en callback metod som invokas direkt så fort componenten börjar leva
  // den här gör ingenting, men den skulle t ex kunna göra saker med question och answer
  ngOnInit(): void {

  }

}
