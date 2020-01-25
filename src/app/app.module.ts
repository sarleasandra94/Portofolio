import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './profile/navigation/navigation.component';
import { ContactComponent } from './profile/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
