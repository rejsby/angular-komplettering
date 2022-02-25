import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ThanksComponent } from './thanks/thanks.component';

// här definieras alla routes

const routes: Routes = [

  // här var man tvungen att lägga till sina components som routes, annars 
  // kommer de ej finnas tillgängliga för <a routerLink="enroute"> taggen
  { path: 'contact-component', component: ContactComponent, children: [
    { path: 'greeting', component: GreetingComponent },
    { path: 'thanks', component: ThanksComponent },
  ] },
  { path: 'faq-component', component: FaqComponent },
  { path: 'about-component', component: AboutComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
