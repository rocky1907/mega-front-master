import {Component, OnInit} from '@angular/core';

import {CartModelServer} from "../../models/cart.model";
import {ActivatedRoute, Router} from "@angular/router";

import {NgxSpinnerService} from "ngx-spinner";
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import { ProductsService } from 'src/app/services/products.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'mg-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartData: CartModelServer;
  cartTotal: Number;
  showSpinner: Boolean;
  checkoutForm: any;
  public total:any=0;
  public Listcompras: Array<any>=[];
  public Listprecios: Array<any>=[];

  public totalList: Array<any>=[];

  constructor(public servicePeti: ProductsService,
    private _route:ActivatedRoute,
              private router: Router,
              private  spinner: NgxSpinnerService,
              private fb: FormBuilder) {

    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],

    });
  }
  ngOnInit() {
    this.total = localStorage.getItem("total");
    this.Listprecios = localStorage.getItem("precios").split(",");
    this.Listcompras = localStorage.getItem("compra").split(",");
    this.getOtherProducts();
  }
  getOtherProducts(){
    this.servicePeti.getOtherProducts("productos").then(
        (repos)=>{
          for (let index = 0; index < repos.length; index++) {
            const element = repos[index];
            for (let index2 = 0; index2 < this.Listcompras.length; index2++) {
              if(element[0]==this.Listcompras[index2]){
              this.totalList.push(element);
            }
          }
          }
          this.getFreshProducts(); 
        }
      );
  }
  getFreshProducts(){
    this.servicePeti.getFreshProducts("productos").then(
        (repos)=>{
          for (let index = 0; index < repos.length; index++) {
            const element = repos[index];
            for (let index2 = 0; index2 < this.Listcompras.length; index2++) {
              if(element[0]==this.Listcompras[index2]){
              this.totalList.push(element);
            }
            }
          }
        }
      );
  }

  onCheckout() {

    this.Listcompras.forEach(async element => {
       await this.servicePeti.realizarcompra(this._route.snapshot.url.toString(), sessionStorage.key(0).toString(), element).subscribe(res => {
        alert("Compra realizada");
      },
        error => {
          alert("Ha ocurrido un error");
        })
    });
      /*for(let i =0;i<this.Listcompras.length;i++){
        switch (i) {
          case 1:{
            
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 2:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 3:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 4:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 5:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 6:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 7:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 8:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 9:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 10:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 11:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 12:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }case 13:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 14:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }

          case 15:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }case 16:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 17:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }

          case 18:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 19:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 20:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 21:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 22:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 23:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 24:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 25:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 26:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 27:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 28:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 29:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 30:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
          case 31:{
            this.servicePeti.realizarcompra(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.Listcompras[i]).subscribe(res => {
              alert("Compra realizada");
            },
            error => {
              alert("Ha ocurrido un error");
            })
            break;
          }
        
          default:
            break;
        }
    }*/
    this.Listcompras = new Array<any>();
    this.Listprecios= new Array<any>();
    this.totalList= new Array<any>();
    alert("Compra realizada");
    this.router.navigate(['/']);
  }
}
