import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepotComponent } from './components/repot/repot.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: "" , component: ProfileComponent },
  { path: "favourites" , component: RepotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
