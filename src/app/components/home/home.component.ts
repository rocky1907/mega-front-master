import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'mg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  constructor(
              private router:Router) {
  }

  ngOnInit() {
    /*this.productService.getAllProducts(8).subscribe((prods: serverResponse ) => {
      this.products = prods.products;
      console.log(this.products);
    });*/
  }

  AddProduct(id: Number) {
    /*this.cartService.AddProductToCart(id);*/
  }

  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }
}
