import {Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { AppService } from 'src/app/services/shared.service';
import {CartModelServer} from "../../models/cart.model";

@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() dataEntrante:any;
  public Listcompras: Array<any>=[];
  public Listprecios: Array<any>=[];
  cartData: CartModelServer;
  cartTotal: Number;
  public us:string="";
  public total:any=0;

  busqueda: FormGroup;

  constructor(public servicePeti: ProductsService,
    private appService: AppService,private formBuilder: FormBuilder) {
    this.busqueda = this.formBuilder.group({
      valor:  ['']
    })
  }

  ngOnInit() {
  }
  haylogin(){
    if(sessionStorage.length>=1){
      this.us = sessionStorage.key(0);
      return true;
    }
    return false;
  }
  logout(){
    this.us = "";
    sessionStorage.clear();
    localStorage.clear();
  }
  vercarrito(){
    if(localStorage.length!=0){
        this.Listcompras = localStorage.getItem("compra").split(",");
    }
  }
  quitardelcarro(valor:any){
    var resultado = []
    for (var i = 0; i < this.Listcompras.length; i++) {
      if (this.Listcompras[i] !== valor) {
        resultado.push(this.Listcompras[i]);
      }
    }
    this.Listcompras=resultado;
  }
  totalcompra(){
    this.total =0;
    if(localStorage.getItem("precios")!=null){
      this.Listprecios = localStorage.getItem("precios").split(",");
  }
  //console.log( this.Listprecios );
  this.Listprecios.forEach(element => {
    //console.log(element);
    this.total = this.total +  parseInt(element);
  });
    localStorage.setItem("total",this.total);
    return this.total;
  }
  buscar(){
    //console.log(this.busqueda.value.valor);
    if(this.busqueda.value.valor==""){
    alert("DEBE DE AGREGAR UN VALOR PARA BUSCAR");
    }
    else{
      this.servicePeti.consultaProducto(this.busqueda.value.valor).then(
        (repos)=>{
          //console.log(repos);
          let aux1 =repos[0][0];
          let aux2 =repos[0][1];
          let aux31 =0;
          let aux32 =0;
          if(repos.length>1){
            repos.forEach(element => {
              if(aux1==element[0]){
                aux31+=1;
              }else{
                if(aux2==element[1]){
                  aux32+=1;
                }
              }
            });
            if(aux31 == repos.length){
              alert("EL PRECIO DEL PRODUCTO QUE CONSULTO ES DE "+aux1);
              return;
            }else{
              alert("EL PRECIO DEL PRODUCTO QUE CONSULTO ES DE "+aux2);
              return;
            }
          }
        //console.log(sessionStorage.key(0));
        //console.log(repos);
        alert("EL PRECIO DEL PRODUCTO QUE CONSULTO ES DE "+repos[0]);
        }
      );
    }
  }
}

