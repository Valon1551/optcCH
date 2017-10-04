import {Routes, RouterModule} from "@angular/router";
import {RaidsComponent} from "./raids/raids.component";
import {AboutComponent} from "./about/about.component";
import {ColiseumComponent} from "./coliseum/coliseum.component";
import {AmbushComponent} from "./ambush/ambush.component";
import {BreakdownComponent} from "./breakdown/breakdown.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/about",
    pathMatch: "full",
  },
  {
    path: "raids",
    component: RaidsComponent
  },
  { path: 'raids/:raidID',
    component: BreakdownComponent},
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
