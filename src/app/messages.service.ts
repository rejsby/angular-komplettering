import { Injectable } from '@angular/core';

type ContactMessage = {
  name: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  test() {
    
  }

  sendMessage(message: ContactMessage) {
    console.log('Message object: ', message);
  }
}
