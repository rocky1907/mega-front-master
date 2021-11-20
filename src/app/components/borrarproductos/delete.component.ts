import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
 
@Component({
  selector: 'mg-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
    public otherproductList: Array<any>=[];
    public freshproductList: Array<any>=[];
    public onlymercanciasList: Array<any>=[];
    public onlyabarrotesList: Array<any>=[];
    public onlypersonalList: Array<any>=[];
    public resultado : Array<any>=[];
    public us:string="";
  constructor(public servicePeti: ProductsService,private _route:ActivatedRoute
    
  ) { }

  ngOnInit() {
    this.us = sessionStorage.key(0);
    this.getOtherProducts();
  }
  getOtherProducts(){
    this.servicePeti.getOtherProducts("productos").then(
        (repos)=>{
          this.otherproductList = repos;
          this.otherproductList.forEach(element => {
            if(element[4] == 'MERCANCIAS'){
              this.onlymercanciasList.push(element);
            }else{
              if(element[4] == 'ABARROTES'){
                this.onlyabarrotesList.push(element);
              }else{
                this.onlypersonalList.push(element);
              }
            }
          });
          this.getFreshProducts(); 
        }
      );
  }
  getFreshProducts(){
    this.servicePeti.getFreshProducts("productos").then(
        (repos)=>{
          this.freshproductList = repos;
        }
      );
  }

  delete(valor:any){
    console.log(valor);
    this.servicePeti.borrarproducto(valor,this._route.snapshot.url.toString(),this.us);
    window.location.reload();
  }

}
