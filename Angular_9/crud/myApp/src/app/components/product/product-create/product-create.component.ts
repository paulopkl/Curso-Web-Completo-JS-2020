import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';

// Interface
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.sass']
})
export class ProductCreateComponent implements OnInit {

  // coolAttribute = "any"
  product: Product = {
    name: '',
    price: null
  }

  constructor(private ProductService: ProductService, private router: Router) {}

  ngOnInit(): void {
  }
  
  createProduct(): void {
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage('Product create');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

  // doSomeThing(): void {
  //   alert('Doing something!');
  // }

}
