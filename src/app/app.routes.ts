import {Routes, RouterModule} from "@angular/router";
import {RaidsComponent} from "./raids/raids.component";
import {AboutComponent} from "./about/about.component";
import {ColiseumComponent} from "./coliseum/coliseum.component";
import {AmbushComponent} from "./ambush/ambush.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/raids",
    pathMatch: "full",
  },
  {
    path: "raids",
    component: RaidsComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "coliseum",
    component: ColiseumComponent
  },
  {
    path: "ambush",
    component: AmbushComponent
  }
];

export const APP_ROUTING_PROVIDERS: any[] = [];
export const ROUTING = RouterModule.forRoot(routes);
