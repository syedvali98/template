import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { AcademicsComponent } from './academics/academics.component';
import { ProjectsComponent } from './projects/projects.component';
import { OurStaffComponent } from './our-staff/our-staff.component';
import { ContactComponent } from './contact/contact.component';
import { CampusComponent } from './campus/campus.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    AcademicsComponent,
    ProjectsComponent,
    OurStaffComponent,
    ContactComponent,
    CampusComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about-us',component:AboutUsComponent},
      {path:'academics',component:AcademicsComponent},
      {path:'campus',component:CampusComponent},
      {path:'projects',component:ProjectsComponent},
      {path:'our-staff',component:OurStaffComponent},
      {path:'contact',component:ContactComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
