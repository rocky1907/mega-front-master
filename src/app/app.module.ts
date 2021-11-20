import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {HttpClientModule} from "@angular/common/http";
import {ThankyouComponent} from './components/thankyou/thankyou.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from 'ngx-toastr';
import { ProductosComponent } from './components/product/product.component';
import { AppService } from './services/shared.service';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/addproduct/add.component';
import { DeleteComponent } from './components/borrarproductos/delete.component';
import { BitacoraComponent } from './components/bitacora/bitacora.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    ProductosComponent,
    ThankyouComponent,
    EditComponent,
    AddComponent,
    DeleteComponent,
    BitacoraComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
