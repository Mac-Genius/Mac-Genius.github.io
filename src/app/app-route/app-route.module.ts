import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from '../about-me/about-me.component';
import { AppComponent } from '../app.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ResumeComponent } from '../resume/resume.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouteModule { }
