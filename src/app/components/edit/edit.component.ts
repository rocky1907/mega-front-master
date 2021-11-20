import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModelServer } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
 
@Component({
  selector: 'mg-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    public param : any;
    public otherproductList: Array<any>=[];
    public freshproductList: Array<any>=[];
    public onlymercanciasList: Array<any>=[];
    public onlyabarrotesList: Array<any>=[];
    public onlypersonalList: Array<any>=[];
    public us:string="";
    public produc:ProductModelServer = new ProductModelServer();
    @ViewChild('quantity') quantityInput;
    @ViewChild('descripcion') descripcionInput;
    @ViewChild('cantidad') cantidadInput;

  constructor(public servicePeti: ProductsService,private _route:ActivatedRoute
    
  ) { }

  ngOnInit() {
    //this.param = this._route.children.pop().snapshot.params.name;
    this.getOtherProducts();
    if(sessionStorage.length>=1){
        this.us = sessionStorage.key(0);
      }
  }
  freshisempthy(){
      if(this.freshproductList.length == 0){
          return true;
      }
      return false;
  }
  getOtherProducts(){
    
    this.servicePeti.getOtherProducts("productos").then(
        (repos)=>{
          this.otherproductList = repos;
          console.log(this.otherproductList);
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
          console.log(this.freshproductList);
        }
      );
  }
  actulizarproducto(valor:any){
    if(this.us=="gerente_4"){
      let value2 = (document.getElementById("descripcion"+valor) as HTMLInputElement).value;
      this.produc.description = value2;
      this.produc.idP = valor;
      this.servicePeti.updateProducto(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.produc).subscribe(res => {
        alert("Se actualizaron los datos");
      },
      error => {
        alert("Ha ocurrido un error");
      })
    }else{
      let value = parseInt((document.getElementById("cantidad"+valor) as HTMLInputElement).value);
      let value2 = (document.getElementById("descripcion"+valor) as HTMLInputElement).value;
      this.produc.description = value2;
      this.produc.quantity = value;
      this.produc.idP = valor;
      this.servicePeti.updateProducto(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.produc).subscribe(res => {
        alert("Se actualizaron los datos");
      },
      error => {
        alert("Ha ocurrido un error");
      })
    }
  }

  actulizarproductoGerenteGeneral(valor:any){
    if(parseInt(valor)){
      let value2 = (document.getElementById("descripcion"+valor) as HTMLInputElement).value;
      this.produc.description = value2;
      this.produc.idP = valor;
      this.servicePeti.updateProducto(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.produc).subscribe(res => {
        alert("Se actualizaron los datos");
      },
      error => {
        alert("Ha ocurrido un error");
      })
    }else{
      let value = parseInt((document.getElementById("cantidad"+valor) as HTMLInputElement).value);
      let value2 = (document.getElementById("descripcion"+valor) as HTMLInputElement).value;
      this.produc.description = value2;
      this.produc.quantity = value;
      this.produc.idP = valor;
      this.servicePeti.updateProducto(this._route.snapshot.url.toString(),sessionStorage.key(0).toString(),this.produc).subscribe(res => {
        alert("Se actualizaron los datos");
      },
      error => {
        alert("Ha ocurrido un error");
      })
    }
  }

}
