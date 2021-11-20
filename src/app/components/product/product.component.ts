import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { AppService } from 'src/app/services/shared.service';

@Component({
  selector: 'mg-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductosComponent implements OnInit {
    public param : any;
    public otherproductList: Array<any>=[];
    public freshproductList: Array<any>=[];
    public onlymercanciasList: Array<any>=[];
    public onlyabarrotesList: Array<any>=[];
    public onlypersonalList: Array<any>=[];
    public resultado : Array<any>=[];
  constructor(public servicePeti: ProductsService,private _route:ActivatedRoute,private appService: AppService) {
    
  }

  ngOnInit() {
    this.param = this._route.children.pop().snapshot.params.name;
    this.getOtherProductsss();
  }

  getOtherProductsss(){
    this.servicePeti.getOtherProducts(this._route.snapshot.url.toString()).then(
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
          this.getFreshProductss(); 
        }
      );
  }
  getFreshProductss(){
    this.servicePeti.getFreshProducts(this._route.snapshot.url.toString()).then(
        (repos)=>{
          this.freshproductList = repos;
        }
      );
  }
  agregaralcarro(valor:any){
    localStorage.removeItem("compra");
    localStorage.removeItem("precios");
    localStorage.clear();
    this.appService.add(valor);
    localStorage.setItem("compra",this.appService.getMyGV().toString());
    
    for (var i = 0; i < this.otherproductList.length; i++) {
     
      if (this.otherproductList[i][0] === valor) {
        //console.log("Otros: "+this.otherproductList[i]);
        this.resultado.push(this.otherproductList[i][2]);
      }
    }
    for (var i = 0; i < this.freshproductList.length; i++) {
      if (this.freshproductList[i][0] === valor) {
        //console.log("fresco: "+this.freshproductList[i]);
        this.resultado.push(this.freshproductList[i][3]);
      }
    }
    localStorage.setItem("precios",this.resultado.toString());
  }
}
