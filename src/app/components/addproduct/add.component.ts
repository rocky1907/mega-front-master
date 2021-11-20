import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductModelServer } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
 
@Component({
  selector: 'mg-addproduct',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public seleccionado: any = "";
  opcionSeleccionado: string  = '0';
  opcionSeleccionado2: string  = '0';
  verSeleccion: string        = '';
  verSeleccion2: string        = '';
  public us:string="";
  public produc:ProductModelServer = new ProductModelServer();
  addForm1 = new FormGroup({
    PLU: new FormControl(''),
    EAN: new FormControl(''),
    peso: new FormControl(''),
    precio: new FormControl(''),
    descripcion: new FormControl(''),
  });

  addForm2 = new FormGroup({
    tipo2: new FormControl(''),
    EAN2: new FormControl(''),
    cantidad2: new FormControl(''),
    precioUnidad2: new FormControl(''),
    descripcion2: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder,public servicePeti: ProductsService,private _route:ActivatedRoute
  ) {
    this.addForm1 = this.formBuilder.group({
      PLU:['',Validators.required],
      EAN:['',Validators.required],
      peso:['',Validators.required],
      precio:['',Validators.required],
      descripcion:['',Validators.required]
    })
    this.addForm2 = this.formBuilder.group({
      tipo2:['',Validators.required],
      EAN2:['',Validators.required],
      cantidad2:['',Validators.required],
      precioUnidad2:['',Validators.required],
      descripcion2:['',Validators.required]
    })
   }
  ngOnInit() {
    this.us = sessionStorage.key(0);
  }
 
  onSubmit1() {
    this.produc.description = this.addForm1.value.descripcion;
    if(parseInt(this.addForm1.value.PLU)){
      this.produc.PLU = this.addForm1.value.PLU;
    }else{
      alert("EL PLU DEBE SER UN VALOR NUMERICO DE 6 DIGITOS");
      return;
    }
    this.produc.EAN = this.addForm1.value.EAN;
    this.produc.price = this.addForm1.value.precio;
    this.produc.peso = this.addForm1.value.peso;
    this.produc.category = "FRESCOS";

    this.servicePeti.ingresarProducto(this._route.snapshot.url.toString(),this.us,this.produc).subscribe(res => {
      alert("Producto ingresado exitoso");
      this.produc = new ProductModelServer();
      this.addForm1.reset();
    },
    error => {
      alert("El producto no se pudo insertar");
      this.produc = new ProductModelServer();
      this.addForm1.reset();
    })
    this.produc = new ProductModelServer();
    this.addForm1.reset();
  }

  onSubmit2() {
    this.produc.description = this.addForm2.value.descripcion2;
    this.produc.EAN = this.addForm2.value.EAN2;
    this.produc.price = this.addForm2.value.precioUnidad2;
    this.produc.quantity = this.addForm2.value.cantidad2;
    this.produc.category = this.addForm2.value.tipo2;
    this.servicePeti.ingresarProducto(this._route.snapshot.url.toString(),this.us,this.produc).subscribe(res => {
      alert("Producto ingresado exitoso");
      this.produc = new ProductModelServer();
      this.addForm2.reset();
    },
    error => {
      alert("El producto no se pudo insertar");
      this.produc = new ProductModelServer();
      this.addForm2.reset();
    })
    this.produc = new ProductModelServer();
    this.addForm2.reset();
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
}

capturar2() {
  // Pasamos el valor seleccionado a la variable verSeleccion
  this.verSeleccion2 = this.opcionSeleccionado2;
}
}
