import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/primeng';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {APP_ROUTING_PROVIDERS, ROUTING} from "./app.routes";

import { AppComponent } from './app.component';
import { RaidsComponent } from './raids/raids.component';
import { AboutComponent } from './about/about.component';
import {APP_BASE_HREF} from "@angular/common";
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { ColiseumComponent } from './coliseum/coliseum.component';
import { AmbushComponent } from './ambush/ambush.component';

@NgModule({
  declarations: [
    AppComponent,
    RaidsComponent,
    AboutComponent,
    NavigationbarComponent,
    ColiseumComponent,
    AmbushComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    MenuModule,
    TabMenuModule,
    FieldsetModule,
    BrowserAnimationsModule,
    ROUTING
  ],
  providers: [
    APP_ROUTING_PROVIDERS,
    {provide: APP_BASE_HREF, useValue: "/optcCH/"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
