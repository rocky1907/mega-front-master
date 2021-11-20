import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string='http://localhost:3000';
  status: string;
  errorMessage: any;

  constructor(private http: HttpClient) { }

  getOtherProducts(route:string):Promise<any>{
    return this.http.get
    (this.url+"/"+route+"/otros?id="+sessionStorage.key(0))
    .toPromise();
  }
  getFreshProducts(route:string):Promise<any>{
    return this.http.get
    (this.url+"/"+route+"/frescos?id="+sessionStorage.key(0))
    .toPromise();
  }
  bitacora(route:string):Promise<any>{
    return this.http.get
    (this.url+"/"+route+"?id="+sessionStorage.key(0))
    .toPromise();
  }
  consultaProducto(valor:any):Promise<any>{
    return this.http.get
    (this.url+"/buscar?id="+sessionStorage.key(0)+"&valor="+valor,valor)
    .toPromise()
  }
  realizarcompra(route:string,user:any,compras:any):Observable<any>{
    return this.http.post(this.url+"/"+route+"?id="+user+"&valor="+compras,compras);
  }
  ingresarProducto(route:string,user:any,producto:any):Observable<any>{
    return this.http.post(this.url+"/"+route+"?id="+user,producto);
  }
  updateProducto(route:string,user:any,producto:any):Observable<any>{
    return this.http.put(this.url+"/"+route+"?id="+user,producto);
  }
  borrarproducto(valor:any,ruta:any,user:any){
    this.http.delete(this.url+"/"+ruta+"?id="+user+"&valor="+valor)
    .subscribe({
        next: data => {
            this.status = 'Delete successful';
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    });
  }
}
