import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxScrollLockModule } from 'ngx-scroll-lock';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MediaComponent } from './pages/media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    ProjectsComponent,
    ActivitiesComponent,
    ContactComponent,
    MediaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxScrollLockModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
