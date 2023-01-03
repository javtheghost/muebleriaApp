import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    return [{
        name: 'Sillon chido',
        price: 5000,
        image: '../../assets/images/mueble1.jpg',
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
  constructor() { }
}
