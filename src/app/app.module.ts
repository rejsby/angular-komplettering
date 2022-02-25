import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ThanksComponent } from './thanks/thanks.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FaqItemComponent } from './faq-item/faq-item.component';

// här i declarations och imports hamnade allt när jag skrev
// ng g c contact m.m
// då skapades en sån mapp för komponenten med respektive html/css filer


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    GreetingComponent,
    ThanksComponent,
    FaqComponent,
    AboutComponent,
    NotfoundComponent,
    FaqItemComponent
  ],
  imports: [
    BrowserModule,
    //man måste impoertera app routing för att kunna byta sidor ocksåm importeras först på rad2 och sen här
    AppRoutingModule,


    // i angular tutorialen så stod det att man kunde använda olika forms 
    // tog reactiveforms och då skulle man importera den här och lägga den i imports arrayen
    // det måste också importas frörst från @angular /forms (rad 3)

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 