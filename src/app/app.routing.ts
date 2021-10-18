import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule} from "@angular/router";

//Importar componentes

import { HomeComponent } from "./components/home/home.component";

const appRoutes : Routes = [{path: 'home', component: HomeComponent },
{path: '', component: HomeComponent }];

export const appRoutingProviders: any []=[];

export const routing: ModuleWithProviders <any>= RouterModule.forRoot(appRoutes);
