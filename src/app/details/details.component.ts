
import { Component, OnInit } from '@angular/core';
// OnInit = LIVE CYCLE HOOK
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
// package that have some methods and properties that will help us to get the value from the URL and use it further
import { products } from '../products';
import { IProducts } from '../IProducts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product: IProducts = {} as IProducts;
  id: number = 0;

  // ActivatedRoute allows to access any Value 
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart() {
    window.alert('Your Food is added to the Cart');
    this.cartService.addToCart(this.product);
  }
  // GRAB THE VALUE FROM THE URL
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // 'productId' COMES FROM THE ROUTING
      this.id = +params['productId'];
      this.product = products[this.id];
    });

  }
}

