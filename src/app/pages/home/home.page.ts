import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products: Product [] = [];
  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this.products = this._productService.getProducts();
  }

  getProducts(){
    this.products = [
      {
        name: 'Sillon chido',
        price: 5000,
        image: '../../assets/images/mueble1.jpg'
      },
      {
        name: 'Sillon cool',
        price: 5000,
        image: '../../assets/images/mueble2.jpg'
      },
      {
        name: 'Sillon cool',
        price: 5000,
        image: '../../assets/images/mueble3.jpg'
      },
    ]
  }
}
