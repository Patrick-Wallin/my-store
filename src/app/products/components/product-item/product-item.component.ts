import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  selectedQuantity: number = 1;
  quantityList : Array<number> = [];

  constructor(private productsService: ProductsService, private matSnackBar: MatSnackBar) {
    this.product = {
      id : 1,
      name : '',
      price : 0,
      url : '',
      description : ''
    };

    this.quantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.productsService.addToCart(this.product.id, this.selectedQuantity, this.product.price, this.product.name, this.product.url);
    this.matSnackBar.open(this.selectedQuantity + " of " + this.product.name + " has been added to cart.", 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000
    });
  }
}
