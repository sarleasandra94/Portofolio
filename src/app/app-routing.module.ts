import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './profile/contact/contact.component';
import { AboutMeComponent } from './profile/about-me/about-me.component';


const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }