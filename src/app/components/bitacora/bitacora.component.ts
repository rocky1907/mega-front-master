import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
 
@Component({
  selector: 'mg-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.scss']
})
export class BitacoraComponent implements OnInit {
    public bitacoraProducts: Array<any>=[];
    public us:string="";
  constructor(public servicePeti: ProductsService,private _route:ActivatedRoute
    
  ) { }

  ngOnInit() {
    this.us = sessionStorage.key(0);
    this.getBitacorasPro();
  }
  getBitacorasPro(){
    this.servicePeti.bitacora(this._route.snapshot.url.toString()).then(
        (repos)=>{
          this.bitacoraProducts = repos;
        }
      );
  }
}
