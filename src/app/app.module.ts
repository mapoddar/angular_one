import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import {GitprofService} from './services/gitprof.service';
import { HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { RepotComponent } from './components/repot/repot.component';

@NgModule({
  declarations: [
    AppComponent,
    RepotComponent,
    ProfileComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GitprofService],
  bootstrap: [AppComponent]
})
export class AppModule { }
