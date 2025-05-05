import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ueber-uns', component: AboutComponent },
    { path: 'leistungen', component: ServicesComponent },
    { path: 'kontakt', component: ContactComponent },
    { path: 'impressum', component: ImpressumComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }