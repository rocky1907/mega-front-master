import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";
import { ProductosComponent } from './components/product/product.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/addproduct/add.component';
import { DeleteComponent } from './components/borrarproductos/delete.component';
import { BitacoraComponent } from './components/bitacora/bitacora.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'productos', component: ProductosComponent,children:[
      {path:':categoria/:name',component:ProductosComponent},
      {path:':categoria',component:ProductosComponent}
    ]
  },
  {
    path: 'edit', component: EditComponent
  },
  {
    path: 'add', component: AddComponent
  },
  {
    path: 'delete', component: DeleteComponent
  },
  {
    path: 'bitacora', component: BitacoraComponent
  },
  {
    path: 'thankyou', component: ThankyouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
