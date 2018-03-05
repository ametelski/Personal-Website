import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { RouterModule, Routes } from '@angular/router';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';

const appRoutes: Routes = [
  { path: '',
  redirectTo: '/',
  pathMatch: 'full'
},
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    TopBannerComponent,
    BioComponent,
    ProjectsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
