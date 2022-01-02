import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MediaComponent } from './pages/media/media.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',  component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'media', component: MediaComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
