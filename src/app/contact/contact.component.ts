import { Component, OnInit } from '@angular/core';

//man måste impoerta formcontrol och messages service för att kunna använda dom här
import { FormControl } from '@angular/forms';
import { MessagesService} from '../messages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //de här motsvarar de <input>fälten som finns i .html filen
  name = new FormControl('Your name');
  message = new FormControl('Your message');


  // här var man tvungen att skriva in messagesService för att 
  // det ska gå använda den i sendMessage()
  constructor(private messagesService: MessagesService) {
    messagesService.test();
  }

  ngOnInit(): void {
  }
// med den här metoden på det här stället i klassen
// så kan man anropa funktionen från .html filen
  sendMessage() {
    // här använder jag sendMessage från message service, kolla i service filerna
    this.messagesService.sendMessage({
      name: this.name.value,
      message: this.message.value
    });
  }

}
