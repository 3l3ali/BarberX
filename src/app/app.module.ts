import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { OurServicesModule } from './our-services/our-services.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ContactsModule } from './contacts/contacts.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    OurServicesModule,
    AppointmentsModule,
    ContactsModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
